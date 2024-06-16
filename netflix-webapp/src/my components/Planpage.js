import React, { useEffect, useState } from 'react';
// import { useSelector} from 'react-redux';
import { collection, getDocs, query, where, setDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { loadStripe } from '@stripe/stripe-js';

function Planpage() {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  // const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => { 
      setUser(userAuth);
    });
    
  }, [user]);

  useEffect(() => {
    console.log('User:', user);
    const fetchData = async () => {
      const q = query(collection(db, 'products'), where('active', '==', true));

      try {
        const querySnapshot = await getDocs(q);
        const productsData = {};
        querySnapshot.forEach(async productDoc => {
          productsData[productDoc.id] = productDoc.data();
          const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));
          priceSnap.docs.forEach(price => {
            productsData[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [user]);
 
  const loadCheckout = async (priceId) => {
    const docRef = doc(db, `customers/${user.uid}/checkout_sessions
    `); 
      await setDoc(docRef, {
      price: priceId,
      window_url: window.location.origin,
      success_url: window.location.origin,
    });
    
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { sessionId } = docSnap.data();
      console.log(sessionId)
      if (sessionId) {
        const Stripe = await loadStripe("pk_test_51ODtJRSJrgAu8yQ09yEch3uP3zggPeZe9r2IoR6J8eYtGW2QbGxIH7Kcyu35QYmDb1a6FhEcD78hFjyORJTD6d7s00uItJJeoy");
        Stripe.redirectToCheckout({ sessionId });
      }
    } else {
      console.log('No such document!');
    }
  };


  return (
    <div className="planScreen">
      {Object.entries(products).map(([productId, productData]) => (
        <div key={productId} id="planScreen_plan" className="flex justify-between">
          <div id="planScreen_overview" className="text-white mt-7 font-bold">
            <h5>{productData.name}</h5>
            <h6>{productData.description}</h6>
          </div>
          <button
            type="button"
            className="bg-red-600 px-10 py-3 text-white rounded-md hover:bg-red-700 font-bold mt-9 ease-in transition-all duration-500"
            onClick={() => loadCheckout(productData.prices.priceId)}
          >
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
}

export default Planpage;


// install @stripe/stripe-js
// pk_test_51ODtJRSJrgAu8yQ09yEch3uP3zggPeZe9r2IoR6J8eYtGW2QbGxIH7Kcyu35QYmDb1a6FhEcD78hFjyORJTD6d7s00uItJJeoy