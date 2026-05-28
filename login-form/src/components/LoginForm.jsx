import { useState } from "react";
export default function LoginForm(){
        const [showPassword,setShowPassword]=useState(false);
        function toggle(){
         setShowPassword(!showPassword)
        }
         return(
             <>
               <p>Hello, Welcome to my website</p>
               <div>
                <div>
                  <input type="email" placeholder="Email"/>
                  <br/>
                  <input 
                  type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    />
                  <button onClick={toggle}>{showPassword ? 'Hide' : 'Show'} Password</button>
                </div>
                  <button>login</button>
                  <button> signup</button>
              </div>
            </>
        )

      }