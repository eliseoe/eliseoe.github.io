import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import SiteHome from "./pages/SiteHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteHome />} />
        <Route path="/recipes/:slug" element={<RecipePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
