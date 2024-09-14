import React from 'react';
import IconUrl from "../../util/searchIcon.png"; 
import MenuDot from "../../util/9dot.png"
const bellIcon = "🔔";      
const settingsIcon = "⚙️";  
const profileIcon = "👤";   

export default function Navbar() {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "space-between", 
      padding: "10px 20px", 
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
      backgroundColor: "#fff",
      borderBottom: "1px solid #e0e0e0"
    }}>
      <div style={{ fontSize: "30px" }}>
        Onefinnet
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <img src={IconUrl} alt="Search Icon" style={{ width: "20px", marginRight: "5px" }} />
          <span style={{fontSize:'20px'}}>Start searching</span>
        </div>

        <div style={{ cursor: "pointer", fontSize: "20px" }}>
          {bellIcon} 
        </div>

        <div style={{ cursor: "pointer", fontSize: "20px" }}>
          {settingsIcon}
        </div>

        <div style={{ cursor: "pointer", fontSize: "18px", lineHeight: "12px" }}>
          <img src={MenuDot}/> 
        </div>

        <div style={{ cursor: "pointer", fontSize: "20px" }}>
          {profileIcon} 
        </div>
      </div>
    </div>
  );
}
