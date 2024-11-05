import "./index.css"

const RegisterPage = () => {
    return (
        <div className="login-bg">
            <img src="https://res.cloudinary.com/dh4tso4fh/image/upload/v1730788333/istockphoto-513300668-612x612_svswbl.jpg"className="login-logo"/>
            <div className="login-container">
                <div className="login-card">
                    <h1 className="register-heading">Hey, Register now to LiveChat</h1>
                    <form className="form-container">
                        <input type="text" placeholder="Enter username" className="input"/>
                        <input type="password" className="input" placeholder="Enter password"/>
                        <button type="submit" className="register-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage