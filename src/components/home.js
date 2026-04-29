import React from "react";

const Home=({onRecargar})=>{
    return(
        <div className="container text-center mt-5">
            <h1>BIENVENIDOS</h1>
            <p>Proyecto con React JS</p>
            <button className="btn btn-dark" onClick={onRecargar}>
                CARGAR
            </button>
        </div>
    );
}

export default Home;