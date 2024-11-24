import React from 'react';
import { FaSearch } from 'react-icons/fa';


const MessageBanner = () => {
    const userListData = {
        userImage: "/img/user.png",
        name: "Abhijeet Kumar",
        message: "This is a last message",
        time: "05:40 PM"
    }

    return (
        <>
            <div className="card-title d-flex border border-2 border-dark py-0 px-2 m-0 rounded-0">
                <img
                    src={userListData.userImage}
                    className="flex-shrink-1 my-2 mx-0"
                    alt="user"
                    style={{ width: '50px', height: '50px' }}
                />
                <div className="p-2 w-100">
                    <h5 className="fw-bold py-0 my-0">{userListData.name}</h5>
                    <span>{userListData.message}</span>
                </div>

                <div className="flex-shrink-1 d-flex align-items-center">
                    <FaSearch className='fs-4 mx-1' />
                </div>
            </div>
        </>
    )
}

export default MessageBanner