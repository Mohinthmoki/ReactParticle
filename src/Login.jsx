import React from 'react'

const Login = () => {
    return (
        <div class="box">
            <div class="container">
                <div class="top-header">
                    <span>Have an account?</span>
                    <header>Login</header>
                </div>
                <div class="input-field">
                    <input type="text" className="input" placeholder="Username" required/>
                        <i class="bx bx-user"></i>
                </div>
                <div class="input-field">
                    <input type="password" class="input" placeholder="Password" required/>
                        <i class="bx bx-lock-alt"></i>
                </div>
                <div class="input-field">
                    <input type="submit" class="submit" />
                </div>
                <div class="bottom">
                    <div class="left">
                        <input type="checkbox" id="check"/>
                            <label for="check"> Remember Me</label>
                    </div>
                    <div class="right">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login