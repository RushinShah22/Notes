import 'bulma/css/bulma.css'
import LogoutView from './LogoutView';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../userContext';

function NavBarView (){

    const userDetails = useContext(UserContext);
    // console.log(userDetails);
    return (
        <div>
            <nav className="navbar is-success" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <div className="box block"><h4 className="title is-4">NOTES</h4></div>
                
                </a>
                </div>

                {!userDetails.userDetails.loggedIn && <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons ">
                            <Link to="signup"><button className="button">
                                <strong>Sign up</strong>
                            </button> </Link>
                            <Link to="login"><button className="button">
                                Log in
                            </button> </ Link >
                        </div>
                    </div>
                </div>}
                {userDetails.userDetails.loggedIn && <UserContext.Provider value={userDetails}> <LogoutView /> </UserContext.Provider> }
            </nav>

        </div>
    )
}

export default NavBarView;