import React from 'react'
import { Row, Col } from 'react-bootstrap'
import minion from './Images/minion.png'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import {useHistory,Link} from 'react-router-dom'
import {RiShutDownLine} from 'react-icons/ri'
import minionsad from './Images/minionsad.png'
import './Styles/style.css'
function Gen_link(props) {
    const [message, setmessage] = useState('');
    const [type, settype] = useState('message')
    const [time, settime] = useState(60)
    const [link, setlink] = useState('https')
    const history = useHistory();
    const [accesstoken,setaccesstoken] = useState(localStorage.getItem('accesstoken'))
    // console.log(accesstoken);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async () => {
        var x = Number(time);
        const value = {
            "type": type,
            "data": message,
            "selfDestructTimer": x

        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accesstoken}`
          }
        console.log(value);
        const res = await axios.post('http://13.232.38.254:3000/magic-url', value,{headers:headers})
            .then(res => {
                console.log(res.data);
                localStorage.setItem('url',res.data.Url);
                history.push('/displayurl');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        accesstoken ? 
        <div>
            <div className='gen-link'>
                
                <Row style={{ margin: '0px' }}>
                   <a className='log' href="/" onClick={()=> localStorage.clear()}><RiShutDownLine style={{color:'white'}}/>&nbsp;&nbsp;Logout</a>
                    <Col md="9" sm='12'>
                        <Row style={{ margin: '0px' }}>
                            <div className='card1'>
                                <p className='head'>
                                    Create a disappearing <select className="select" value={type} onChange={e => settype(e.currentTarget.value)}><option value='message'>message</option><option value='link'>link</option></select>
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row style={{ margin: '0px' }}>
                                        <input required type='text' id='message' className='text-inp' onChange={e => setmessage(e.currentTarget.value)} placeholder='Type your message here' name='message' /> <br />
                                        <button className="button" type='submit'>Generate</button>
                                    </Row>
                                    <div className='time'>
                                        <h4 className='time'>Self Destructing-Time </h4>
                                        <select value={time} onChange={e => settime(e.currentTarget.value)}>
                                            <option value="60">1 minute</option>
                                            <option value='120'>2 minutes</option>
                                            <option value='300'>5 minutes</option>
                                            <option value='600'>10 minutes</option>
                                            <option value='1800' >30 minutes</option>
                                            <option value='3600'>1 hour</option>
                                            <option value='86400'>1 day</option>
                                            <option value='604800'>1 week</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </Row>
                    </Col>

                    <Col md='3'>
                        <img src={minion} alt='minion' className='mini' />
                    </Col>
                </Row>
            </div>
            {/* <Create link={link} /> */}
        </div > : <div style={{marginTop:'15%',alignItems:'center'}}>
            
            <h2 align="center">Session Timed out!!</h2><br/>
            <h4 align="center">We cannot find the page you are looking for!</h4><br/>
            <Link to="/"><p align="center">Go Back to Login</p></Link>
            <Row style={{margin:'0px',marginLeft:'30%'}}> <img  src={minionsad} align="center" ></img> </Row>
           
        </div>
    )
}
export default Gen_link;
