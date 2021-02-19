import React from 'react'
import './Styles/App.css'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import minion from './Images/forgotpass.jpg'
import {useForm} from 'react-hook-form';
const Forgotpassword = () => {
  const {register,handleSubmit} = useForm();
  let result;
  const [response,setresponse] = React.useState();
  const onSubmit = async(data) => {
   const res = await axios.post(`http://13.232.38.254:3000/auth/forgot_password`,{
     "email":data.emailid
   })
   .then(res => {
     console.log(res)
     result = res.data.message
     setresponse(result)
   })
   .catch(err => {
     console.log(err);
   })
  }
  return (
    <div className="resetpassword">
      <div className="reset-align">

      
      <form onSubmit={handleSubmit(onSubmit)}>
    <Card className="card">
  <img src={minion} className="image"/>
  <Card.Body>
    <Card.Title align="center">Reset Password</Card.Title>
    {response=== "User with the given email doesn't exist" ? <p style={{color:'red'}} align="center">Please enter a valid email address</p> : <p style={{color:'green',fontWeight:'bold'}} align="center">Check your mail to reset password!!</p>   }
    <Card.Text>
   <h6 align="center"> Enter your email address below and we'll send you an email with instructions!!</h6>
   <label htmlFor="input" name="emailid" className="label">Email address</label><br/>
   <input type="text" className="textbox" name="emailid" required ref={register({required:'Email is required',pattern:{value:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,message:'Invalid email'}})}></input>
    </Card.Text>
    <Button variant="primary" className="btn" type="submit">Reset&nbsp;Password</Button>
  </Card.Body>
</Card>
</form>
</div>
    </div>
  )
}

export default Forgotpassword
