import './App.css'
import InvitePagee from './InvitePagee'
import ConfigurePage from './ConfigurePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<ConfigurePage />} />
                    <Route path="/invite/:params" element={<InvitePagee />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
