import React, {useState, /*useEffec*/
} from 'react'
// import axios from 'axios';
// import { slide as Menu } from "react-burger-menu";
import {FiHelpCircle} from 'react-icons/fi';
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import {Link} from 'react-router-dom';
import {TiPlus} from 'react-icons/ti';
import {TbMinusVertical} from 'react-icons/tb'
import {BsGlobe, BsNewspaper} from 'react-icons/bs'
import './Rate.css'
import PropTypes from 'prop-types'
import {FaFacebook, FaTwitter} from 'react-icons/fa';
import home from './images/home.png'
// import RateCalculate from './RateCalculate'
import {FiMenu} from 'react-icons/fi';
// import { CgNotifications } from 'react-icons/cg';
import {BsBell} from 'react-icons/bs';
// const url=`https://v6.exchangerate-api.com/v6/b674eba9fac2f388e6a4c505/latest/USD`

function Rate(props) { // funtion to display date
    let currentDate = new Date();
    let clock = currentDate.toLocaleTimeString();
    const [date, setDate] = useState(new Date());


    const [amount1, setAmount1] = useState(10);
    const [amount2, setAmount2] = useState(22);
    const [currency1, setCurrency1] = useState('GHS');
    const [currency2, setCurrency2] = useState('USD');


    // function to calculate rate
    // function handleCurrency1Change(currency1:string):void{
    //     setAmount2(amount1*4/*[currency2]*//2/*[currency1]*/);
    //     setCurrency1(currency1);
    // }

    // function handleCurrency2Change(currency2:string):void{
    //     setAmount1(  amount2 *4/*[currency1]*//2/*[currency2]*/);
    //     setCurrency2(currency2);
    // }

    // function handleAmount1Change(amount1: number):void{
    //     setAmount2(amount1*4/*[currency2]*//2/*[currency1]*/);
    //     setAmount1(amount1);
    // }

    // function handleAmount2Change(amount2: number):void{
    //     setAmount1(amount2*4/*[currency1]*//2/*[currency2]*/);
    //     setAmount2(amount2);
    // }

    //


    // ///
    // sidebAT CONFIG


    return (
        <> {/* header component */}
            <div className='head'>
                <div className='RatelogoContainer'>
                    <Link to='/' className='link'>
                        <label>AMALIT<div className='eDesign'></div>CH</label>
                        <p className='logotexts'>Currency Converter</p>
                    </Link>
                </div>
                <div className='more'>
                    <ul>
                        <details data-popover="down">
                            <summary>Tools</summary>
                            <div>
                                <p>Currency Converter
                                </p>
                                <p>Historical Currency Rates</p>
                                <p>Rate Alert
                                </p>
                            </div>
                        </details>

                        <details data-popover="down">
                            <summary>Exhange Rate Api</summary>
                            <div>
                                <p><BsBell/>
                                    API
                                </p>
                            </div>
                        </details>
                        <details data-popover="down">
                            <summary>Resources</summary>
                            <div>
                                <Link to='/Search' className='link'>
                                    <p><FiHelpCircle/>
                                        Help Center
                                    </p>
                                </Link>
                                <p>
                                    <div></div><BsNewspaper/>
                                    Currency Newsletter</p>
                                <p>
                                    <div></div><TiPlus/>
                                    More</p>
                            </div>
                        </details>

                    </ul>
                </div>
                <div className='language'>
                    <Link to='App' className='link'>
                        <div id='sign'>Sign in</div>
                    </Link>
                    <Link to='/SignUp' className='link'>
                        <button className='btnRegister'>Register</button>
                    </Link>
                    <div className='sign'><BsGlobe className='globe'/>
                        EN
                    </div>
                    <div className='sidebar'>

                        {/* <ul>  */}
                        <div className='side'>
                            <FiMenu className='menubtn' id="mySidenav"></FiMenu>

                        </div>
                        {/* </ul> */} </div>
                </div>
            </div>
            {/*end of header  */}
            <div className='homePage'>
                <img alt='background' className='backImage'
                    src={home}/>

                <div className='exchang'>
                    <div className='exchangeDetails'>
                        <div className='exchangeTitle'>
                            <h3>Ghana Cedi to Us Dollor
                            </h3>
                            <p>Convert {currency1}
                                to {currency2}</p>
                            <h5>1 {currency1}
                                = 0.09 {currency2}</h5>
                        </div>
                        <div className='exchangeInput'>

                            {/* rate calculate tag */}
                            <div className='exchangeCalculate'>
                                <div className='inputContainer'>
                                    <input type='number' className='from'
                                        value={amount1}/> {/* orange bar between number input and currency selector */}
                                    <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="bar" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 5v20"></path>
                                    </svg>
                                    <select className='dropdown'
                                        value={currency1}
                                        onChange={
                                            (e) => setCurrency1((e.target.value))
                                    }>
                                        <option>{currency1}</option>
                                        <option>🅱️ USA
                                        </option>
                                        <option>🅱️ GHS
                                        </option>
                                        <option>🅱️ TG
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* end rate calculate */}
                            <CgArrowsExchangeAlt className='flipicon'/> {/* rate calculate tag */}
                            <div className='exchangeCalculate'>
                                <div className='inputContainer'>
                                    <input type='number' className='to'
                                        value={amount2}/> {/* orange bar between number input and currency selector */}
                                    <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="bar" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 5v20"></path>
                                    </svg>
                                    {/*  */}
                                    <select className='dropdown'
                                        value={currency2}
                                        onChange={
                                            (e) => setCurrency2((e.target.value))
                                    }>
                                        <option>{currency2}</option>
                                        <option>🅱️ USA
                                        </option>
                                        <option>🅱️ GHS
                                        </option>
                                        <option>🅱️ TG
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* end rate calculate */} </div>
                        <br/>
                        <div className='calender'>
                            <p>Mid-market exchange rate at {clock}</p>
                            <input className='date' type="date"
                                value={
                                    date.toISOString().substr(0, 10)
                                }
                                onChange={
                                    (e) => setDate(new Date(e.target.value))
                                }/>
                        </div>
                    </div>
                </div>
                <div className='ratelist'>
                    <div className='rateFrom'>
                        <div className='fromHead'>
                            <div className='headCenter'>
                                <h3>Convert {currency1}
                                    to {currency2}</h3>
                                <div className='spacing'>
                                    <div className='Holder'>💢 {currency1}</div>
                                    <div className='Holder'>💢 {currency2}</div>
                                </div>
                            </div>
                        </div>
                        <div className='fromBody'>
                            <div className='fromHolder'>1 {currency1}</div>
                            <div className='toHolder'>1 {currency2}</div>
                            <div className='fromHolder'>5 {currency1}</div>
                            <div className='toHolder'>5 {currency2}</div>
                            <div className='fromHolder'>10 {currency1}</div>
                            <div className='toHolder'>10 {currency2}</div>
                            <div className='fromHolder'>25 {currency1}</div>
                            <div className='toHolder'>25 {currency2}</div>
                            <div className='fromHolder'>50 {currency1}</div>
                            <div className='toHolder'>50 {currency2}</div>
                            <div className='fromHolder'>100 {currency1}</div>
                            <div className='toHolder'>100 {currency2}</div>
                            <div className='fromHolder'>1000 {currency1}</div>
                            <div className='toHolder'>1000 {currency2}</div>

                        </div>
                    </div>
                    <div className='rateTo'>
                        <div className='toHead'>
                            <div className='toHeadContainer'>
                                <h3>Convert {currency2}
                                    to {currency1}</h3>
                                <div className='fromBodyHead'>
                                    <div className='Holder'>💢 {currency2}</div>
                                    <div className='Holder'>💢 {currency1}</div>
                                </div>
                            </div>
                        </div>
                        <div className='toBody'>
                            <div className='fromHolder'>1 {currency2}</div>
                            <div className='toHolder'>1 {currency1}</div>
                            <div className='fromHolder'>5 {currency2}</div>
                            <div className='toHolder'>5 {currency1}</div>
                            <div className='fromHolder'>1O {currency2}</div>
                            <div className='toHolder'>10 {currency1}</div>
                            <div className='fromHolder'>25 {currency2}</div>
                            <div className='toHolder'>25 {currency1}</div>
                            <div className='fromHolder'>50 {currency2}</div>
                            <div className='toHolder'>50 {currency1}</div>
                            <div className='fromHolder'>100 {currency2}</div>
                            <div className='toHolder'>100 {currency1}</div>
                            <div className='fromHolder'>1000 {currency2}</div>
                            <div className='toHolder'>1000 {currency1}</div>
                        </div>
                    </div>
                </div>
                <div className='label'>
                    <h2>Currency Information</h2>
                </div>
                <div className='ratelist'>
                    <div className='rateFrominfo'>
                        <div className='fromBodyinfo'>
                            <div className='title'>
                                <h3>🏁 {currency1}</h3>
                            </div><br/>
                            <div className='fromHolder'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam adipisci corrupti velit amet in, nulla aspernatur ipsa a modi consequatur odio quae facere possimus illum? Enim sapiente nihil quibusdam reiciendis.</div>
                        </div>
                    </div>

                    <div className='rateToinfo'>
                        <div className='toBodyinfo'>
                            <div className='title'>
                                <h3>🏁 {currency2}</h3>
                            </div><br/>
                            <div className='toHolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias eos beatae aliquid consectetur, et quas earum repudiandae laudantium error dolorum, quos, quo tempore suscipit fugiat a. Porro, repudiandae laborum.</div>
                        </div>
                    </div>
                </div>
                {/*    FOOTER CONTENT */}
                <div className='foot'>
                    {/* <div className='footHolder'> */}
                    <div className='logomake'>
                        <Link to='/' className='link'>

                            <label>AMALIT<div className='eDesign'></div>CH</label>
                            <p className='logotexts'>Currency Converter</p>
                        </Link>
                    </div>
                    <div className='footSpace'>
                        <div className='toolsTab'>
                            <h3>Tools</h3>
                            <p>Currency Convertor</p>
                            <p>Historical Currency Rates</p>
                            <p>Rate Alert</p>
                        </div>
                        <div className='exchangeTab'>
                            <h3>Exchange Rate Api</h3>
                            <p>Exchange Rate Api</p>
                            <p>Free Trial</p>
                            <p>Pricing</p>
                            <p>Developers</p>
                        </div>
                        <div className='aboutTab'>
                            <h3>About Us</h3>
                            <FaFacebook className='facebook'/>
                            <FaTwitter className='twitter'/>
                        </div>
                    </div>
                    {/* </div> */} </div>
                {/* END OF FOOTER */} </div>

        </>
    )
}
Rate.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    // onAmountChange:PropTypes.func,
    // onCurrencyChange:PropTypes.func,

}


export default Rate
