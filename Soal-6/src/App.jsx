import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";

function App() {
    return (
        <FilterProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                </Routes>
            </Router>
        </FilterProvider>
    );
}

export default App;
