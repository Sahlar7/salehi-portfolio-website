import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navigation from "../components/Navigation";

function ResearchPage() {
    return(
    <>
        <Navigation/>
        <body className = "main">
        <h1 className="project-header">Development of a 3D Printed Acoustic Tile to Determine an Inexpensive
            Method of Soundproofing</h1>
        <p className="project-subtext">Fall 2021-Spring 2022</p>
        <div>
            <Container>
                <Row>
                    <Col xs={8}>
                        <p>
                            This research project aimed to find a cost effective alternative to existing acoustic foam tiles
                            used to soundproof spaces. Without effective soundproofing, content will have lower audio quality, which could lead
                            to reduced viewership and by extension profits for creators. The experiment tested the ability of a 3D printed
                            thermoplastic polyurethane (TPU) panel in comparison to commonly used soundproofing materials
                            to reduce the loudness of sound escaping a model room. The results showed that TPU was not the strongest material,
                            but 3D printing should be looked into further as a means of developing cost effective acoustic tiles, and
                            similar/more sophisticated research should be performed on other materials.
                        </p>
                        <p>
                            The Development of a 3D Printed Acoustic Tile to Determine an Inexpensive Method of Soundproofing was submitted
                            to a regional Regeneron ISEF competition, where it received the ASM Materials Education Foundation Award for exemplary
                             research in Materials Science.
                        </p>
                    </Col>
                    <Col>
                        <Image src={require("../images/iseflogo.jpg")} fluid style={{paddingLeft: 60}}/>
                    </Col>
                </Row>
            </Container>
        </div>
        <br/>
        <div className="project-video">
            <Image width="800" height="500" src={require("../images/website-proj3.png")}/>
            <br/>
            <span>Research Project Quad Chart</span>
        </div>
        <br/>
        <Container>
            <h2>Contributions</h2>
            <ul>
                <li>Sole researcher</li>
                <li>Used AutoDesk Inventor to make CAD designs for the TPU acoustic tiles, which would be used as models for
                3D printing</li>
                <li>Created the experiment environment and performed several tests on the materials' soundproofing capabilities</li>
            </ul>
        </Container>
        </body>
    </>
    );
}
export default ResearchPage;