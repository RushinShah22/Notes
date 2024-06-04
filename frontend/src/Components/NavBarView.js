import 'bulma/css/bulma.css'
import LogoutView from './LogoutView';


import { useNavigate } from 'react-router-dom';
import { useMyNotesContext } from '../NotesContext';


function NavBarView (){

    const {user}= useMyNotesContext();
    const navigate = useNavigate();

    function handleSignup(){
        navigate("/signup");
    }

    function handleLogin(){
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar is-success" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <div className="box block"><h4 className="title is-4">NOTES</h4></div>
                
                </a>
                </div>

                {!user.loggedIn && <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons ">
                            <button onClick={handleSignup} className="button">
                                <strong>Sign up</strong>
                            </button> 
                            <button onClick={handleLogin} className="button">
                                Log in
                            </button> 
                        </div>
                    </div>
                </div>}
                {user.loggedIn && <LogoutView /> }
            </nav>

        </div>
    )
}

export default NavBarView;