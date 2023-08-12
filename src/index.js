import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import ThemeProvider from "./Context/ThemeContext";
import ErrorBoundary from "./Components/ErrorBoundary";
import SiteLoading from "./Pages/SiteLoaidng";
const App = lazy(() => import ("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<SiteLoading />}>
              <App />
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
