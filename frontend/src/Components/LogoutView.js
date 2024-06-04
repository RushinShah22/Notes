import 'bulma/css/bulma.css'
import axios from 'axios'
import { useMyNotesContext } from '../NotesContext';

function LogoutView(){

    const {user, setUser} = useMyNotesContext();
    
    async function handleClick(){
        try{
            await axios.get(`${process.env.BACKEND_URL}/logout`, {withCredentials: true});
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