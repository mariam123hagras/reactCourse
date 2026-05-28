import './ChatMessage.css'
import userImage from '../assets/user.webp'
import robotImage from '../assets/robot.webp'
 function ChatMessage({message,sender}){
        // const message=props.message;
        // const sender=props.sender;
        // const {message,sender}=props;
        
         /* if(sender==='robot'){
            return(
               <div>
              <img src="robot.webp" width="50"/>
              {message}
             </div>
            )
           
          }*/

         
         
          return(
             <div className={
              sender==='user'
              ?'chat-message-user'
              :'chat-message-robot'
            }>
            {sender==='robot'&& (
              <img src={robotImage} className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
               {message}
           </div>
           {sender==='user'&&(
            <img src={userImage} className="chat-message-profile"/>
          )}
          </div>
          )
         
        
      }
    export default ChatMessage;
     