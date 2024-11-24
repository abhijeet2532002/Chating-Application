import React from 'react';
import { FaRegSmile } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { IoMdSend } from "react-icons/io";


const MessageText = () => {
  return (
    <div className="card-footer d-flex px-2 pt-3 pb-2 align-items-center border border-2 border-dark rounded-0">
      <FaRegSmile className=" mx-2" style={{fontSize: "32px"}} />
      <GoPaperclip className=" mx-2" style={{fontSize: "32px"}} />

      <input type="text" className="form-control rounded-0 bg-transparent shadow-none border border-3 border-success border-top-0 border-end-0 border-start-0 mx-2" placeholder="Enter your message" aria-label="Search Username" aria-describedby="basic-addon1" />

      <IoMdSend className=" mx-2" style={{fontSize: "32px"}} />
    </div>

  )
}

export default MessageText