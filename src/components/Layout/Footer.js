import React from "react";
import "antd/dist/antd.css";
import { Row,Col} from "antd";
import {
    HomeOutlined,
    SearchOutlined,
    TeamOutlined,
  } from '@ant-design/icons';
  import { Home } from '../pages/Home';
  import { Consult } from '../pages/Consult'
  import { IoMdChatbubbles } from "react-icons/io";
  import { BiDumbbell } from "react-icons/bi";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Discover } from "../pages/Discover";
import { Space } from "../pages/Space";
import { Routines } from "../pages/Routines";
  
export const Footers = (props) => {
 const {setName} = props;
 const handleClick =()=>{
  setName("Hi,Akash")
 }
 const handlediscover=()=>{
  setName("Discover")
 }
 const handlespace=()=>{
  setName("Spaces")
 }
 const handleconsult=()=>{
  setName("Consult")
 }
 const handleroutines=()=>{
  setName("Routines")
 }
    return (
        <>
         <div className="logo" />
   
    <Router>
      <div>
 
      <Switch>
       
            
       <Route path="/home">
         <Home/>
       </Route>
        <Route path="/discover">
         <Discover/>
       </Route> 
       <Route path="/spaces">
         <Space/>
       </Route> 
       <Route path="/consult">
         <Consult/>
       </Route> 
       <Route path="/routines">
         <Routines/>
       </Route>  
  
   </Switch>

          <Row>
          <Col span={4}>
          <Link className='nav-link active'  onClick={handleClick} to="/home"><HomeOutlined/><br/>Home</Link> 
          </Col>
          <Col span={4}>
        <Link className='nav-link active' onClick={handlediscover} to="/discover"><SearchOutlined/><br/>Discover</Link> 
        </Col>
        <Col span={4}>
        <Link className='nav-link active' onClick={handlespace} to="/spaces"><TeamOutlined/><br/>Spaces</Link> 
        </Col>
        <Col span={4}>
        <Link className='nav-link active' onClick={handleconsult} to="/consult"><IoMdChatbubbles/><br/>Consult</Link> 
        </Col>
        <Col span={4}>
        <Link className='nav-link active' onClick={handleroutines} to="/routines"><BiDumbbell/><br/>Routines</Link>  
        </Col>
          </Row>
      
   
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
      </div>
    </Router>
     
     
        </>
    )
    };





 