import React from 'react';
import { 
  FaBars, 
  FaHome, 
  FaSearch, 
  FaSignOutAlt, 
  FaCog, 
  FaBell 
} from 'react-icons/fa';

const Navbar = ({ toggleSidebar, handleNavigation }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '10px 0',
      backgroundColor: 'transparent',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Left side: Sidebar toggle, Home navigation, and Search input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Hamburger menu button to hide/show the sidebar */}
        <button 
          onClick={toggleSidebar} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#ffffff' }}
          title="Toggle Sidebar"
        >
          <FaBars />
        </button>

        {/* Home button to redirect to the dashboard view */}
        <button 
          onClick={() => handleNavigation('dashboard')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#ffffff', display: 'flex', alignItems: 'center' }}
          title="Home"
        >
          <FaHome />
        </button>

        {/* Embedded search bar within the blue card container */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Type here..." 
            style={{
              padding: '6px 12px 6px 32px',
              borderRadius: '20px',
              border: 'none',
              fontSize: '14px',
              outline: 'none',
              width: '180px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff'
            }}
          />
          <FaSearch style={{ position: 'absolute', left: '10px', color: '#ffffff', fontSize: '13px' }} />
        </div>
      </div>

      {/* Right side: User options including Log out, Settings, and Notifications */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Log out option */}
        <button 
          onClick={() => console.log('Logout Clicked')}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '15px', 
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }} 
          title="Log out"
        >
          <FaSignOutAlt />
          <span style={{ fontSize: '13px', fontWeight: '500' }}>Log out</span>
        </button>

        {/* Settings view action icon */}
        <button 
          onClick={() => handleNavigation('settings')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#ffffff' }} 
          title="Settings"
        >
          <FaCog />
        </button>

        {/* Notifications list view action icon */}
        <button 
          onClick={() => handleNavigation('notifications')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#ffffff' }} 
          title="Notifications"
        >
          <FaBell />
        </button>
      </div>

    </div>
  );
};

export default Navbar;