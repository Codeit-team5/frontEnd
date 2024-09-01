import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memory from "./pages/Memory";
import PassWord from "./pages/PassWord";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Memory />} />
        <Route path="/password" element={<PassWord />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
