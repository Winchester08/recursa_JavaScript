import React from "react";

const Header: React.FC = () => {
  return (
    <nav style={{ 
         backgroundColor: "#b235b7",
         padding: "10px",
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%" }}>
      <h2 style={{ color: "white" }}>Mi Navbar</h2>
      <button style={{backgroundColor: "#0a0a0a", color: "#d57cd8", marginRight: "15px",border: "1px solid #ccc", borderRadius: "10px", }}>Inicio</button>
      <button style={{ backgroundColor: "#090909", color: "#d57cd8", marginRight: "15px",border: "1px solid #ccc", borderRadius: "10px", }}>Perfil</button>
      <button style={{ backgroundColor: "#0e0e0e", color: "#d57cd8", marginRight: "15px",border: "1px solid #ccc", borderRadius: "10px", }}>Ajustes</button>
      <button style={{ backgroundColor: "#080808", color: "#d57cd8", marginRight: "15px",border: "1px solid #ccc", borderRadius: "10px", }}>Salir</button>
    </nav>
  );
};

export default Header;