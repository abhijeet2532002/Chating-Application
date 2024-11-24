import React from 'react'

const UserList = () => {

    const userListData = [{
        userImage: "/img/user.png",
        name: "Abhijeet Kumar",
        message: "This is a last message",
        time: "05:40PM"
    }, {
        userImage: "/img/user.png",
        name: "Shubham Kumar",
        message: "This is a last message",
        time: "05:40PM"
    }, {
        userImage: "/img/user.png",
        name: "Jitendar Kumar",
        message: "This is a last message",
        time: "05:40PM"
    }, {
        userImage: "/img/user.png",
        name: "Alok Kumar",
        message: "This is a last message",
        time: "05:40PM"
    }, {
        userImage: "/img/user.png",
        name: "Hritik Kumar",
        message: "This is a last message",
        time: "05:40PM"
    }];

    return (
        <>
            {/* Userlist Area */}
            < div className="card-body rounded-3 mt-0 p-0" >
                {/* User */}
                {
                    userListData.map((data, index) => {
                        return (
                            <div className="d-flex mx-2" key={`user-${index}`}>
                                <img
                                    src={data.userImage}
                                    className="flex-shrink-1 m-2"
                                    alt="user"
                                    style={{ width: '50px', height: '50px' }}
                                />
                                <div className="p-2 w-100">
                                    <div className="d-flex justify-content-between fw-bold my-0 py-0">
                                        <span>{data.name}</span>
                                        <span>{data.time}</span>
                                    </div>
                                    <span>{data.message}</span>
                                </div>
                            </div>
                        );
                    })
                }

            </div >
        </>
    )
}

export default UserList;