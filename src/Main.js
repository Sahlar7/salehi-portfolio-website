import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import {useRef, useState} from "react";
import {Button, Card, CardGroup, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navigation from "./components/Navigation";
import FadeIn from "./components/FadeIn";

function Main() {

    const contactForm = useRef();
    const [isSubmitted, setSubmit] = useState(false);
    const [submitText, setSubmitText] = useState("Send");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!isSubmitted) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE,
                process.env.REACT_APP_EMAILJS_TEMPLATE,
                contactForm.current,
                process.env.REACT_APP_EMAILJS_KEY
            )
            .then((result) => {
                setSubmit(true);
                setSubmitText("Sent!");
                console.log(result.text);
            }, (error) => {
                setSubmitText("Error! Try again");
                console.log(error.text);
            });
        }
    };




    return (
        <>
            <Navigation/>
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
                                <p>My name is Noah Salehi, but I tend to go by my middle name, Sahlar, which I've been called by
                                    friends and family since birth. I am a University of Virginia Engineering 2026' computer science major.
                                     I spend much of my time as a musician: I love playing piano, guitar, and writing songs. I lead a Persian frame drum ensemble for UVA's 
                                     Persian Culture Society. In my free time, I stay active by playing soccer, tennis, or going to they gym, and I enjoy cooking. I also love 
                                     to make new projects, big and small. I strongly believe that the power to create software is an art, and I want to share that passion with the world 
                                     and get rid of the stigma that coding is boring or unreachable. I want to use my skills to create software that is fun, engaging, and useful.
                                    <br/>
                                    In high school, I attended the Academies of Loudoun's engineering program, where I conducted research on inexpensive
                                    acoustic materials as an alternative to current soundproofing. This project was submitted to a regional Regeneron ISEF Competition, where it was
                                    given the ASM Materials Education Foundation award for materials science projects.
                                    <br/>
                                    Starting in May 2024, I have worked as an research assistant at the UVA Omni Reality and Cognition Lab. My research involves using convolutional neural networks to 
                                    classify pedestrian gaze data in urban environments, ultimately aiming to further traffic research and develop technologies to assist impaired pedestrians. 
                                    My research interests at large include generative AI, large language models, computer vision, and wearable technologies.
                                    <br />
                                    Many of my projects have been independent. Others have been through UVA class projects or external organizations. I was formerly a web developer in UVA's Project Code organization working on a website called Hoos Available which aims to centralize
                                    scattered course and professor information for students to easily access.
                                    <br/>
                                    Feel free to view some of my works below, and feel free to reach out to me and connect via linkedin (at bottom of page).
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
                            <Card.Img className="project-image" variant="top" src={require("./images/RouletteLogo.png")} fluid></Card.Img>
                            <Card.Title>Roulette.FM</Card.Title>
                            <Card.Text> Multiplayer music guessing game to get to know your friends and 
                                new music through each other's Spotify playlists</Card.Text>
                            <Link to={"/RoulettePage"}>
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
                    <Card className="project-card">
                        <Card.Body>
                            <Card.Img className="project-image" variant="top" src={require("./images/24kologo.png")} fluid></Card.Img>
                            <Card.Title>24KO</Card.Title>
                            <Card.Text>Multiplayer math game based on the classic game of 24. Compete with your friends to solve math problems and be the last player standing!</Card.Text>
                            <Link to={"/KOPage"}>
                                <Button className="project-button" variant="dark">View more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    </CardGroup>
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
