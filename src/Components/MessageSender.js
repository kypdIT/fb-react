import React, { useState } from "react";
import { Avatar, Input } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    if (event.target.file[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="" />
        <form>
          <input
            type=""
            className="messageSender__input"
            placeholder="What's on your mind?"
            value="input"
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "#2e81f4" }} />
          <h3>Photo/ Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/ Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
