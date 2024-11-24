import { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


function Login() {
    const [emailData, setEmailData] = useState("");
    const [passwordData, setPasswordData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`emailData : ${emailData}`);
        console.log(`passwordData : ${passwordData}`)
    }

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100 g-0">
                <div className="col-md-6">
                    <div className="border border-2 border-dark card rounded-0 border-end-0 h-100">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <form onSubmit={handleSubmit} className="w-100">
                                <div className="form-floating border border-0 mb-3">
                                    <input type="email" className="form-control shadow-none border border-2 border-dark border-top-0 border-start-0 border-end-0 rounded-0" id="floatingInput" value={emailData} onChange={(e) => {
                                        setEmailData(e.target.value)
                                    }} placeholder="name@example.com" />
                                    <label className="text-break" htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating border border-0 mb-3">
                                    <input type="password" className="form-control shadow-none border border-2 border-dark border-top-0 border-start-0 border-end-0 rounded-0" id="floatingPassword" value={passwordData} onChange={(e) => {
                                        setPasswordData(e.target.value)
                                    }} placeholder="Password" />
                                    <label className="text-break" htmlFor="floatingPassword">Password</label>
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn fw-bold btn-outline-success">Submit</button>
                                    <button type="reset" class="btn fw-bold btn-outline-warning">Forget Password</button>
                                </div>
                            </form>
                            <div class="d-flex justify-content-around flex-wrap mt-3 w-100">
                                <button class="mb-3 text-break btn fw-bold btn-outline-success"><FaGoogle /> Google</button>
                                <button class="mb-3 text-break btn fw-bold btn-outline-warning"><FaFacebook /> Facebook</button>
                                <button class="mb-3 text-break btn fw-bold btn-outline-danger"><FaGithub /> Github</button>
                                <button class="mb-3 text-break btn fw-bold btn-outline-primary"><FaLinkedin /> Linkedin</button>
                                <button class="mb-3 text-break btn fw-bold btn-outline-info"><FaTwitter /> Twitter</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
                    <div className="border border-2 border-dark card rounded-0 p-4">
                        <h3 className="mb-3 text-center">Join Our Chat App</h3>
                        <p>
                            You’ve had a long day, and you just want to connect with your friends. You open the app, log in, and there it is—your world. Familiar faces, meaningful conversations, and the comfort of knowing your chats are exactly where you left them.
                        </p>
                        <h5>Logging in isn’t just about entering your details—it’s about unlocking a gateway to your own private corner of the digital world.</h5>
                        <ul>
                            <li>Remember that hilarious group chat? It’s still buzzing with energy.</li>
                            <li>Missed that heartfelt message? It’s waiting for you, securely saved.</li>
                            <li>Want to share that special moment? With just a few taps, it’s sent to those who matter most.</li>
                        </ul>
                        <h5>Logging in is your key to:</h5>
                        <ul>
                            <li>Conversations that stay private and secure.</li>
                            <li>Messages that follow you wherever you go, on any device.</li>
                            <li>Real-time updates, so you’re always in the loop.</li>
                        </ul>
                        <p>And here’s the best part: It’s all just for you. Logging in brings your connections to life—your chats, your groups, your world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
