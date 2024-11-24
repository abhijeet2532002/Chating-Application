import { Routes, Route } from 'react-router-dom'
import Login from '../component/auth/Login';
import SignUp from '../component/auth/SignUp';
function AuthRouter() {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
}
export default AuthRouter;