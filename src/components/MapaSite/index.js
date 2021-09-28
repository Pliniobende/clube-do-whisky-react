import React from 'react';
import { MapaSiteContainer } from './MapaSite.styles';

const MapaSite = () => {
    return (
    <MapaSiteContainer>
        <h2 className="Mapa">Mapa do Site</h2>
        <h2 className="allMenu">Todas as páginas</h2>
            <ul className="menuList">
                <li className="menuItem"> <a href=" ">Home</a> </li>
                <li className="menuItem"> <a href=" ">Quem Somos</a> </li>
                <li className="menuItem"> <a href=" ">Categorias</a> </li>
                <li className="menuItem"> <a href=" ">Contato</a> </li>
            </ul>
    </MapaSiteContainer>
    )
}
export default MapaSite;
