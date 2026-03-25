import React from "react";

// Componente Navbar interno para la prueba
const Navbar = () => (
  <nav
    style={{
      background: "#20232a",
      color: "white",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <h2 style={{ margin: 0 }}>Sia Auto</h2>
    <div style={{ display: "flex", gap: "20px" }}>
      <span style={{ cursor: "pointer" }}>Inicio</span>
      <span style={{ cursor: "pointer" }}>Servicios</span>
      <span style={{ cursor: "pointer" }}>Contacto</span>
    </div>
  </nav>
);

// Componente Hero interno para la prueba
const Hero = () => (
  <div
    style={{
      textAlign: "center",
      padding: "100px 20px",
      backgroundColor: "#f4f4f4",
      minHeight: "60vh",
    }}
  >
    <h1 style={{ fontSize: "3.5rem", color: "#20232a" }}>
      Bienvenido a Sia Auto
    </h1>
    <p style={{ fontSize: "1.5rem", color: "#666" }}>
      La mejor plataforma de gestión para tu taller mecánico.
    </p>
    <button
      style={{
        padding: "15px 30px",
        fontSize: "1.1rem",
        backgroundColor: "#61dafb",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Explorar Ahora
    </button>
  </div>
);

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
