import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AuthRequire from "./contexts/AuthRequire";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import JobModal from "./pages/JobModal";
import LoginModal from "./pages/LoginModal";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeProvider from "./contexts/ThemeProvider";
import { CssBaseline } from "@mui/material";

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <CssBaseline>
            <Routes location={location.state?.backgroundLocation || location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<HomePage />} />
              <Route path="/jobs/:id" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Routes>
              <Route>
                <Route path="/login" element={<LoginModal />} />
                <Route
                  path="/jobs/:id"
                  element={
                    <AuthRequire>
                      <JobModal />
                    </AuthRequire>
                  }
                />
              </Route>
            </Routes>
          </CssBaseline>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
