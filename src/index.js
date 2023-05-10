import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { pageRoutes } from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense fallback={""}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {pageRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <App>
                  <Component />
                </App>
              }
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
