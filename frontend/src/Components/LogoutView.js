import 'bulma/css/bulma.css'
import axios from 'axios'
import { useMyNotesContext } from '../NotesContext';
import { useNavigate } from 'react-router-dom';

function LogoutView(){

    const {user, setUser} = useMyNotesContext();
    const navigate = useNavigate();
    
    async function handleClick(){
        try{
            navigate("/loader")
            await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {withCredentials: true});
            setUser({});
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
                        <label className="label">{`Welcome, ${user.firstName} ${user.lastName}`}</label>
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