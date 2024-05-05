import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import toast from "react-hot-toast";
import logo from '../../assets/logo.png'

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = ()=> {
        logOut()
        .then(()=> {
            toast.success('Successfully Logout!')
            navigate('/')
        })
        .catch(()=>{
            toast.error("This didn't work.")
        })
    }

    return (
        <header className="font-lato">
            <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>SoloSphere</span>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          {
            !user && <li>
            <Link to='/login'>Login</Link>
            </li> 
          }
        </ul>
        {
            user && <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title=''>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addjob' className='justify-between'>Add Job</Link>
              </li>
              <li>
                <Link to='/postedjob'>My Posted Jobs</Link>
              </li>
              <li>
                <div>My Bids</div>
              </li>
              <li>
                <div>Bid Requests</div>
              </li>
              <li className='mt-2'>
                <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
        </header>
    );
};

export default Header;