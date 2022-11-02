import {useState} from "react";
import {Route, Routes, useParams} from 'react-router-dom'
import {Header} from "./components/Heder";
import {Main} from "./components/Main";
import {HomePage} from "./pages/HomePage";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";


function App() {
    const [countries, setCountries] = useState([]);
    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                    <Route path="/country/:name" element={<Details/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
