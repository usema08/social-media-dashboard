import React from 'react'
import './Lower.css'
import facebookSvg from '../images/icon-facebook.svg'
import twitterSvg from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import arrowup from '../images/icon-up.svg'
import arrowdown from '../images/icon-down.svg'

export const Lower = () => {
  return (
    <>
    <div className='overview'>Overview - Today</div>
    <div className='cards'> 
      <div className='row'>
        <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Page Views
          <p>87</p></div>
          <div>
          <img className='img-up' src={facebookSvg} alt='facebook' />
          <div className='dpart'>
            <img src={arrowup} alt='up'/>
            <span>3%</span>
          </div>
          </div>
          </div>    
        </div>
        <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Retweets
          <p>117</p></div>
          <div>
          <img className='img-up' src={twitterSvg} alt='twitter' />
          <div className='dpart'>
            <img src={arrowup} alt='up'/>
            <span>303%</span>
          </div>
          </div>
          </div>    
        </div>
        
      </div>
      <div className='row'>
      <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Likes
          <p>52</p></div>
          <div>
          <img className='img-up' src={facebookSvg} alt='facebook' />
          <div className='arrowdown'>
            <img src={arrowdown} alt='down'/>
            <span>2%</span>
          </div>
          </div>
          </div>    
        </div>
        <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Likes
          <p>507</p></div>
          <div>
          <img className='img-up' src={twitterSvg} alt='twitter' />
          <div className='dpart'>
            <img src={arrowup} alt='up'/>
            <span>553%</span>
          </div>
          </div>
          </div>    
        </div>
      </div>
      <div className='row'>
      <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Likes
          <p>5462</p></div>
          <div>
          <img className='img-up' src={instagram} alt='insta' />
          <div className='dpart'>
            <img src={arrowup} alt='up'/>
            <span>2257%</span>
          </div>
          </div>
          </div>    
        </div>
        <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Page Views
          <p>107</p></div>
          <div>
          <img className='img-up' src={youtube} alt='youtube' />
          <div className='arrowdown'>
            <img src={arrowdown} alt='down'/>
            <span>19%</span>
          </div>
          </div>
          </div>    
        </div>
      </div>
      <div className='row'>
      <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Profile Views
          <p>52k</p></div>
          <div>
          <img className='img-up' src={instagram} alt='insta' />
          <div className='dpart'>
            <img src={arrowup} alt='up'/>
            <span>1375%</span>
          </div>
          </div>
          </div>    
        </div>
        <div className='column-1'>
          <div className='upart'>
          <div className='upp'>Total Views
          <p>1407</p></div>
          <div>
          <img className='img-up' src={youtube} alt='youtube' />
          <div className='arrowdown'>
            <img src={arrowdown} alt='down'/>
            <span>12%</span>
          </div>
          </div>
          </div>    
        </div>
      </div>
    </div>
    </>
  )
}
