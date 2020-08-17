import React from 'react';

const About = () => {
  return (
    <>
        <section id="About" className="about">
            <div className="about-title">
                About
            </div>  
            <div className="inner-about">
                <h3>最良のUXを提供します</h3>
                <p>こちらはランディングページサンプルです。テンプレートとしてご利用ください<br />
                こちらはランディングページサンプルです。テンプレート</p>
                <p>こちらはランディングページサンプルです。テンプレートこちらはランディング<br />
                ページサンプルです。テンプレートこちらはランディングページサンプルです。テンプレート<br />
                こちらはランディングページサンプルです。テンプレートこ</p>

                <h3>さまざまな業種・業界に対応可能</h3>
                <p>こちらはランディングページサンプルです。テンプレートとしてご利用ください<br />
                こちらはランディングページサンプルです。テンプレート</p>
            </div>
        </section>
        
        <style>{`
            .about-title {
                text-align: center;
                font-size: 60px;
                font-weight: 100;
                font-family: 'Times New Roman', Times, serif;
                height: 250px;
                padding: 70px 0 0 0;
                background: #6E6E6E;
            }
            .about-title::after {
                content: "会社概要";
                display: block;
                font-size: 14px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                letter-spacing: 2px;
                margin: 5px 0 0 0;
            }
            .inner-about {
                width: 850px;
                margin: 0 auto 100px;
            }
            .inner-about h3 {
                text-align: center;
                font-size: 30px;
                margin: 60px 0 20px;
            }
            .inner-about p {
                text-align: center;
                font-size: 15px;
                line-height: 1.5;
                color: #939393;
                margin: 0 0 20px 0;
            }
        `}
        </style>
    </>
  );
}

export default About;
