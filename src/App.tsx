import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import List from "./pages/List"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:urlId" element={<Edit />} />
        <Route path="/link" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
