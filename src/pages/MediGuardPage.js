import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";

function MediGuardPage(){
    return(
        <>
            <Navigation/>
            <body className="main">
            <h1 className="project-header">MediGuard</h1>
            <p className="project-subtext">Spring 2024</p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p>
                                This course reviews application project was completed by Sahlar and four others as the project
                                for the UVA course CS 3240 - Software Engineering. The application was created following Agile development practices, 
                                and using Django framework, Google OAuth for athentication, PostgreSQL and Amazon S3 for database and file storage, 
                                and hosted on Heroku. While the website is no longer live, a short demo video is avaiable below.
                            </p>
                            <p>
                                The application allows users to write reports for medical malpractice cases, including the name 
                                and location of the practice, the offender's name, any files or images related to the case, and a description of the incident.
                                Users can report either anonymously or with their account (login via Google). If the user reports under an account, they can view all their 
                                reports on their account page. 
                                Website admins can view all reports, and mark them as under review or resolved, and provide a response to the whistleblower.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="project-video">
                <video width="800" height="500" controls>
                    <source src={require("../images/mediguarddemo.mp4")}/>
                </video>
                <br/>
                <span>MediGuard user demo</span>
            </div>
            <br/>
            <Container>
                <h2>Contributions</h2>
                <ul>
                    <li>Software architect: lead in designing the structure of the website, interactions between 
                        the client, server, and database, and the overall flow of the application</li>
                    <li>Implemented the user page and report list</li>
                    <li>Update the report system to include a list of practices so admins can view all reports under the same practice more easily</li>
                    <li>Implemented user vs admin permissions</li>
                    <li>Improved the UI with Django bootstrap and javascript listeners</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default MediGuardPage