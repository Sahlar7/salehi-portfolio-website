import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {HashLink} from "react-router-hash-link";
import {Button, ButtonGroup, Col, Dropdown, Row} from "react-bootstrap";


function CourseReviewsPage(){
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
            <body className="main">
            <h1 style={{marginTop: 20}}>Course Reviews Application</h1>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p>
                                This course reviews application project was completed by Sahlar and two others as the final project
                                for the UVA course CS 3140 - Software Development Essentials. The application was created using Java,
                                 Javafx, and SQLite/Hibernate ORM for database features.
                            </p>
                            <p>
                                The application allows users to read and write reviews for courses. Users are able to search
                                and view courses reviews, add courses to the catalog,
                                write up to one review per course, edit and delete their own reviews, and view all of their reviews
                                on their account page (My Reviews page). All account information, reviews, and courses are stored on a
                                SQLite database.
                                <br/><br/>
                                Project GitHub repository: <a href="https://github.com/Sahlar7/Salehi-CourseReviewsProject.git">Click to view more</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="project-video">
                <video width="800" height="500" controls>
                    <source src={require("./images/CourseReviewDemo.mp4")}/>
                </video>
                <br/>
                <span>Course Review Application Tour</span>
            </div>
            <br/>
            <Container>
                <h2>Contributions</h2>
                <ul>
                    <li>Implemented the Course Review and My Review pages</li>
                    <li>Implemented Review Editor</li>
                    <li>Assisted in database setup, debugging, and refactoring all other pages/components</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default CourseReviewsPage