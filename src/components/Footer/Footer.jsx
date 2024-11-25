import React, { useEffect, useState } from 'react';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        <p className='p-3 m-0 text-center'>copyright &copy; made by Ionut Cora, 2021-{newDate}</p>
    </footer>
  )
}

export default Footer;