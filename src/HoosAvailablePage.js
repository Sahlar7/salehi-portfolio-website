import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, ButtonGroup, Col, Dropdown, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import { HashLink} from 'react-router-hash-link';


function HoosAvailablePage(){
    return(
        <>
            <Navbar sticky="top" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand ><Link className="nav" to={"/Main"}>Sahlar Salehi</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav className="me-auto">
                        <Nav.Link><HashLink smooth to={"/Main#About"} className="nav">About</HashLink></Nav.Link>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="link" as={Nav.Link}><HashLink smooth to={"/Main#Projects"} className="nav">Projects</HashLink></Button>
                            <Dropdown.Toggle as={Nav.Link} split/>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1"><Link className="nav" to={"/HoosAvailablePage"}>Hoos Available</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="2"><Link className="nav" to={"/CourseReviewsPage"}>Course Reviews Application</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3"><Link className="nav" to={"/ResearchPage"}>Acoustic Tile Research</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link><HashLink smooth to={"/Main#Contact"} className="nav">Contact</HashLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <body className = "main">
            <h1 style={{marginTop: 20}}>Hoos Available</h1>
            <div>
                <Container>
                    <Row>
                       <Col xs={8}>
                           <p>
                           Hoos Available is a website made by students for students to centralize scattered information
                           about classes and professors. Whether a student wants to look at resources for a class they're
                           already enrolled in or check reviews for their next semester enrollment, Hoos Available aims to
                           be an easily accessible source to help students with their academic needs.
                           </p>
                           <p>
                           Hoos Available is a project within the UVA organization Project Code, in which students sign up to
                               work on a variety app/web projects. As a member of the Hoos Available team starting Fall 2023, Sahlar
                               has been one of the leading developers for the website. Only the frontend of the website has
                               been worked on, and it is yet to be published. However, the team is hard at work to get the website out
                               by the 2024 Fall semester.
                           </p>
                       </Col>
                        <Col>
                            <Image src={require("./images/ProjectCodeLogo.jpg")} fluid style={{paddingLeft: 60}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="project-video">
                <video width="800" height="500" controls>
                    <source src={require("./images/HoosAvailableDemo.mp4")}/>
                </video>
                <br/>
                <span>Hoos Available current progress demo</span>
            </div>
            <br/>
            <Container>
            <h2>Contributions</h2>
                <ul>
                    <li>Refactored project from vanilla HTML/CSS/JavaScript to a ReactJS application</li>
                    <li>Updated existing CSS to support use of React Bootstrap components</li>
                    <li>Find Professors by Department page: allows users to look through a list of professors within each department,
                    including a real-time filtered search feature which lets users narrow down the list of departments</li>
                    <li>Professor Profile page: assisted in setting up the Google Maps API within the webpage</li>
                </ul>
            </Container>
            </body>

        </>
    );
}
export default HoosAvailablePage;