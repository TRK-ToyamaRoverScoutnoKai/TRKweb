import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* ハンバーガーアイコン（スマホ向け・左側に配置） */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* 中央のロゴとタイトル */}
        <Link to="/" className="logo-area" onClick={() => setIsOpen(false)}>
          {/* ↓ ここにロゴ画像のパスを入れます（例: publicフォルダの logo.png なら "/logo.png"） */}
          <img src="src/assets/Header/TRKlogo.png" alt="TRK Logo" className="logo-image" />
          <span className="logo-text">富山ローバースカウトの会(TRK)</span>
        </Link>

        {/* PC向けナビゲーション（右側に配置） */}
        <nav className="nav-desktop">
          <Link to="/" className="nav-link">ホーム</Link>
          <Link to="/news" className="nav-link">活動報告</Link>
          <Link to="/about" className="nav-link">団について</Link>
        </nav>
      </div>

      {/* スマホ向けドロワーメニュー */}
      <nav className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-mobile-link" onClick={toggleMenu}>ホーム</Link>
        <Link to="/news" className="nav-mobile-link" onClick={toggleMenu}>活動報告</Link>
        <Link to="/about" className="nav-mobile-link" onClick={toggleMenu}>団について</Link>
      </nav>
    </header>
  );
};

export default Header;