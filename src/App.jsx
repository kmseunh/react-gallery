import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/photo/:id' element={<Detail />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
