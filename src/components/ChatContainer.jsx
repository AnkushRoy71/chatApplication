import react from "react";

const ChatContainer = ({ children }) => {
  return (
    <div className="card w-100 border-2 border-info">
      <div className="row vh-95">
        <div className="d-flex flex-column col-12 col-lg-12 col-xl-12 chat-window">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
