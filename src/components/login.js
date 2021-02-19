import React from 'react'
import './Styles/App.css'
import {useForm} from 'react-hook-form'
import {Card,Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import minion from './Images/minion.png'
const Login = (props) => {
  const {handleSubmit,register} = useForm();
  const[ err,seterr] = React.useState(0);
  const history = useHistory();
  const onSubmit = async(data) => {
    const value= 
      {
        "username": data.username,
         "password":data.password  
        }
    console.log(value);
     const res = await axios.post(`http://13.232.38.254:3000/auth/signin`,value) 
    .then(res => {
      console.log(res);
      localStorage.setItem('accesstoken',res.data.accessToken)
      history.push('/generatelink')
    })
    .catch(err => {
      console.log(err);
      seterr(1);
    })
  }
  return (
    
    <div className="login"> 
    <div className="login-align">
    <form onSubmit={handleSubmit(onSubmit)}>
    <Card className="card">
  <img src={minion} className="image"></img>
  <Card.Body variant="center">
    <Card.Title align="center">Login</Card.Title>
    {err === 1 ? <p align="left" style={{color:'red'}}>Invalid username or password</p> : null}
   <Link to="/signup"><h6 align="center">Need an account?</h6></Link><br/>
    <Card.Text>
      <label htmlFor="input" name="username" className="label" >Username</label><br/>
      <input type="text" name="username" className="textbox" required ref={register({required:'Username is required'})}/><br/>     
      <label htmlFor="input" name="password" className="label" >Password</label><br/>
      <input type="password" name="password" className="textbox" required ref={register({required:'Password is required'})}/><br/>
    </Card.Text>
    <Button variant="primary" className="btn" type="submit">Login</Button><br/><br/>
    <Link to="/resetpassword"><h6 align="center">Forgot Password?</h6></Link>
  </Card.Body>
</Card>

     </form>
     </div>
      
   
    </div>
  )
}

export default Login
