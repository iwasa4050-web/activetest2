/* eslint-disable */
// Entry point — index.html（トップページ）
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createIcons, icons } from 'lucide';
import { App } from './components/App.jsx';

// 既存コンポーネントは window.lucide.createIcons() を呼ぶため、
// lucide(npm) を同じインターフェースの薄いシムでラップする。
window.lucide = {
  createIcons: () => {
    try { createIcons({ icons }); } catch (e) { /* noop */ }
  },
};

createRoot(document.getElementById('root')).render(<App />);
