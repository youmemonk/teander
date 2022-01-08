import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "ROBERT",
      image:
        "https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg",
      message: "I am Ironman.",
    },
    {
      name: "Robert",
      image:
        "https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg",
      message: "And My Name Is Tony Stanks. ❤️",
    },
    {
      message: "I literally dont care ...",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH {messages[0].name} ON 01/05/08
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textuser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a Message"
          className="chatScreen__inputFIeld"
        />
        <button className="chatScreen__button" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
