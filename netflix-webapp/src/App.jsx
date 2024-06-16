import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {auth} from './firebase'
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Browse from './pages/Browse';
import { login, logout } from './features/userSlice';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
        setUser(userAuth);
        //dispatch => login == email: userAuth.email, password: userAuth.password
      } else {
        dispatch(logout());
        setUser(null);
      
      }
    });
    return unsubscribe;
  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Routes>
            <Route index element={<Signup/>} />
            <Route exact path="/login" element = {<Login/>} />
            <Route exact path="/signup" element = {<Signup/>} /> 
          </Routes>
        ) : (
          <Routes>
            <Route index element={<Signup/>} />
            <Route exact path="/homepage" element = {<Homepage/>} /> 
            <Route exact path='/browse' element = {<Browse/>}/>
            <Route exact path="/login" element = {<Login/>} />
            <Route exact path="/signup" element = {<Signup/>} />
            <Route exact path="/profile" element={<Profile/>} />
         </Routes>
        )}
      </Router>

    </div>
  );
}
export default App;
