import React from 'react';
import {Button, Navbar, Container, Nav, Dropdown, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Navigation = () => {
    return (
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/Main">Sahlar Salehi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav className="me-auto">
                        <Nav.Link><HashLink smooth to={"/Main#About"} className="nav">About</HashLink></Nav.Link>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="link" as={Nav.Link}><HashLink smooth to={"/Main#Projects"} className="nav">Projects</HashLink></Button>
                        <Dropdown.Toggle as={Nav.Link} split/>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1"><Link className="nav" to={"/DocagentPage"}>DocAgent</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="2"><Link className="nav" to={"/ML4VAPage"}>ML4VA Fruit Quality Classifier</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3"><Link className="nav" to={"/ORCLPage"}>Omni Reality & Cognition Lab</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="4"><Link className="nav" to={"/RoulettePage"}>Roulette.FM</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="5"><Link className="nav" to={"/KOPage"}>24KO</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="6"><Link className="nav" to={"/HoosAvailablePage"}>Hoos Available</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="7"><Link className="nav" to={"/CourseReviewsPage"}>Course Reviews Application</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="8"><Link className="nav" to={"/ResearchPage"}>Acoustic Tile Research</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="9"><Link className="nav" to={"/MediGuardPage"}>MediGuard</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link><HashLink smooth to={"/Main#Contact"} className="nav">Contact</HashLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};
export default Navigation;