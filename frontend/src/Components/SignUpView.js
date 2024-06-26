import 'bulma/css/bulma.css'
import axios from 'axios'
import {  useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


function SignUpView(){
    const [data, setData] = useState({});
    
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        try{
            navigate("/loader");
             await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, data, { 
                headers: {'Content-Type' : 'application/json'}, 
                withCredentials: true
                })
            setData({});
            navigate("/");
            
        }catch(err){
            navigate("/signup")
            console.log(err.message)
            setData({email: err.message});
        }
        

    }
    
    
    return (
        <div className={`modal is-active`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Sign Up</p>
                <Link to="/"><button className="delete" aria-label="close"></button></Link>
            </header>
            <section className="modal-card-body">
            <div>
                <form className='box' onSubmit={handleSubmit}> 

                <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input className="input" value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})}type="text" placeholder="First Name" />
                </div>
                </div>


                <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                    <input className="input" value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})}type="text" placeholder="Last Name" />
                </div>
                </div>


                <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} type="email" placeholder="Email input"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                </div>
                </div>

                <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}type="password" placeholder="Password" />
                </div>
                </div>



                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                </div>
                </form>
                </div>
            </section>
    
        </div>
    </div>
        
    )
}

export default SignUpView