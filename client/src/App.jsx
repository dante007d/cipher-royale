import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LobbyUI from './components/LobbyUI.jsx';
import GameContainer from './components/GameContainer.jsx';
import ResultScreen from './components/ResultScreen.jsx';
import AdminPanel from './components/AdminPanel.jsx';

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LobbyUI />} />
        <Route path="/game" element={<GameContainer />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
