import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'


export const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
          alt='facebook_logo'
        />

        <div className='header__input'>
          <SearchIcon />
          <input
            placeholder='Search Facebook'
            type='text'
          />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>

      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>DwarfDev666</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>

      </div>
    </div>
  )
}