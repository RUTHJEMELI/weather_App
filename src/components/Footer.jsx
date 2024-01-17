import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='fixed bottom-0 w-full bg-gray-200 text-center py-2 font-semibold'>
            <p>&copy; {currentYear} All rights reserved.</p>
        </div>
    );
};

export default Footer;
