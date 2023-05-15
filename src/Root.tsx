import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Rate from './Rate';
import Signup from './Signup';
import React from 'react'
import App from './App';
// import Search from './Search';
// import Reset from './Reset';
// import ResetPass from './ResetPass';
// import axios from 'axios';
// import { useState,useEffect } from 'react';

// const url=`https://v6.exchangerate-api.com/v6/b674eba9fac2f388e6a4c505/latest/USD`


function Roots() {

    //array for all countries
//     const [rates, setRates] = useState([]) 

  
//   useEffect(()=>{ 
   
//     axios.get(url).then((response)=>{
//         const rates =Object.keys(response.data.conversion_rates)
//         setRates(rates)
 
//     }).catch((err)=>console.log(err))

 
//   }, []) 

  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path='/Rate' element={<Rate />}/>
          <Route path='Signup' element={<Signup />}/>
          <Route path='/' element={<App/>}/>
          {/* <Route path='Search' element={<Search />}/>         
          <Route path='Reset' element={<Reset />}/>
          <Route path='ResetPass' element={<ResetPass />}/>  */}

           
         </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default Roots