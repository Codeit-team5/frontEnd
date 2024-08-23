import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Mainpage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
