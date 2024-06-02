import 'bulma/css/bulma.css'
import SignUpView from './SignUpView'
import LogInView from './LogInView';


import { useState } from 'react';
import LogoutView from './LogoutView';

function NavBarView ( {userLogIn, userLogout, isSignedIn, userName}){
    const [signClicked, setSignClicked] = useState(false);
    const [logClicked, setLogClicked] = useState(false);

    return (
        <div>
            <nav className="navbar is-success" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <div className="box block"><h4 class="title is-4">NOTES</h4></div>
                
                </a>
                </div>

                {!isSignedIn && <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons ">
                            <button className="button" onClick={() => setSignClicked(true)} href="/signup" >
                                <strong>Sign up</strong>
                            </button>
                            <button className="button" onClick={() => setLogClicked(true)} href="/login">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>}
                {isSignedIn && <LogoutView makeUserLogout={userLogout} userName={userName}/>}
            </nav>

            {signClicked && <SignUpView onSubmit={() => setSignClicked(false)} makeUserLoggedIn={userLogIn}/>}
            {logClicked && <LogInView onSubmit={() => setLogClicked(false)} makeUserLoggedIn={userLogIn}/>}

        </div>
    )
}

export default NavBarView;