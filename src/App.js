import React from 'react';
import './assets/css/App.css';
import Header from './elements/Header';
import Top from './elements/Top';
import Contents from './elements/Contents';
import Inquiry from './elements/Inquiry';
import About from './elements/About';
import Footer from './elements/Footer';

// head情報
const title = 'Landing | LPサンプル';
const description = 'LPサンプルのプロジェクトです。';
document.title = title;
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}
// ここまでhead情報

const App = () => {
  return (
    <div className="container">
      <Header />
      <Top />
      <main>
        <Contents />
        <Inquiry />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
