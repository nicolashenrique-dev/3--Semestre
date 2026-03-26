import "../style/Aula13.css";
import React, { useState, useEffect } from "react";
import Aula13_CRUD_Produtos from "./Aula13_CRUD_Produtos";
import Aula13_CRUD_Usuarios from "./Aula13_CRUD_Usuarios";

const Aula13 = () => {

    return (
        <div className="aula13-container">
            <div className="aula13-header">
                <h1>Aula 13 - Construindo Soluções Reais</h1>
                <h3>Criando um CRUD com Design Premium e Imersivo</h3>
                <hr className="aula13-hr" />
            </div>
            
            <div className="aula13-cruds-wrapper">
                <Aula13_CRUD_Produtos />
                <Aula13_CRUD_Usuarios />
            </div>
        </div>
    )
}

export default Aula13
