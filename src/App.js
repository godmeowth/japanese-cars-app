import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./appWrapper.module.css";
import CarList from "./components/CarList";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import store from "./redux/store";
import CarListingPage from "./components/CarListingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.content}>
                <CarList />
              </div>
            }
          />

          <Route path="/cars/:carId" element={<CarListingPage />} />
        </Routes>
        <div className={styles.footer}>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
