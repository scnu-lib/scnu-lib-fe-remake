import Index from './pages';
import ActivitiesDetail from './pages/activities-detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './layouts';
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Layouts>
                    <Routes>
                        <Route path="/" element={<Index></Index>}></Route>
                        <Route path="/activities" element={<ActivitiesDetail></ActivitiesDetail>}></Route>
                    </Routes>
                </Layouts>
            </BrowserRouter>
        </div>
    );
}

export default App;
