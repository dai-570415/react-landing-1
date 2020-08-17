import React from 'react';
import MainImage from '../assets/img/main.png';
import ConfirmBlkImage from '../assets/img/confirm_blk.png';

const Top = () => {
  return (
    <>
        <div className="top">
            <div className="inner-top">
                <div className="left-top">
                    <img src={MainImage} alt="Main" />
                </div>
                <div className="right-top">
                    <h2>Exceptive<br />
                    Service</h2>
                    <p>こちらはランディングページサンプルです。<br />
                    テンプレートとしてご利用ください。</p>
                    <a href="#Inquiry">
                        <img src={ConfirmBlkImage} alt="お問い合わせはこちら" />
                    </a>
                </div>
            </div>
        </div>
        <style>{`
            .top {
                background: linear-gradient(#AD0202, #570101);
            }
            .inner-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 850px;
                margin: 75px auto 0;
                height: 604px;
            }
            .inner-top .left-top img {
                width: 90%;
                vertical-align: bottom;
                top: 92px;
                position: relative;
            }
            .inner-top .right-top {
                text-align: right;
            }
            .inner-top .right-top h2 {
                font-size: 105px;
                font-weight: 100;
                font-family: 'Times New Roman', Times, serif;
                line-height: 1;
                margin: 0 0 20px 0;
                opacity: .7;
                filter: drop-shadow(5px 5px 10px rgba(95, 0, 0, 1));
            }
            .inner-top .right-top p {
                font-size: 15px;
                line-height: 1.75;
                margin: 0 0 50px 0;
                opacity: .7;
            }
            .inner-top .right-top img {
                vertical-align: bottom;
                width: 300px;
                transition: .5s;
            }
            .inner-top .right-top img:hover {
                filter: drop-shadow(0 0 5px rgba(255, 255, 255, .8));
            }
        `}
        </style>
    </>
  );
}

export default Top;
