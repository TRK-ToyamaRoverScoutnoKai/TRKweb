import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const Home = () => <div style={{ padding: '20px' }}><h2>ホーム画面</h2><p>ここにInstagramを連携します。</p></div>;
const News = () => <div style={{ padding: '20px' }}><h2>活動報告</h2><p>ここにWordPressの記事を表示します。</p></div>;
const About = () => <div style={{ padding: '20px' }}><h2>団について</h2><p>団の紹介文など</p></div>;

function App() {
  return (
    <Router>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;