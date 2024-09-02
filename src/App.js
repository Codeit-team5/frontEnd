import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memory from "./pages/Memory";
import PassWord from "./pages/PassWord";
import CreateGroupPage from "./pages/CreateGroupPage";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="CreateGroup" element={<CreateGroupPage />} />
        <Route path="Groups" element={<Memory />} />
        <Route path="/password" element={<PassWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
