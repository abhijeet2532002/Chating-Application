import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

function SignUp() {
    const [emailData, setEmailData] = useState("");
    const [passwordData, setPasswordData] = useState("");
    const [numberData, setNumberData] = useState("");
    const [usernameData, setUsernameData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`emailData : ${emailData}`);
        console.log(`passwordData : ${passwordData}`)
    }

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center ">
            <div className="row w-100 g-0">
                <div className="col-md-6">
                    <div className="border border-2 border-dark card rounded-0 border-end-0 h-100">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <form onSubmit={handleSubmit} className="w-100">
                                {/* Username feild */}
                                <div className="form-floating border border-0 mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-start-0 border-end-0 rounded-0" id="floatingInput" value={usernameData} onChange={(e) => {
                                        setUsernameData(e.target.value)
                                    }} placeholder="name@example.com" />
                                    <label className="text-break" htmlFor="floatingInput">Email address</label>
                                </div>

                                {/* Email feild */}
                                <div className="form-floating border border-0 mb-3">
                                    <input type="email" className="form-control shadow-none border border-2 border-dark border-top-0 border-start-0 border-end-0 rounded-0" id="floatingInput" value={emailData} onChange={(e) => {
                                        setEmailData(e.target.value)
                                    }} placeholder="name@example.com" />
                                    <label className="text-break" htmlFor="floatingInput">Email address</label>
                                </div>

                                {/* Mobile Number */}
                                <div className="form-floating border border-0 mb-3">
                                    <input type="number" className="form-control shadow-none border border-2 border-dark border-top-0 border-start-0 border-end-0 rounded-0" id="floatingInput" value={numberData} onChange={(e) => {
                                        setNumberData(e.target.value)
                                    }} placeholder="1234567890" />
                                    <label className="text-break" htmlFor="floatingInput">Number</label>
                                </div>

                                {/* Password feild */}
                                <div className="form-floating border border-0 mb-3">
                                    <input type="password" className="form-control shadow-none border border-2 border-dark border-top-0 border-start-0 border-end-0 rounded-0" id="floatingPassword" value={passwordData} onChange={(e) => {
                                        setPasswordData(e.target.value)
                                    }} placeholder="Password" />
                                    <label className="text-break" htmlFor="floatingPassword">Password</label>
                                </div>

                                {/* Buttons */}
                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn fw-bold btn-outline-success">Submit</button>
                                    <button type="reset" class="btn fw-bold btn-outline-warning">Reset</button>
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
                        <h3 className="mb-3 text-center">Sign-Up in Chat App</h3>
                        <p>
                            <span>In today’s digital age, where countless platforms offer diverse services, the act of signing up has become a gateway to an enhanced and personalized user experience. Signing up is not merely about creating an account; it is about building a connection between the user and the platform, unlocking features that transform casual browsing into a tailored journey.</span>
                            <br />
                            <span>Signing up is more than just creating an account; it’s the gateway to a personalized and enriched digital experience. It allows platforms to tailor services to individual preferences, offering features like personalized dashboards, recommendations, and saved progress. Signing up ensures enhanced security, safeguarding personal data and activities. It also fosters community connections, enabling users to interact with like-minded individuals. Convenience is another key benefit, as it allows users to pick up where they left off without losing progress. Exclusive features, rewards, and access to premium content are often unlocked through signing up. For businesses, it provides valuable insights into user behavior to improve services. Whether it’s tracking fitness goals or saving messages on a communication app, signing up transforms platforms into personalized spaces. It bridges the gap between casual browsing and meaningful engagement. Ultimately, signing up empowers users to make the most of their digital experiences.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
