import React from 'react';
import Link from 'next/link';
import User1 from '../app/user.png';

const Aside = () => {
  return (
    <aside className='container-aside'>
      <div>
        <Link href='/'>
          <a className='aside-link'>Home</a>
        </Link>
        <Link href='/'>
          <a className='aside-link'>Products</a>
        </Link>
        <Link href='/'>
          <a className='aside-link'>Services</a>
        </Link>
        <Link href='/'>
          <a className='aside-link'>Contact</a>
        </Link>
        <Link href='/'>
          <a className='aside-link'>Other</a>
        </Link>
      </div>
      <div className='div-img'>
        <img className='img-user' src={User1} alt="User" />
        <h6>User Current: first name</h6>
      </div>
    </aside>
  );
};

export default Aside;
