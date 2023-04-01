import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { fetchUser } from "./utills/fetchUser";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate("/login");
  }, []);

  return (
    <GoogleOAuthProvider clientId="754016536312-49veshofm95ncdkvtl4vohqjl4suj3ph.apps.googleusercontent.com">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
