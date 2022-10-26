import {useState} from "react";
import {Route, Routes} from 'react-router-dom'
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
                    <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}></Route>
                    <Route path="/country/:name" element={<Details/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </Main>
        </>
    );
}

export default App;
