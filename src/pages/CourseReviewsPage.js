import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";

function CourseReviewsPage(){
    return(
        <>
            <Navigation/>
            <body className="main">
            <h1 className="project-header">Course Reviews Application</h1>
            <p className="project-subtext">Fall 2023</p>
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
                    <source src={require("../images/CourseReviewDemo.mp4")}/>
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