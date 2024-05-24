import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

