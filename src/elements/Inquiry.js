import React from 'react';
import MailImage from '../assets/img/mail.png';

const Inquiry = () => {
  return (
    <>
        <section id="Inquiry" className="inquiry">
            <div className="inquiry-title">
                Inquiry
            </div>
            <div className="inner-inquiry">
                <h6>下記フォームにお間違いにないよう、全てご記入ください。</h6>
                <form>
                    <label>お名前<span>*</span></label>
                    <div className="error">入力必須です</div>
                    <input type="text" className="input-text" placeholder="お名前" />

                    <label>メールアドレス<span>*</span></label>
                    <div className="error">入力必須です</div>
                    <input type="email" className="input-text" placeholder="メールアドレス" />

                    <label>お問い合わせ内容<span>*</span></label>
                    <div className="error">入力必須です</div>
                    <textarea className="input-text input-textarea" placeholder="お問い合わせ内容">
                    </textarea>
                    <button type="submit"><img src={MailImage} alt="内容を送信" /></button>
                </form>
            </div>
        </section>
        
        <style>{`
            .inquiry-title {
                text-align: center;
                font-size: 60px;
                font-weight: 100;
                font-family: 'Times New Roman', Times, serif;
                height: 250px;
                padding: 70px 0 0 0;
                background: #6E6E6E;
            }
            .inquiry-title::after {
                content: "お問い合わせ";
                display: block;
                font-size: 14px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                letter-spacing: 2px;
                margin: 5px 0 0 0;
            }
            .inner-inquiry {
                width: 850px;
                margin: 0 auto 100px;
            }
            .inner-inquiry h6 {
                text-align: center;
                font-size: 16px;
                margin: 60px 0;
            }
            .inner-inquiry form {
                width: 75%;
                margin: 0 auto;
            }
            .inner-inquiry form label {
                display: block;
                font-size: 14px;
                margin: 0 0 10px 0;
            }
            .inner-inquiry form label span {
                color: #C94D00;
                margin: 0 0 0 5px;
            }
            .inner-inquiry form .input-text {
                font-size: 14px;
                width: 100%;
                margin: 0 0 30px 0;
                padding: 15px;
                border: none;
                border-radius: 5px;
                transition: .5s;
            }
            .inner-inquiry form .input-text:focus {
                background: #FFD1D1;
            }
            .inner-inquiry form .input-textarea {
                resize: none;
                height: 200px;
            }
            .inner-inquiry form .error {
                font-size: 14px;
                color: #C94D00;
                margin: 0 0 5px 0;
            }
            .inner-inquiry form button {
                display: block;
                margin: 30px auto;
                border: none;
                background: none;
            }
            .inner-inquiry form button img {
                vertical-align: bottom;
                width: 300px;
                transition: .5s;
            }
            .inner-inquiry form button img:hover {
                filter: drop-shadow(0 0 5px rgba(255, 255, 255, .8));
            }
        `}
        </style>
    </>
  );
}

export default Inquiry;
