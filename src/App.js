
import './App.css';
import React, { useState } from 'react';
// import { MainLayout } from './components/Layout/MainLayout'
import "antd/dist/antd.css";
import {  Layout } from "antd";

import { Footers } from './components/Layout/Footer';
import { Headers } from './components/Layout/Header';
const { Header,  Footer } = Layout;
function App() {
  const [name,setName] = useState("Hi,Akash")
 return (
   <>
  <div style={{width:475,height:850,}}> 

   
   <Layout className='layout'>
    <Header>
      <Headers name={name} />
  
    
    </Header>


    <Footer
      style={{
        textAlign: "center"
      }}
    >
     {/* <Footers /> */}
     <Footers  setName={setName}/>
    </Footer>
    </Layout>
     </div> 
    </>

  );
}

export default App;
