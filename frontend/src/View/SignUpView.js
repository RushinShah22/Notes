import 'bulma/css/bulma.css'


function SignUpView(){
    return (
        <div>

            <div className="field">
            <label className="label">First Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
            </div>


            <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
            </div>


            <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input"/>
                <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
            </div>



            <div className="field is-grouped">
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
            </div>
        </div>
    )
}

export default SignUpView