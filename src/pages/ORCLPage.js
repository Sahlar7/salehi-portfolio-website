import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navigation from "../components/Navigation";



function ORCLPage() {
    return(
        <>
            <Navigation/>
            <body className = "main">
            <h1 className="project-header">Omni Reality & Cognition Lab</h1>
            <p className="project-subtext">
                Spring 2024-Spring 2025
                <br/>
                University of Virginia
                <br/>
                <a href="https://engineering.virginia.edu/labs-groups/omni-reality-cognition-lab">Lab Website</a>
            </p>
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
                            <Image src={require("../images/ORCL.png")} fluid style={{paddingLeft: 60}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br/>
            <br/>
            <Container>
                <h2>Contributions</h2>
                <ul>
                    <li>Undergraduate Research Assistant (May 2024-Present)</li>
                    <li>Worked in a team with 2 others researching a deep learning approach to 
                        pedestrian gaze behaviour analysis in urban traffic settings</li>
                    <li>Used PyTorch and Tensorflow to train multiple convolutional neural networks with over 90% accuracy 
                        for pedestrian area of interest (AOI) classification</li>
                    <li>Helped apply the model to classify pedestrian AOIs, allowing efficient analysis of pedestrian behaviors. For example, 
                        based on the pattern of AOIs, pedestrians are more likely to look around left and right at vehicles and traffic signals while crossing the street
                    </li>
                    <li>Coauthor of research paper demonstrating how the trained model can be used as a tool to efficiently analyze and understand 
                        pedestrian gaze behavior, enabling safer traffic control system design. We intend to submit the research paper to conferences and/or journals in the near future</li>
                    <li>Additionally worked on manual image AOI labeling, and wriiting an image processing Python program</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default ORCLPage;