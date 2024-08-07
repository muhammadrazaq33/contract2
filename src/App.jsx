import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Home/Main';
import { Token } from './components/Token/Token';
import ItemsContainer from './components/Details/ItemsContainer';
import { MainPage } from './components/MainPage/MainPage';
import Footer1 from './components/MainPage/Footer1';
import { Header } from './components/Home/Header';
import TransactionHero from './components/Transactions/TransactionHero';
import TransactionMain from './components/Transactions/TransactionMain';

function App() {
  return (
    <Router>
      <div>
        <div className="">
          <Header />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/token" element={<Token />} />
        <Route path="/details" element={<ItemsContainer />} />
        <Route path="/transaction" element={<TransactionMain />} />
      </Routes>
      <Footer1 />
    </Router>
  );
}

export default App;
