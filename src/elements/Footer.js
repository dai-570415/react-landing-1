import React from 'react';

const Footer = () => {
  return (
    <>
        <footer>
            <div className="inner-footer">
                <div className="left-footer">
                    © 2020 Mockup.  All Rights Reserved.
                </div>
                <div className="right-footer">
                    <a href="/">オフィシャルページ</a>
                    <span>|</span>
                    <a href="/">プライバシーポリシー</a>
                </div>
            </div>
        </footer>
        <style>{`
            footer {
                font-size: 12px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                letter-spacing: 1px;
                border-top: 1px solid #707070;
            }
            footer .inner-footer {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                width: 850px;
                margin: 0 auto;
                padding: 25px 0;
            }
            footer .inner-footer .right-footer span {
                margin: 0 10px;
            }
        `}
        </style>
    </>
  );
}

export default Footer;
