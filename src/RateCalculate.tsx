import React from 'react'
import PropTypes  from 'prop-types'
import './index.css';
// import axios from 'axios'
// import { useState ,useEffect} from 'react'


//  const url=`https://v6.exchangerate-api.com/v6/b674eba9fac2f388e6a4c505/latest/USD`


function RateCalculate(props) {
  // let rates=props.arrayData

  // const [rates,setRates]=useState([])

      ////////////
    //   useEffect(()=>{ 
   
    //     axios.get(url).then((response)=>{
    //         const rates = response.data
    //         setRates(rates)
     
    //     }).catch((err)=>console.log(err))
    // console.log(rates)
     
    //   }, []) 



  return (
//     <div exchangeCalculate>             
// <input type='number' className='from' value={''}/> 
//     <select className='dropdown' value={''}>
//         {rates.map((rate,idnex)=>(         
//             <option key={idnex} value={rate}>{rate}</option>
//             ))}
//     </select>
//     </div>

<div className='exchangeCalculate'>             
<input type='number' className='from' value={props.amount}    onChange={(e) => props.onAmountChange((e.target.value))}/> 
    <select className='dropdown' value={props.currency}    onChange={(e) => props.onCurrencyChange((e.target.value))}>
        {props.currencies.map((currency:string)=>(         
            <option  value={currency}>{currency}</option>
            ))}
    </select>
    </div>
  )
}

RateCalculate.propTypes ={
    amount:PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies:PropTypes.array,
    onAmountChange:PropTypes.func,
    onCurrencyChange:PropTypes.func,
   
   }

export default RateCalculate