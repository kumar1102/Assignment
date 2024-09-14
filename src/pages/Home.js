import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{border:"dotted", borderColor:"#ececec",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                <Sidebar/>
            </div>
            <div>
                <Dashboard/>
            </div>
        </div>
    </div>
  );
}
