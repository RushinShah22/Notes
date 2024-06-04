import 'bulma/css/bulma.css'
import axios from 'axios'
import { useContext } from 'react';
import UserContext from '../userContext';

function LogoutView(){

    const userDetails = useContext(UserContext);
    
    async function handleClick(){
        try{
            await axios.get("http://localhost:4000/logout", {withCredentials: true});
            userDetails.setUserDetails({});
            window.location.href = '/';
        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <div className="navbar-end">
            <div className="navbar-item">
                
                
                <div className="buttons">
                    <div className='button'>
                    <div className='field'>
                        <label className="label">{`Welcome, ${userDetails.userDetails.firstName} ${userDetails.userDetails.lastName}`}</label>
                    </div>
                    </div>
                    <button onClick={handleClick} className="button is-danger">
                        <strong>Logout</strong>
                    </button>
         
                </div>
            </div>
        </div>
    )
}

export default LogoutView