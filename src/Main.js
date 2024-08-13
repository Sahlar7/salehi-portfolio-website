import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, Card, CardGroup, Col, Dropdown, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import emailjs from "@emailjs/browser";

function Main() {

    function FadeIn(items){
        const [isVisible, setVisible] = useState(false);
        const domRef= useRef();
        useEffect( ()=>{
            const observer = new IntersectionObserver(entries =>{entries.forEach(entry=> {
                if (entry.isIntersecting)
                    setVisible(entry.isIntersecting);
            });});
            observer.observe(domRef.current);
            return () => {
                if(domRef.current)
                    observer.unobserve(domRef.current);
            }
        }, []);
        return (
            <div
                className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                {items.children}
            </div>
        );
    }

    const contactForm = useRef();
    const [isSubmitted, setSubmit] = useState(false);
    const [submitText, setSubmitText] = useState("Send");

    const sendEmail = (e) => {
        e.preventDefault();
        if(!isSubmitted) {
        emailjs.sendForm('service_hwoxy5b', 'template_qjefv6q', contactForm.current, 'zZW1rmL_BJKSQyQNs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSubmit(true);
        setSubmitText("Sent!")
        }
    };




    return (
        <>
            <Navbar sticky="top" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Sahlar Salehi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav className="me-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="link" as={Nav.Link} href="#Projects">Projects</Button>
                        <Dropdown.Toggle as={Nav.Link} split/>
                            <Dropdown.Menu>
                            <Dropdown.Item eventKey="1"><Link className="nav" to={"/HoosAvailablePage"}>Hoos Available</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link className="nav" to={"/CourseReviewsPage"}>Course Reviews Application</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3"><Link className="nav" to={"/ResearchPage"}>Acoustic Tile Research</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="4"><Link className="nav" to={"/ORCLPage"}>Omni Reality & Cognition Lab</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="header">
                <Image className="banner" src={require("./images/piano-banner.jpg")} fluid></Image>
                    <span className = "header-text">Welcome</span>
                    <br/>
                    <span className = "header-subtext">Enjoy your stay</span>
            </div>
            <body className = "main">
            <FadeIn>
                <div id="About" className="about">
                    <h1>About</h1>
                    <Container>
                        <Row>
                            <Col>
                                <p>My name is Noah Salehi, but I tend to go by my Iranian middle name, Sahlar, which I've been called by
                                    friends and family since birth. I am a University of Virginia Engineering 2026' computer science student,
                                    but before that I am an entrepreneur, a musician, and a thinker.
                                    <br/>
                                    In high school, I attended the Academies of Loudoun's engineering program, where I conducted research on inexpensive
                                    acoustic materials as an alternative to current soundproofing. This project was submitted to a regional Regeneron ISEF Competition, where it was
                                    given the ASM Materials Education Foundation award for materials science projects.
                                    <br/>
                                    At UVA, I am a web developer in the Project Code organization working on a website called Hoos Available which aims to centralize
                                    scattered course and professor information for students to easily access.
                                    <br/>
                                    As an aspiring software developer, my goal is to use technology to bring people together in positive ways: be it
                                    two friends on other parts of the globe, a patient with an extensive medical history and their new doctor, or a
                                    computer science student and his future colleagues.
                                </p>
                            </Col>
                            <Col>
                                <Image className = "about-image" src={require("./images/about-picture.JPG")} fluid></Image>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </FadeIn>
            <div id="Projects" className="projects">
                <FadeIn>
                    <h1>Projects</h1>
                    <CardGroup>
                    <Card className="project-card">
                        <Card.Body>
                            <Card.Img className="project-image" variant="top" src={require("./images/website-proj1.png")} fluid></Card.Img>
                            <Card.Title>Hoos Available</Card.Title>
                            <Card.Text>Website created by UVA students for UVA students to centralize scattered professor
                                and course information</Card.Text>
                            <Link to={"/HoosAvailablePage"}>
                            <Button className="project-button" variant="dark">View more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Body>
                            <Card.Img className="project-image" variant="top" src={require("./images/website-proj2.png")} fluid></Card.Img>
                            <Card.Title>Course Reviews Application</Card.Title>
                            <Card.Text>Class project for CS 3140: Software Development Essentials. Allows users to read and write
                            reviews for any courses. </Card.Text>
                            <Link to={"/CourseReviewsPage"}>
                            <Button className="project-button" variant="dark">View more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Body>
                            <Card.Img className="project-image" variant="top" src={require("./images/website-proj3cover.png")} fluid></Card.Img>
                            <Card.Title>Development of a 3D Printed Acoustic Tile to Determine an Inexpensive
                                Method of Soundproofing</Card.Title>
                            <Card.Text>Research project for regional Regeneron ISEF Competition</Card.Text>
                            <Link to={"/ResearchPage"}>
                                <Button className="project-button" variant="dark">View more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                        <Card className="project-card">
                        <Card.Body>
                            <Card.Img className="project-image" variant="top" src={require("./images/ORCL.png")} fluid></Card.Img>
                            <Card.Title>Omni Reality & Cognition Lab</Card.Title>
                            <Card.Text>Undergraduate Research Assistant at UVA Engineering lab dedicated to research centering around
                            mixed reality and micromobility</Card.Text>
                            <Link to={"/ORCLPage"}>
                                <Button className="project-button" variant="dark">View more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </FadeIn>
            </div>

            <FadeIn>
                <div id="Contact" className="contact">
                    <h1>Contact</h1>
                    <Container>
                    <Form ref={contactForm} onSubmit={sendEmail}>
                        <Row className="mb-3">
                            <Col>
                        <label>Name</label>
                        <Form.Control type="text" name="user_name" required size="sm"/>
                            </Col>
                            <Col>
                        <label>Email</label>
                        <Form.Control type="email" name="user_email" required size="sm"/>
                            </Col>
                        </Row>
                        <Row>
                        <label>Message</label>
                        <Form.Control as="textarea" name="message" required/>
                        </Row>
                        <br/>
                        <Button type="submit" id="submitButton" disabled={isSubmitted} variant="dark">{submitText}</Button>
                    </Form>
                    </Container>
                    <br/>
                    <br/>
                    <hr/>
                    <Row className="justify-content-md-center">
                        <Col>
                        <span><Image src={require("./images/website-emailicon.png")} style={{width: 50, height: 40}}/> sahlar.salehi@gmail.com</span>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/sahlar-salehi"><Image src={require("./images/website-linkedinicon.png")} style={{width: 50, height: 50}}/></a>
                        </Col>
                    </Row>
                </div>

            </FadeIn>

            </body>
        </>
    );
}

export default Main;
