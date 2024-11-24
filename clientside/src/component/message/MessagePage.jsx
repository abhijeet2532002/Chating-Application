import React from 'react';
import MessageArea from './MessageAreaCard/MessageArea';
import UserArea from './UserAreaCard/UserArea';

const MessagePage = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="d-flex m-0">
                <div className='d-none d-lg-block' style={{minWidth: "300px", width: "350px"}}>
                    <UserArea />
                </div>
                <div className='flex-grow-1' >
                    <MessageArea />
                </div>
            </div>
        </div>
    )
}

export default MessagePage;