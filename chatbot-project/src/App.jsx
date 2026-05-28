  import { useState,useRef,useEffect } from "react";
  import { ChatBot } from "./components/ChatbotInput";
  import './App.css'
  import Messages from "./components/Messages";

     
   
      function App(){
        const [messages,setMessages]=useState ([]);
         
            
        
        return(
             <div className="app-container">
                {/*ChatBot()*/}
             { /*by useing curly braces we can save any type of value inside a prop
              ,lifting state up : share state between components by passing them as props in a parent component,
              naming conventions is using the same name for component and prop and its value*/}
            
                <Messages messages={messages} />
                    <ChatBot 
                     messages={messages}
                     setMessages={setMessages}/>
               
            </div>
        )
    
      }
      export default App;
     