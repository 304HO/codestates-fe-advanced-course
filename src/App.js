import MainPage from "./pages/mainpage";
import DetailPage from "./pages/detailpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/posts/:id" element={<DetailPage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
