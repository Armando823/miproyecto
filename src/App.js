import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  const [loading, setLoading] = useState(true);

  // efecto inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // función recargar definida dentro de App
  const recargar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  // mostrar loader mientras carga
  if (loading) {
    return <Loader />;
  }

  // contenido principal
  return (
    <>
      <Navbar />
      <Home onRecargar={recargar} />
    </>
  );
}

export default App;
