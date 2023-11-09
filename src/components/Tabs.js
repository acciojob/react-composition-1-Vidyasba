import React, { useState } from "react";

export const Tabs = ({ tabsProp }) => {
  const [content ,setContent] =useState('');
  
  
    return (
    <div>
      <ul>
        {tabsProp.map((tab) => (
          <li onClick={()=>setContent(tab.content)}>{tab.title}</li>
        ))}
      </ul>
      <p>{content}</p>
    </div>
  );
};

export default Tabs;
