import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/';
import Home from './containers/Home/Home';
import Products from './containers/Products/';
import ShoppingCart from './containers/ShoppingCart/';

function App() {
    return (
        <div className="App">
            <main>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/Cart" element={<ShoppingCart />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
