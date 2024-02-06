import React from 'react'
import './Upper.css'
import facebookSvg from '../images/icon-facebook.svg'
import twitterSvg from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import arrowup from '../images/icon-up.svg'
import arrowdown from '../images/icon-down.svg'


export const Upper = () => {
  return (<>
    <div className='container'>
        <div className='row-1'>
          <div className='names'>
            <img src={facebookSvg} alt='facebook-icon'></img>
            <div className='name-n'>@nathanf</div>
          </div>
          <h1>1987</h1>
          <p>F O L L O W E R S</p>
          <div className='today'>
            <img src={arrowup} alt='up ' />
            <span className='green'>12 Today</span>
          </div>
        </div>
        <div className='row-2'>
          <div className='names'>
            <img src={twitterSvg} alt='twitter'></img>
            <div className='name-n'>@nathanf</div>
          </div>
          <h1>1044</h1>
          <p>F O L L O W E R S</p>
          <div className='today'>
            <img src={arrowup} alt='up ' />
            <span className='green'>99 Today</span>
          </div>
        </div>
        <div className='row-3'>
          <div className='names'>
            <img src={instagram} alt='instagram'></img>
            <div className='name-n'>@realnathf</div>
          </div>
          <h1>11k  </h1>
          <p>F O L L O W E R S</p>
          <div className='today'>
            <img src={arrowup} alt='up ' />
            <span className='green'>1099 Today</span>
          </div>
        </div>
        <div className='row-4'>
          <div className='names'>
            <img src={youtube} alt='youtube'></img>
            <div className='name-n'>Nathan F.</div>
          </div>
          <h1>8239</h1>
          <p>S U B S C R I B E R S</p>
          <div className='today'>
            <img src={arrowdown} alt='up ' />
            <span className='red'>144 Today</span>
          </div>
        </div>
    </div>  
  </>
  )
}
