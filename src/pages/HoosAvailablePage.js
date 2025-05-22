import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navigation from "../components/Navigation";

function HoosAvailablePage(){
    return(
        <>
            <Navigation/>
            <body className = "main">
            <h1 className="project-header">Hoos Available</h1>
            <p className="project-subtext">Spring 2023</p>
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
                            <Image src={require("../images/ProjectCodeLogo.jpg")} fluid style={{paddingLeft: 60}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="project-video">
                <video width="800" height="500" controls>
                    <source src={require("../images/HoosAvailableDemo.mp4")}/>
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