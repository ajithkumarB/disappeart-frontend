import Login from './login';
import Signup from './Signup'
import resetpassword from './Forgotpassword'
import Generatelink from './Generatelink'
import Displaylink from './Displaylink'
const routes = [ 
{
    name:'Login',
    path:'/',
    component: Login
},
{
    name:'Sign Up',
    path:'/signup',
    component: Signup
},
{
    name:'Forgot Password',
    path:'/resetpassword',
    component: resetpassword
},
{
    name:'Generate link',
    path:'/generatelink',
    component: Generatelink
},
{
    name:'Display link',
    path:'/displayurl',
    component: Displaylink
}
]
export default routes;