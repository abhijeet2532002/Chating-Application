import React, { useEffect, useRef } from 'react';

const MessageContainer = ({ socket }) => {
    const messageBodyRef = useRef(null);

    const messagelist = [
        { msg: "Lorem ipsum dolor sit amet, consectetur " },
        { msg: "Lorem ipsum dolor sit amet, consectetur " },
        { msg: "Lorem ipsum dolor sit amet, consectetur " },
        { msg: "Lorem ipsum dolor sit amet, consectetur " },
        { msg: "Lorem ipsum dolor sit amet, consectetur " },
        { msg: "Lorem ipsum dolor sit amet, consectetur " },
        { msg: "Lorem ipsum dolor sit amet, consectetur " }
    ];

    useEffect(() => {
        if (messageBodyRef.current) {
            // Scroll to the bottom when the component mounts or messagelist changes
            messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
        }
    }, [messagelist]); // Add messagelist as a dependency

    return (
        <div
            className="card rounded-0 flex-grow-1 d-flex flex-column overflow-auto h-100 border border-2 border-black border-top-0 border-bottom-0"
            ref={messageBodyRef}>
            <div className="d-flex flex-column mt-auto">
                {messagelist.map((data, index) => (
                    <span
                        key={index}
                        className={`border border-2 border-warning mx-2 my-1 rounded-3 px-3 fs-5 text-break ${
                            index % 2 === 0 ? 'ms-auto' : 'me-auto'
                        } text-dark rounded-pill`}
                        style={{ maxWidth: '600px' }}
                    >
                        {data.msg}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MessageContainer;