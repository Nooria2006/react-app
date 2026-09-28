import React, { useState } from 'react';
import MyAccount from './pages/MyAccount.jsx';
import FindLibrary from './pages/FindLibrary.jsx';
import BorrowedLibrary from './pages/BorrowedLibrary.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  
  const [activePage, setActivePage] = useState('Find Book');

  const renderPage = () => {
    switch (activePage) {
      case 'Find Book':
        return <FindLibrary />;
      case 'Borrowed Books':
        return <BorrowedLibrary />;
      case 'My Account':
        return <MyAccount />;
      case 'Dashboard':
        return <div style={{ padding: '20px', fontFamily: 'sans-serif' }}><h2>Dashboard Page</h2><p>Welcome to your library dashboard overview.</p></div>;
      case 'Settings':
        return <div style={{ padding: '20px', fontFamily: 'sans-serif' }}><h2>Settings Page</h2><p>Manage your account preferences here.</p></div>;
      default:
        return <FindLibrary />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#f7fafc'
    }}>

      <Navbar />

      <div style={{ 
        display: 'flex', 
        flex: 1, 
        width: '100%',
        overflow: 'hidden'
      }}>
        
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <div style={{ 
          flex: 1, 
          padding: '20px', 
          overflowY: 'auto',
          boxSizing: 'border-box'
        }}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;