import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerwidth h-container'>
            <img src="./logo.png" alt='logo' className='lo' width={100}/>
            <div className="flexCenter h-menu">
                <a href="">Recidencies</a>
                <a href="">Our value</a>
                <a href="">contact us</a>
                <a href="">get started</a>
                <button className='button'>
                <a href="">contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default Header