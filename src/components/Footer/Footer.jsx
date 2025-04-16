import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        <p className='pt-3 m-0 text-center'>copyright &copy; Korlake Restaurant, 2021-{newDate}</p>
        <p className='pb-3 m-0 text-center'>Designed and developed by <Link to='https://www.ionutcora.com/' style={{color: '#000000'}} target="_blank">Ionut Cora</Link></p>
    </footer>
  )
}

export default Footer;