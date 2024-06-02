import 'bulma/css/bulma.css'
import { useState } from 'react';
import axios from 'axios'

function LogInView({onSubmit, makeUserLoggedIn}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function  handleSubmit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:4000/signin", {
                email,
                password
                }, 
                {
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }); 
            setEmail('');
            setPassword('');
            onSubmit();
            makeUserLoggedIn();
        }catch(err){
            console.log(err);
        }
        
    }

    function handleClick(){
        onSubmit();
    }
    return (

        <div className={`modal is-active`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Log In</p>
                <button className="delete" aria-label="close" onClick={handleClick}></button>
            </header>
            <section className="modal-card-body">
                <div>
                <form className="box" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input className="input" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="e.g. alex@example.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                        <input className="input" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="********" />
                        </div>
                    </div>

                    <button className="button is-primary">Sign in</button>
                </form>
            </div>
        
            </section>
    
        </div>
    </div>
        
    )
}

export default LogInView