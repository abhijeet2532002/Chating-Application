import { Routes, Route } from 'react-router-dom';
import MessagePage from '../component/message/MessagePage';
function MessageRouter() {
    return <Routes>
        <Route path="/message" element={<MessagePage />} />
    </Routes>
}
export default MessageRouter;