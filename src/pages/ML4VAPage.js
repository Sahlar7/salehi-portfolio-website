import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";

function ML4VAPage(){
    return(
        <>
            <Navigation/>
            <body className="main">
            <h1 className="project-header">ML4VA Fruit Quality Classifier</h1>
            <p className="project-subtext">Fall 2024</p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p>
                                This project was completed by Sahlar and two others for the UVA Machine Learning for Virginia (ML4VA) competition.
                                The goal of this project was to create a machine learning model to classify fruits as fresh or spoiled 
                                based on images of the fruit, helping consumers determine if their fruits are fresh before they purchase or eat them.
                                This project won 1st place in the Fall 2024 ML4VA compeition. 
                                <br/>
                                <a href="https://nrichnguyen.wixsite.com/ml4va">ML4VA Competition Website</a>
                            </p>
                            <p>
                                The application allows users to upload images of fruits to a Svelte frontend, which accesses the model stored in a 
                                Google Cloud bucket. The model is a convolutional neural network (CNN) trained on a dataset of 16,000 total images across 8 kinds of fresh and spoiled fruits.
                                The model was built from a ResNet50 architecture and trained using Tensorflow and Keras. The model achieved an overall validation accuracy of about 99%.
                            </p>
                            <p>You can view the video submission for the ML4VA competition of this project below</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eOswTzKjGGQ?si=0dlL0zFAeOeJLJU6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <br/>
                <span>ML4VA Fruit Quality Classifier Submission</span>
            </div>
            <br/>
            <Container>
                <h2>Contributions</h2>
                <ul>
                    <li>Lead in designing, training, and testing the machine learning model</li>
                    <li>Also assisted in other areas of the project</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default ML4VAPage;