import 'bulma/css/bulma.css'
import axios from 'axios'
import { useState } from 'react';

function SignUpView({ onSubmit, clicked}){
    const [data, setData] = useState({});
    function handleClick(){
        onSubmit();
    }
    async function handleSubmit(){
        const user = await axios.post("http://localhost:4000/signup", data, { 
            headers: {'Content-Type' : 'application/json'}, 
            withCredentials: true
        })
        console.log(user);
        onSubmit(); 
    }
    return (

        <div className={`modal is-active`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Sign Up</p>
                <button className="delete" aria-label="close" onClick={handleClick}></button>
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