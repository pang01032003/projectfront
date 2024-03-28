import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: <b>Login</b> },
  { to : '/register', text: <b>Sign Up</b> },

]

const userNav = [
  // { to : '/', text: 'Home' },
  // { to : '/movie', text: 'Movie' },
  // { to : '/anime', text: 'Anime' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100 border-b-2 border-solid border-gray-200">
   <div className="navbar bg-base-600 flex items-center justify-between">
    <div>
    <img 
  src="https://i.pinimg.com/736x/13/50/12/135012a137994c21090c314ccdabd863.jpg"
  alt="User Avatar" 
  className="w-16 h-16 rounded-full ml-4"
/>

    </div>

      </div>
      <div className="">
        <Link to={user?.id? "/" : "/"} className="btn btn-ghost text-sm">
        Home
        </Link>
      </div>
      <div className="">
        <Link to={user?.id? "/reserve" : "/"} className="btn btn-ghost text-sm">
        Reserve
        </Link>
      </div>
      
      <div className="flex-1">
        <Link to={user?.id? "/payment" : "/"} className="btn btn-ghost text-sm">
        Payment
        </Link>
      </div>
     

                
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li className='btn btn-ghost text-sm'>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}