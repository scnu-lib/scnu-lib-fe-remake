import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './layouts';
import routers, { RouterRender } from './router';
import { RecoilRoot } from 'recoil';
import './styles/App.css';

function App() {
  // const id = React.useId();
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Layouts>
            <Routes>
              {routers.map((router, idx) => (
                <Route
                  key={`routers-${idx}`}
                  path={router.path}
                  element={<RouterRender router={router} />}
                />
              ))}
            </Routes>
          </Layouts>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
