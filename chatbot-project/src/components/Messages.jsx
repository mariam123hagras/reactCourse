import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import dayjs from "dayjs";
import './Messages.css'



// usescrll feature as a custom hook to be resuable to other components
export function useAutoScroll(dependencies) {
  // useRef automatically save an html element from the component
  // ref is a container with special react features

  const chatMessagesRef = useRef(null);

  // useEffect lets us run some code after the component is created or updated
  // hooks doesn't exist inside if statement or inside a function or any thing
  // [] second parameter of useEffect is a dependency array that tells React when to run the effect, if it's empty it runs only once after the initial render, if it has values it runs whenever those values change
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    // scrollTop is a property that sets or returns the number of pixels an element's content is scrolled vertically, scrollHeight is a property that returns the entire height of an element in pixels, including padding, but not the border, scrollbar, or margins, so by setting scrollTop to scrollHeight we scroll to the bottom of the container evey time messages change or when component is first created
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return chatMessagesRef;
}

function Messages({ messages }) {
  const chatMessagesRef = useAutoScroll(messages);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {messages.length === 0 ? (
        <>
          <p className="welcome-message">welcome to the chat!</p>
         
        </>
        
      ) : (
        messages.map((messageObj) => {
          return (
            <ChatMessage
              message={messageObj.message}
              sender={messageObj.sender}
              key={messageObj.id}
              time={messageObj.time}
            />
          );
        })
      )}
    </div>
  );
}
export default Messages;
