import React from 'react';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import FollowupTask from './components/FollowupTask';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MessageInput />
      <FollowupTask />
      <Footer />
    </div>
  );
}

export default App;