import { useState } from "react";
import dayjs from "dayjs";
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
export function ChatBot({messages,setMessages}){
        //event is an obect that contains information about the event that occurred, such as the type of event, the target element, and any additional data associated with the event.
        const [inputText,setInputText]=useState("");
        const [isLoading,setIsLoading]=useState(false);

        function saveInputText(event){
        setInputText(event.target.value); 
        }

        

       
            async function sendMessage(){
             if(isLoading || inputText.trim() === ""){
    return;

  }
          setIsLoading(true);
          setInputText("loading...");
              const loadingMessage={
                    message:
                      <img 
                      src="https://supersimple.dev/images/loading-spinner.gif" 
                      className="loading-spinner"/>
                    ,
                    sender:"robot",
                    id:crypto.randomUUID()
                  }

          const newMessages=[
              ...messages,
              {
                message:inputText,
                sender:"user",
                id:crypto.randomUUID(),
                time:dayjs().valueOf()
              },
              loadingMessage
            ] 
           setMessages(newMessages);
              const response = await Chatbot.getResponseAsync(inputText);
             
              setMessages([
              ...newMessages.slice(0,-1),
              {
                message:response,
                sender:"robot",
                id:crypto.randomUUID(),
                time:dayjs().valueOf()
              }
            ])
           setInputText("");
           setIsLoading(false);
            }
            
        
      
           
          
          
            
           function keypress(event){
          if(event.key==="Enter"){
            sendMessage();
          }else if(event.key==="Escape"){
            setInputText("");
          }
        }
        function clearMessages(){
          localStorage.removeItem("messages");
          setMessages([]);
        }


      
        //  controlled input useing value and onChange props to control the input field,
      
       
   
      
        return(
          <div className="chat-input-container">
            <input 
              placeholder="Send your message to chatbot" 
              size="30" onChange={saveInputText}
              value={inputText} 
              onKeyDown={keypress}
              className="chat-input"
            />
            <button 
            onClick={sendMessage}
            className="send-button"
            >Send</button>
            <button 
            onClick={clearMessages}
            className="clear-button">
                Clear
            </button>
          </div>
        )
     
      } 