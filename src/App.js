import logo from "./logo.svg";
import "./css/sb-admin-2.css";
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./Portal";
import EmailList from "./EmailList";
import InboxView from "./InboxView";
import { useState } from "react";
import Home from "./Home";

function App() {
  const [data, setData] = useState()
  return (
  
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Portal />}>
        <Route path="home" element={<Home />}/>
        <Route path="emaillist" element={<EmailList data={data} setData={setData}/>} />     
        <Route path="inboxview" element={<InboxView data={data} setData={setData}/>} /> 
        
      </Route>
        </Routes>
    </BrowserRouter>
    
  ); 
}

export default App;
