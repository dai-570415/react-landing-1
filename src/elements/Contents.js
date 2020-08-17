import React from 'react';
import CheckImage from '../assets/img/check.png';
import PcSpImage from '../assets/img/pc_sp.png';
import ConfirmImage from '../assets/img/confirm.png';
import ServiceImage from '../assets/img/service.png';
import BenefitIconImage from '../assets/img/benefit_icon.png';
import ExampleImage1 from '../assets/img/example1.png';
import ExampleImage2 from '../assets/img/example2.png';

const Contents = () => {
  return (
    <>
        <section className="contents">
            <div className="inner-contents">
                <h3>こんなことにお困りではないですか？</h3>
                <div className="enpacy">
                    <ul>
                        <li><img src={CheckImage} alt="check" />低コストでおさえられないかなぁ？</li>
                        <li><img src={CheckImage} alt="check" />どんなサイトにしたら良いか？</li>
                        <li><img src={CheckImage} alt="check" />今のサイトでは、応募が来ない…</li>
                        <li><img src={CheckImage} alt="check" />立ち上げるのに、時間がかかる…</li>
                        <li><img src={CheckImage} alt="check" />操作が難しそう…</li>
                    </ul>
                    <img src={PcSpImage} alt="enpacy" />
                </div>
                <a href="#Inquiry">
                    <img src={ConfirmImage} className="confirm" alt="お問い合わせはこちら" />
                </a>

                <h3 id="Product">サービス紹介</h3>
                <div className="service">
                    <img src={ServiceImage} alt="service" />
                    <div className="right-service">
                        <h4>Exceptive <span>とは？</span></h4>
                        <p>こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。こちらはランディングページサンプルです。こちらはランディングページサンプルです。</p>
                        <p>こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。テンプレートとしてご利用ください。</p>
                    </div>
                </div>

                <h3>Exceptiveが選ばれる理由</h3>
                <div className="benefit">
                    <img src={ExampleImage1} className="left-benefit" alt="example" />
                    <div className="right-benefit">
                        <h4><img src={BenefitIconImage} alt="サービス特徴" />Exceptiveのサービス特徴</h4>
                        <p>こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。こちらはランディングページサンプルです。</p>
                        <a href="/">詳しくはオフィシャルページ</a>
                    </div>
                </div>
                <div className="benefit benefit-opposition">
                    <img src={ExampleImage2} className="left-benefit" alt="example" />
                    <div className="right-benefit">
                        <h4><img src={BenefitIconImage} alt="他社との比較" />他社との比較</h4>
                        <p>こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。テンプレートとしてご利用ください。こちらはランディングページサンプルです。こちらはランディングページサンプルです。</p>
                        <a href="/">詳しくはオフィシャルページ</a>
                    </div>
                </div>
                <a href="#Inquiry">
                    <img src={ConfirmImage} className="confirm" alt="お問い合わせはこちら" />
                </a>
            </div>
        </section>

        <style>{`
            .inner-contents {
                width: 850px;
                margin: 0 auto 100px;
            }
            .inner-contents h3 {
                text-align: center;
                font-size: 25px;
                margin: 100px 0 65px 0;
            }
            .inner-contents .confirm {
                display: block;
                vertical-align: bottom;
                width: 300px;
                margin: 0 auto;
                transition: .5s;
            }
            .inner-contents .confirm:hover {
                filter: drop-shadow(0 0 5px rgba(255, 255, 255, .8));
            }
            .inner-contents .enpacy {
                display: flex;
                justify-content: space-between;
                margin: 0 0 50px 0;
            }
            .inner-contents .enpacy ul li {
                font-size: 18px;
                margin: 0 0 20px 0;
            }
            .inner-contents .enpacy ul li img {
                vertical-align: middle;
                width: 18px;
                margin: 0 10px 0 0;
                bottom: 2px;
                position: relative;
            }
            .inner-contents .service {
                display: flex;
                justify-content: space-between;
                margin: 0 0 50px 0;
            }
            .inner-contents .service h4 {
                font-size: 20px;
                margin: 0 0 30px 0;
            }
            .inner-contents .service h4 span {
                font-size: 14px;
            }
            .inner-contents .service p {
                text-align: justify;
                font-size: 15px;
                line-height: 2;
                color: #939393;
                margin: 0 0 20px 0;
            }
            .inner-contents .benefit {
                display: flex;
                justify-content: space-between;
                margin: 0 0 70px 0;
            }
            .inner-contents .benefit-opposition {
                flex-direction: row-reverse;
            }
            .inner-contents .benefit .left-benefit {
                width: 400px;
                object-fit: cover;
            }
            .inner-contents .benefit .right-benefit {
                width: 50%;
            }
            .inner-contents .benefit .right-benefit h4 {
                text-align: center;
                font-size: 20px;
                margin: 0 0 15px 0;
                padding: 0 0 15px 0;
                border-bottom: 1px solid #939393;
            }
            .inner-contents .benefit .right-benefit h4 img {
                margin: 0 20px 0 0;
            }
            .inner-contents .benefit .right-benefit p {
                text-align: justify;
                font-size: 14px;
                line-height: 1.75;
                color: #939393;
                margin: 0 0 30px 0;
            }
            .inner-contents .benefit .right-benefit a {
                display: block;
                text-align: center;
                padding: 15px;
                border: 1px solid #fff;
                border-radius: 5px;
                transition: .5s;
            }
            .inner-contents .benefit .right-benefit a:hover {
                border: 1px solid #AD0202;
                background: #AD0202;
            }
        `}
        </style>
    </>
  );
}

export default Contents;
