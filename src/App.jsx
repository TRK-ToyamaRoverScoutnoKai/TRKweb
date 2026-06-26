// import React from 'react';
// // ★BrowserRouter から HashRouter に変更します
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Slideshow from './components/Slideshow';

// const Home = () => (
//   <div>
//     <Slideshow />
//     <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       <h2>ホーム画面</h2>
//       <p>ここにInstagramを連携します。</p>
//     </div>
//   </div>
// );

// const News = () => <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}><h2>活動報告</h2><p>ここにWordPressの記事を表示します。</p></div>;
// const About = () => <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}><h2>団について</h2><p>団の紹介文など</p></div>;

// function App() {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import News from './components/News'; // ★作成したNewsコンポーネントをインポート

const Home = () => (
  <div>
    <Slideshow />
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#b21d23', marginBottom: '20px' }}>公式Instagram</h2>
      
      {/* ★ここに後でInstagramウィジェットのコードを貼り付けます */}
      <div className="instagram-widget-container" style={{ minHeight: '400px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ textAlign: 'center' }}>（ここにInstagramのギャラリーが表示されます）</p>
      </div>

    </div>
  </div>
);

const About = () => <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}><h2>団について</h2><p>団の紹介文など</p></div>;

function App() {
  return (
    <Router>
      <Header />
      <main style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 60px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} /> {/* ★活動報告ページを分離しました */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;