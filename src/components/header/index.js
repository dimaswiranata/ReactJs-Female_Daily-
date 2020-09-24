import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FMLogo from "assets/icons/female_daily_icon.png";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function index() {
  return (
    <div className="flex flex-row fixed z-50 bg-white items-center border-t border-b border-gray-400 w-screen">
      <div className="flex flex-row p-3">
        <MenuIcon color="disabled" style={{ fontSize: 30, color: '#343434' }}/>
        <img
          src={FMLogo}
          className="h-8 ml-3"
          alt={`female logo`}
        />
      </div>
      <div className="flex flex-row p-2 ml-8 mr-6 border rounded-lg border-gray-400 w-3/4">
        <SearchIcon/>
        <input className="outline-none ml-2 w-full" placeholder="Search products, articles, topics, brands, etc"/>
      </div>
      <div className='flex justify-center bg-red-400 h-16 w-64 top-0 bottom-0 ml-2'>
        <div className="flex flex-row items-center">
          <AccountCircleOutlinedIcon  style={{ color: 'white' }}/>
          <button className="ml-2">
            <div className="text-white">
              LOGIN / SIGN UP
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default index
