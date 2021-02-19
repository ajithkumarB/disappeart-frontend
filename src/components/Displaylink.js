import React from 'react'
import './Styles/style.css'
import minion from './Images/minionn.gif'
import {Link} from 'react-router-dom'
function Create({ link }) {
  const [url,seturl] = React.useState(localStorage.getItem('url'));
    return (
        <div className='generate'>
            
            <div class="button-align">
            <div id="mdiv">
                <div class="mdiv">
                    <Link to="/generatelink"><div class="md"></div></Link>
                </div>
            </div>
        </div>
           
            <div className='bubble'>
                <h2 className="text" align="center">Your message has been created!</h2>
                   <br/>
                <div className='bubble6'>
                   <a href={url} className="url" target="_blank">{url}</a>
                    {/* Hi, This is the message for you! */}


                    <div className='bubble6-arrow'>
                    </div>
                </div>
                <img src={minion} alt='minion' className='img' width="300px" height="300px" />
            

            </div>
        </div>

    )
}
export default Create;