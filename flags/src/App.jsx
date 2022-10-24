import {Header} from "./components/Heder";
import {Main} from "./components/Main";
import {Route, Routes} from 'react-router-dom'
import {HomePage} from "./pages/HomePage";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";


function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/country/:name" element={<Details/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </Main>
        </>
    );
}

export default App;
