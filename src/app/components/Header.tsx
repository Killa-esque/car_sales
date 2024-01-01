'use client'
import React from 'react'
import HeaderDrawer from './HeaderDrawer';
import header from '../assets/css/header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="navbar mb-3 fixed-top bg-transparent">
        <div className='container-fluid'>
          <div className={header['header-left']}>
            <div className='btn-show-category-offcanvas'>
              <HeaderDrawer name={"drawer"} />
            </div>
            <div className={header['line']}></div>
          </div>
          <div className={header['header-center']}>
            <Link href='/'>
              <img className={header["img-fluid"]} width={50} src="https://volkswagenmiennam.com.vn/wp-content/uploads/2020/09/cropped-logo-transparent-3.png" alt="" />
            </Link>
          </div>
          <div className={header['header-right']}>
            <div className='btn-search'>
              <HeaderDrawer name={"search"} />
            </div>
            <div className={header['line']}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
