import dayjs from "dayjs";
import './ChatMessage.css'
import userImage from '../assets/cat.jpg'
import robotImage from '../assets/robot.webp'
 function ChatMessage({message,sender,time}) {
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
           console.log(userImage)
         
         
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
              {time&&(<p className="chat-message-time">{dayjs(time).format('h:mma')}</p>)} 
           </div>
           {sender==='user'&&(
            <img src={userImage} className="chat-message-profile"/>
            
          )}
          </div>
          )
         
        
      }
    export default ChatMessage;
     