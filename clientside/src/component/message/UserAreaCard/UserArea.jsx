import React, { useState } from "react";
import UserList from "./UserList";
import { FaEdit, FaFilter, FaSearch } from "react-icons/fa";

const UserArea = () => {

  return (
    <div className="card vh-100 rounded-0 border border-0">
      <div className="card-title mx-3 mt-3 p-0 mb-0">
        {/* Banner of this page */}
        <div className="d-flex justify-content-between m-0">
          <span className="fw-bold fs-5">Chat</span>
          <div>
            <FaEdit className="mx-2 fs-5" />
            <FaFilter className="mx-2 fs-5" />
          </div>
        </div>

        {/* Search box */}
        <div className="input-group mb-3 mt-2 border border-3 border-success border-top-0 border-end-0 border-start-0">
          <input type="text" className="form-control rounded-0 border border-0 bg-transparent shadow-none" placeholder="Search Username" aria-label="Search Username" aria-describedby="basic-addon1" />
          <span className="input-group-text border border-0 rounded-0 bg-transparent" id="basic-addon1">
            <FaSearch />
          </span>
        </div>
      </div>

      <UserList />
    </div>
  );
};

export default UserArea;
