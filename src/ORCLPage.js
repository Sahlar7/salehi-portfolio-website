import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {HashLink} from "react-router-hash-link";
import {Button, ButtonGroup, Col, Dropdown, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";


function ORCLPage() {
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
                                <Dropdown.Item eventKey="4"><Link className="nav" to={"/ORCLPage"}>Omni Reality & Cognition Lab</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link><HashLink smooth to={"/Main#Contact"} className="nav">Contact</HashLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <body className = "main">
            <h1 style={{marginTop: 20}}>Omni Reality & Cognition Lab</h1>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <p>
                                The Omni Reality and Cognition Lab (ORCL) aims to use augmented and virtual reality to
                                observe human behavior and reaction to virtual environments
                            </p>
                            <p>
                                Many of ORCL's projects center around using mixed realities for experiment design in traffic/micromobility.
                                For example, one project, Virtual Reality As A Tool For Understanding Vulnerable Road User Preference And Reaction,
                                focused on the use a VR bike and pedestrian simulator to model road user behaviors.

                            </p>
                        </Col>
                        <Col>
                            <Image src={require("./images/ORCL.png")} fluid style={{paddingLeft: 60}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br/>
            <br/>
            <Container>
                <h2>Contributions</h2>
                <ul>
                    <li>Undergraduate Research Assistant</li>
                    <li>Currently has worked on with 3 others on a project focusing on using
                        computer vision and deep learning algorithms to train a model
                        to classify pedestrian areas of interest (AOI), and through the study also analyze pedestrian gaze behavior.
                    Specifically worked on manually classifying images by AOI, debugging image processing scripts, and using PyTorch
                    to train the model.</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default ORCLPage;