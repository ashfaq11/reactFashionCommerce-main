
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  './_top-nav.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//import {GoogleLogin} from "react-google-login"
//import {gapi} from 'gapi-script';
import { useMediaQuery } from 'react-responsive'
{/*}
const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are retina</p>}
    </div>
  )
}*/}
const TopNav = function()
{


  const successHandler=(res)=>{

    console.log(res);
  }
  const cartItemCount= useSelector(state=>state.cartReducer.totalItems);
//console.log("count",cartItemCount);
    return(
        <div className='header bg-dark'>
        <div className='topnavrow row'>
          <div className='brand my-1'>
            <h1 style={{textAlign: "center"}}> Coforge Rewards Shop </h1>
            <div className='cart-wishlist'>
            <ul className="p-0">
               <li className="list-icon" > <Link to="/cart"> <FontAwesomeIcon icon="fa fa-shopping-cart" style={{color:"white"}}/>{cartItemCount>0 && <div className='cart-item-count'><p>{cartItemCount}</p></div>}</Link> </li>
            </ul>

          </div>
          </div>
         {/*
         
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select className='select-btn w-100 p-0 m-0' >
                <option> Men </option>
                <option> Women </option>
                <option> Kids </option>
              </select>
            </div>
            <input className='form-control   ' placeholder='Search...'/>
            <button> <FontAwesomeIcon icon='fa fa-search'/> </button>
    
          </div>
          <div className="login-container p-0">
          <FontAwesomeIcon icon="fa fa-user-circle"/>
            <h5>
              </h5>
          </div>
          */}
         
        
        </div>
      </div>

    )




}

export default TopNav;
