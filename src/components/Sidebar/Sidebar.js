import React from 'react';
import { FaHome } from 'react-icons/fa'; // Assuming you're using react-icons for the home icon

export default function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <div style={activeItemStyle}>
        <div style={iconContainerStyle}>
          <FaHome style={iconStyle} />
        </div>
        <span style={textStyle}>Dashboard</span>
        <div style={activeIndicator}></div>
      </div>
    </div>
  );
}

const sidebarStyle = {
  width: '270px',      
  height: '0vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f5f7fb', 
  borderRight: '1px solid #e0e0e0', 
};

const activeItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  position: 'relative',
  backgroundColor: '#fff',
  borderLeft: '3px solid #2c6ff7',
};

const iconContainerStyle = {
  marginRight: '8px', 
};

const iconStyle = {
  fontSize: '30px',     
  color: '#2c6ff7',     
};

const textStyle = {
  color: '#2c6ff7',   
  fontSize: '25px',
  marginLeft: '10px',
};

const activeIndicator = {
  height: '100%',
  width: '3px',
  backgroundColor: '#2c6ff7',
  position: 'absolute',
  right: '0',
  top: '0',
};
