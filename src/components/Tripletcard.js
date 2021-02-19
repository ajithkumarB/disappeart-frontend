import React from 'react'
import {Row,Col,CardBody} from 'reactstrap'
import {Card,CardMedia,CardContent} from '@material-ui/core'
import {Tab,Tabs,Nav} from 'react-bootstrap'
import man from './Images/man.jfif'
import {FaUserAlt} from 'react-icons/fa' 
import {BsFillLockFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai';
import Signup from './Signup'
import Forgotpassword from './Forgotpassword'
import Login from './login'
import '../App.css'
import 'react-tabs/style/react-tabs.css';
const Triplet = () => {
  return (
    <div className="card">
       <div className="vertical">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
       
        <Row style={{margin:'0px'}}>
           
               
        <img src={man} className="image-card"/>
       
    <Col sm={1}>
        
      <Nav variant="pills" className="flex-column" className="tabs">
        <Nav.Item >
            
          <Nav.Link eventKey="first" className="nav-item1"><FaUserAlt className="icons"/><br/><br/>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
           
          <Nav.Link eventKey="second" className="nav-item2"> <AiFillEdit  className="icons"/><br/><br/>Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" className="nav-item3"><BsFillLockFill  className="icons"/><br/><br/>Forgot Password?</Nav.Link>
        </Nav.Item>
      </Nav>
    
    </Col>
   
    <Col sm={9}>
      <Tab.Content className="tab-content">
        <Tab.Pane eventKey="first">
        <Login/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
       <Signup/> 
        </Tab.Pane>
        <Tab.Pane eventKey="third">
     <Forgotpassword/> 
        </Tab.Pane>
      </Tab.Content>
      </Col>
    
      </Row>
</Tab.Container> 
</div> 
<div className="horizontal">
<Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="tab-horizontal">
  <Tab eventKey="login" title="Login">
    <Login />
  </Tab>
  <Tab eventKey="signup" title="Sign Up" >
    <Signup />
  </Tab>
  <Tab eventKey="forgotpassword"  title="Forgot Password?">
    <Forgotpassword />
  </Tab>
</Tabs>
   


</div>
     
    </div>
  )
}

export default Triplet
