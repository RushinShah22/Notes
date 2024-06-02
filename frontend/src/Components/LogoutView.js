import 'bulma/css/bulma.css'
import axios from 'axios'

function LogoutView( {makeUserLogout, userName}){

    async function handleClick(){
        try{
            await axios.get("http://localhost:4000/logout", {withCredentials: true});
            console.log(makeUserLogout)
            makeUserLogout();
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
                        <label className="label">{`Welcome, ${userName}`}</label>
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