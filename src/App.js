import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import CarList from './components/CarList';
import styles from './appWrapper.module.css'
import Footer from './components/Footer/Footer';
import './index.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.content}>
                <CarList />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
