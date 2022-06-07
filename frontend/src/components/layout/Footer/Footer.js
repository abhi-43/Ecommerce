import React from 'react'
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={ playstore } alt="playstore" />
            <img src={ appstore } alt="Appstore" />
        </div>

        <div className='midFooter'>
            <h1>ECOMMERCE</h1>
            <p>High Quality Is Our First Priority</p>
            <p>Copyrights 2022 &copy;Abhishek Kumar</p>
        </div>

        <div className='rightFooter'>
            <h4>Follow Us</h4>
            <a href="https://github.com/abhi-43">Github</a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-30a769200/">LinkedIn</a>
            <a href="https://www.instagram.com/abhishek.ak_/">Instagram</a>
        </div>

    </footer>
  )
}

export default Footer;