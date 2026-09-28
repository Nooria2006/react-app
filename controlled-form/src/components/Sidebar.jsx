import React from 'react';

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: '📊' },
    { id: 2, name: 'Find Book', icon: '🔍' },
    { id: 3, name: 'Borrowed Books', icon: '📖' },
    { id: 4, name: 'Find Library' , icon: '📍' },
    { id: 5, name: 'My Account', icon: '👤' },
    { id: 6, name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div style={{
      width: '240px',
      backgroundColor: '#ffffff',
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
      padding: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Library Logo Section */}
      <div style={{
        padding: '10px 15px',
        marginBottom: '20px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#2b6cb0',
        borderBottom: '1px solid #edf2f7',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        📚 <span>MyPIHub Lib</span>
      </div>

      {/* Menu Items with active styling and click handler */}
      {menuItems.map(item => {
        const isActive = activePage === item.name;
        return (
          <div 
            key={item.id} 
            onClick={() => setActivePage(item.name)} // Updates the active page on click
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 15px',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: isActive ? '#ebf8ff' : 'transparent',
              color: isActive ? '#2b6cb0' : '#4a5568',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            <span style={{ fontSize: '15px' }}>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;