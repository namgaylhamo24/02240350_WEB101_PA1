import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import FollowupTask from './components/FollowupTask';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/header" element={<Header />} />
      <Route path="/message" element={<MessageInput />} />
      <Route path="/followup" element={<FollowupTask />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);