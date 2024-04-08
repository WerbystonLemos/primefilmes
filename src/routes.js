import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Filme from './Pages/Filmes/Filme';
import Header from './components/Header/Header';

function RoutesApp(){
    return( 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }>Home</Route>
                <Route path="/filme:id" element={ <Filme/> }>Home</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;