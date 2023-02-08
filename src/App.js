import { ToastContainer } from "react-toastify";

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LazyDashboard = React.lazy(() => import("./UserDashboard"));
const LazyLogin = React.lazy(() => import("./Login"));
const LazyRegister = React.lazy(() => import("./Register"));
const LazyRoute = React.lazy(() => import("./privateRoutes"));

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="loading">
                <LazyLogin />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <React.Suspense fallback="loading">
                <LazyLogin />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <React.Suspense fallback="loading">
                <LazyRegister />
              </React.Suspense>
            }
          ></Route>

          <Route path="/user" element={<LazyRoute />}>
            <Route
              path="products"
              element={
                <React.Suspense fallback="loading">
                  <LazyDashboard />
                </React.Suspense>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
