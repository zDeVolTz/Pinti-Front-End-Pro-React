import React from 'react';

class Header extends React.Component {
   
    render() {
        return (
            <header className='header'>
                <div className='header__logo'></div>
                <ul className='header__nav'>
                    <li><a className='header__nav-link' href='/'>Каталог</a></li>
                    <li><a className='header__nav-link' href='/'>Блог</a></li>
                    <li><a className='header__nav-link' href='/'>Співпраця</a></li>
                    <li><a className='header__nav-link' href='/'>Наші контакти</a></li>
                </ul>
            </header>
        );
    }
}


export default Header;