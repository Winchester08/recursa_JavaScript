import React from "react";
import perfil from "../assets/card.jpg";

const Card: React.FC = () => {
  return (
    <div style={{
      backgroundColor: "#8a70e7",
      border: "4px solid #f0f0f0",
      borderRadius: "15px",
      padding: "25px",
      width: "280px",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      fontFamily: "Arial",
      transition: "0.3s"
    }}

    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >

      {/* Imagen */}
      <img 
        src={perfil} 
        alt="perfil"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px",
          border: "3px solid #e1b8d9"
        }}
      />

      <h2 style={{ 
        marginBottom: "15px", 
        color: "#e1b8d9" 
      }}>
        Mi Información
      </h2>

      <div style={{ width: "100%", textAlign: "left" }}>
        <p><strong>Nombre:</strong> Lyneko</p>
        <p><strong>Carrera:</strong> Ingeniería TICs</p>
        <p><strong>Edad:</strong> 21 años</p>
        <p><strong>Universidad:</strong> CUVZ</p>
        <p><strong>Ocupación:</strong> Estudiante</p>
        <p><strong>Curso:</strong> Desarrollo Web</p>
      </div>

    </div>
  );
};

export default Card;