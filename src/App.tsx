import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts";
import routers, { DomTitle } from "./routers";

import "./App.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Layouts>
					<Routes>
						{routers.map((item, idx) => (
							<Route
								key={`routers-${idx}`}
								path={item.path}
								element={<DomTitle item={item} />}
							/>
						))}
					</Routes>
				</Layouts>
			</BrowserRouter>
		</div>
	);
}

export default App;
