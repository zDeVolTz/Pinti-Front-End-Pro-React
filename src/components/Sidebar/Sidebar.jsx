import React from 'react';

class Sidebar extends React.Component {
   
    render() {
        return (
            <section className='sidebar'>
                <h2 className='sidebar__title'>Категорії</h2>
                <ul className='sidebar__nav'>
                    <li><a className='sidebar__nav-link' href='/'>Табак для кальяна</a></li>
                    <li><a className='sidebar__nav-link' href='/'>Вугілля</a></li>
                    <li><a className='sidebar__nav-link' href='/'>Кальяни</a></li>
                    <li><a className='sidebar__nav-link' href='/'>Аксесуари</a></li>
                </ul>
            </section>
        );
    }
}


export default Sidebar;