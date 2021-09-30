import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import Discuss from './Discuss';
import Book from './Book';
import Home from './Home';
import './App.css';
import './index';
import SearchBar from './Pages/SearchBar';
import logo from  "./Amogus.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import petal from './clover.png'
import BuyingPage from './BuyingPage';
function App() {
    return (
        <Router>
        <div>
            <nav>
                <container className='brand'>
            <img src={petal} className="petal" />
              <h1>Petal</h1>
                </container>
                 <ul>
                     <li>
                        <Link to ='/Home' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to ='./Discuss' className='link'>Discuss</Link>
                    </li>
                    <li>
                        <Link to ='./Book' className='link'>Book</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <Switch>
            <Route exact path='./Discuss'>
            <Discuss />
            </Route>
            <Route exact path='./Book'>
            <Book />
            </Route>
            <Route exact path='/Home'>
            <Home />
            </Route>
        </Switch>
        <div className="sbar">
            <SearchBar placeholder='Enter a Book Name...' />
        </div>
        <br></br>
        <p className='bukuTeratas'>BUKU TERATAS!</p>
        <br></br>
        <div className='container'>
        <img src={logo} className='logo1' />
        <img src={logo} className='logo2' />
        <img src={logo} className='logo3' />
        <img src={logo} className='logo4' />
        </div>
        
        <div className="judulBuku">
            <Link to='./BuyingPage'className="bukub">Buku Sedih</Link>
            <p className="bukuc">Buku Sayang</p>
            <p className="bukud">Buku Cinta</p>
            <p className="bukue">Buku Kecewa</p>
        </div>
        <Switch>
        <Route path='./BuyingPage'>
            <BuyingPage />
            </Route>
        </Switch>
        </Router>
    )
    }
export default App
