import React from 'react'
import { Nav } from "react-bootstrap";

const Sidebar = () =>
{
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Entreprises</Nav.Link>
            <Nav.Link eventKey="link-1">Zones de travail</Nav.Link>
            <Nav.Link eventKey="link-2">Plans de nettoyage</Nav.Link>
            <Nav.Link eventKey="link-2">Médiathèque</Nav.Link>
        </Nav>
    )
}

export default Sidebar;