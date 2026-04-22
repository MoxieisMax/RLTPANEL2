/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoneyPage from './pages/MoneyPage';
import GuidePage from './pages/GuidePage';
import GuidesIndexPage from './pages/GuidesIndexPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-custom font-sans text-[#333333] antialiased">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/money/:slug" element={<MoneyPage />} />
          <Route path="/guides" element={<GuidesIndexPage />} />
          <Route path="/guides/:slug" element={<GuidePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}




