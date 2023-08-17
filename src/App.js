import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import styles from './appWrapper.module.css'
import Footer from './components/Footer';
import './index.css';
import storeParse from "./redux/storeParse";

const App = () => {
    return (
        <Provider store={storeParse}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
                {/* Conditional rendering for CarList or CarDetails based on navigation */}
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
