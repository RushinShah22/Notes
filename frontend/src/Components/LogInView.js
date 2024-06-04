import 'bulma/css/bulma.css'
import { useState } from 'react';
import axios from 'axios'
import { Link} from 'react-router-dom';



function LogInView(){
   
    
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
            window.location.href =  "/";
            
        }catch(err){
            
            setEmail(err.message);
            setPassword(err.message);
        }
        
    }

    
    return (

        <div className={`modal is-active`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Log In</p>
                <Link to="/"><button className="delete" aria-label="close"></button></Link>
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