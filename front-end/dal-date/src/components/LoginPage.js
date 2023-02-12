import React from "react";
import { ReactDOM } from "react";
import "../styling/LoginPage.css"

function LoginPage(){
    return (
        <div className="login">
            <h1 id="DalDate">
                Dal Date
            </h1>
         <div class='login-wrapper'>
            <form id="formBackground">
              <label>
                <p>
                    Please login to continue.
                </p>
                 <p>Username</p>    
                   <input type="text"/>
                   </label>    
                 <label>
                      <p>Password</p>
                    <input type="password"/>
                </label>
                <button type="submit">Submit</button>    
            </form>
            </div>
        </div>
    );
}
export default LoginPage;