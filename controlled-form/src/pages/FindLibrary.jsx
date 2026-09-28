import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function FindLibrary({ toggleSidebar, handleNavigation }) {
  const [searchZip, setSearchZip] = useState('');
  const [mapType, setMapType] = useState('m');

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      
    }}>

      {/* 1. TOP SECTION: Full Width Medical Blue Search Card */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        borderRadius: '24px',
        padding: '35px 30px',
        color: '#ffffff',
        boxShadow: '0 12px 30px rgba(37, 99, 235, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
      }}>
        
        {/* Top Navbar Component */}
        <Navbar toggleSidebar={toggleSidebar} handleNavigation={handleNavigation} />

        {/* Center Content Area inside the Blue Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          marginTop: '10px'
        }}>
          {/* Breadcrumb Path */}
          <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>🏠</span>
            <span>/ Find Hospital</span>
            <span>/ Findhospital</span>
          </div>

          {/* Centered Main Title */}
          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 10px 0',
            letterSpacing: '0.5px'
          }}>
            Find a Library
          </h1>

          {/* Subtitle Description */}
          <p style={{
            fontSize: '15px',
            opacity: 0.9,
            margin: '0 0 30px 0',
            maxWidth: '500px',
            lineHeight: '1.4'
          }}>
            Search Clinics and schedule an appointment with doctors through Clinic
          </p>

          {/* Search Controls Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            width: '100%',
            maxWidth: '450px'
          }}>
            {/* Top Row: General Search Input */}
            <div style={{ width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search..." 
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#333333',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}
              />
            </div>

            {/* Bottom Row: Zip Code, Current Button, and Search Button */}
            <div style={{
              display: 'flex',
              gap: '12px',
              width: '100%',
              alignItems: 'center'
            }}>
              <input 
                type="text" 
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                placeholder="Zip Code or Neighborhood" 
                style={{
                  flex: 2,
                  padding: '12px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#333333'
                }}
              />

              <button style={{
                flex: 1,
                padding: '12px 15px',
                borderRadius: '30px',
                border: 'none',
                backgroundColor: '#06b6d4',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                CURRENT
              </button>

              <button style={{
                flex: 1,
                padding: '12px 15px',
                borderRadius: '30px',
                border: 'none',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div> {/* End of Search Card */}

      {/* 2. MAIN SPLIT CONTENT SECTION (Sidebar Filters Left | Map Right) */}
      <div style={{
        display: 'flex',
        gap: '24px',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'flex-start'
      }}>
        
        {/* LEFT SIDE: Filter Options Panel */}
        <div style={{
          flex: '1',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          minWidth: '280px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', 
            color: '#1e3a8a', 
            fontSize: '18px', 
            fontWeight: '700' }}>
              Filter By</h3>
          
          {/* Dropdown 1 */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '5px' }}>
            <label style={{ 
              fontSize: '13px', 
              color: '#64748b', 
              fontWeight: '500' }}>
                Specialty</label>
            <select style={{ 
              padding: '10px', 
              borderRadius: '8px',
               border: '1px solid #cbd5e1',
                outline: 'none', 
                fontSize: '14px' }}>
              <option>Primary Care</option>
            </select>
          </div>

          {/* Dropdown 2 */}
          <div style={{ 
            display: 'flex',
             flexDirection: 'column',
              gap: '5px' }}>
            <label style={{
             fontSize: '13px',
              color: '#64748b', 
              fontWeight: '500' }}>
                Gender</label>
            <select style={{ 
              padding: '10px',
              borderRadius: '8px',
               border: '1px solid #cbd5e1', 
               outline: 'none', 
               fontSize: '14px' }}>
              <option>All Genders</option>
            </select>
          </div>

          {/* Dropdown 3 */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '5px' }}>
            <label style={{ 
              fontSize: '13px', 
              color: '#64748b', 
              fontWeight: '500' }}>
                Condition</label>
            <select style={{ 
              padding: '10px', 
              borderRadius: '8px', 
              border: '1px solid #cbd5e1', 
              outline: 'none', 
              fontSize: '14px' }}>
              <option>Select Condition</option>
            </select>
          </div>

          {/* Dropdown 4 */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '5px' }}>
            <label style={{ 
              fontSize: '13px', 
              color: '#64748b', 
              fontWeight: '500' }}>
                Languages</label>
            <select style={{ 
              padding: '10px', 
              borderRadius: '8px', 
              border: '1px solid #cbd5e1',
              outline: 'none', 
              fontSize: '14px' }}>
              <option>English</option>
            </select>
          </div>
        </div>
      {/* 2. BOTTOM SECTION: Map Type Toggles and Google Map Container */}
      <div style={{
        flex: '2.5',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 4px 18 rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Map Type Filter Tab Switches */}
        <div style={{ display: 'flex',
         gap: '15px', 
         borderBottom: '1px solid #e2e8f0', 
         paddingBottom: '12px' }}>
          <button 
            onClick={() => setMapType('m')}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: mapType === 'm' ? '#1e3a8a' : 'transparent',
              color: mapType === 'm' ? '#ffffff' : '#64748b',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Map
          </button>
          <button 
            onClick={() => setMapType('k')}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: mapType === 'k' ? '#1e3a8a' : 'transparent',
              color: mapType === 'k' ? '#ffffff' : '#64748b',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Satellite
          </button>
        </div>

        {/* Dynamic Embedded Google Map Frame */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', width: '100%', height: '450px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.496504194371!2d69.06800857510794!3d34.52671353283424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16500673972b7%3A0x54c9617efd15dfc8!2sWahdat%20Library!5e1!3m2!1sen!2s!4v1790269446954!5m2!1sen!2s"
           width="600"
            height="450"
            style={{ border:0 }}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">

            </iframe>
        </div>
      </div>

    </div>
    <footer style={{
      marginTrop: 'auto',
      padding: '20px 0',
      borderTop: '1px solid #e2e8f0', 
      display:'flex',
    }}></footer>
  
   <div style={{
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#64748b',
    width: '100%'
    }}>
      © 2026, made with 💜 by 
    <span style={{ 
      fontWeight: '600',
       color: '#1e3a8a' }}>
        MyPatientHUB</span> for a better web.

       <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#mypatienthub"
         style={{
        textDecoration: 'none', 
        color: '#64748b', 
        fontWeight: '500' }}>MyPatientHUB</a>
        <a href="#about" style={{ 
          textDecoration: 'none',
           color: '#64748b',
            fontWeight: '500' }}>About Us</a>
            <a href="#blog" style={{ textDecoration: 'none',
             color: '#64748b', fontWeight: '500' }}>Blog</a>
             </div>
          </div>
        </div>
  );
}

export default FindLibrary;