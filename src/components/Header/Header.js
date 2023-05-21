import React from 'react'
import './Header.css'
import { FavoriteBorder, LoginOutlined} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Header = () => {
  // const favPage = 

  return (
    <div className='header-container'>
      <div className='header-items'>
        <div className='header-item'>
            <h5>Hello, Sign In to your account <LoginOutlined/></h5>
            <h3>Check Out This Awesome Movie suggestions!</h3>
            <div className='avatar'>
                <img src='https://cdn-icons-png.flaticon.com/512/16/16363.png' alt='' className='avatar-icon'/>
            </div>
        </div>
        <Link to='/favourites'>
          <div className='header-item'>
              <FavoriteBorder/>
              <h5>My List</h5>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
