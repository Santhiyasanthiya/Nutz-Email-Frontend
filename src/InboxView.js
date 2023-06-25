import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function InboxView({ data, setData }) {
  const navigate= useNavigate()
  return (
    <div className="inbox">
      <button style={{width:"100px", margin:"20px"}}
        onClick={()=> navigate(-1)}
        className="btn btn-sm btn-success mr-6"
      >
      Back
      </button>
      <div className="from-date">
        <h4>From: {data.from}</h4>
        <h5>Date: {data.date}</h5>
      </div>
      <h5>Subject: {data.subject}</h5>
      <h6>Text: {data.text}</h6>

    </div>
  );
}
export default InboxView;
