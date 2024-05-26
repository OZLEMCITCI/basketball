import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

