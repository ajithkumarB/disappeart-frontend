import {useForm} from 'react-hook-form'
import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import minion from './Images/octopus.png'
import './Styles/App.css'
const Signup = () => {
  const {register,handleSubmit,errors} = useForm();
  const onSubmit =  async(data) =>{
    const value ={
    "username":data.username,
    "email": data.email,
    "password": data.password
    } 
    console.log(value);
    const res = await axios.post(`http://13.232.38.254:3000/users/signup`,value)
    .then(res => {
      console.log(res);
      
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
   <div className="signup">
     <div className="signup-align">

     
 <form onSubmit={handleSubmit(onSubmit)}>
    <Card className="card">
  <img src={minion} className="image"/>
  <Card.Body variant="center">
    <Card.Title align="center">Get Started with your account!</Card.Title>
   <Link to="/"><h6 align="center">Already have a account?</h6></Link>
    <Card.Text>
    <label htmlFor="input" name="email" className="label">Email id</label>
      <input type="text" name="email" className="textbox" required ref={register({required:'Email is required'})}/>
      <label htmlFor="input" name="username" className="label">Username</label>
      <input type="text" name="username" className="textbox" required ref={register({required:'Username is required'})}/>
      <label htmlFor="input" name="password" className="label">Password</label>
      <input type="password" name="password" className="textbox" required ref={register({required:'Password is required'})}/>
    </Card.Text>
    <Button variant="primary" className="btn" type="submit">Sign Up</Button><br/>
  
  </Card.Body>
</Card>
     </form>
     </div>
   </div>
  )
}

export default Signup
