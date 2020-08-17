import React from 'react';
import PhoneImage from '../assets/img/phone.png';
import AllowImage from '../assets/img/allow.png';

const Header = () => {
  return (
    <>
        <header>
            <div className="inner-header">
                <div className="left-header">
                    <h1><a href="/">Exceptive</a></h1>
                    <ul>
                        <li><img src={AllowImage} alt="Product" /><a href="#Product">Product</a></li>
                        <li><img src={AllowImage} alt="Inquiry" /><a href="#Inquiry">Inquiry</a></li>
                        <li><img src={AllowImage} alt="About" /><a href="#About">About</a></li>
                    </ul>
                </div>
                <div className="right-header">
                    <img src={PhoneImage} alt="電話番号" />
                    <span className="phone">078-123-4567</span>
                    <span className="sales-time">営業時間 9:00〜18:00</span>
                </div>
            </div>
        </header>
        <style>{`
            header {
                background: #AD0202;
                top: 0;
                left: 0;
                right: 0;
                position: fixed;
                z-index: 1000;
            }
            header h1 {
                font-size: 25px;
                font-weight: 100;
                font-family: 'Times New Roman', Times, serif;
                margin: 0 50px 0 0;
            }
            header .inner-header {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                width: 850px;
                margin: 0 auto;
                padding: 25px 0;
            }
            header .left-header {
                display: flex;
                align-items: baseline;
            }
            header .left-header ul li {
                display: inline-block;
                margin: 0 40px 0 0;
            }
            header .left-header ul li:hover {
                border-bottom: 1px solid #fff;
            }
            header .left-header ul li img {
                display: inline-block;
                margin: 0 5px 0 0;
                top: 4px;
                position: relative;
            }
            header .right-header img {
                margin: 0 5px 0 0;
                top: 3px;
                position: relative;
            }
            header .right-header .phone {
                font-size: 24px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 0 15px 0 0;
                top: 2px;
                position: relative;
            }
            header .right-header .sales-time {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
        `}
        </style>
    </>
  );
}

export default Header;
