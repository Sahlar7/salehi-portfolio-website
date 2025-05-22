import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navigation from "../components/Navigation";

function KOPage() {
    return(
        <>
            <Navigation/>
            <body className = "main">
            <h1 className="project-header">24KO</h1>
            <p className="project-subtext">Spring 2025</p>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <p>
                               24KO is a chaotic multiplayer game which takes a twist on the classic game of 24. Compete with your friends to complete
                                math problems using four numbers and the four basic operations (addition, subtraction, multiplication, and division) to get to 24. 
                                Answer problems to deal damage to your opponents. The last player standing wins!
                            </p>
                            <p>
                                Players can create and join lobbies, and then start the 24KO game. Each player will be given a random set of four numbers (each number ranging from 1-15) 
                                which can be combined in some way using the four basic operations to get to 24. When a player answers a question correctly, they will deal 
                                damage to a randomly target opponent who is still in the game. Answer quickly to deal more damage!
                            </p>
                            <p>
                                You can play 24KO at <a href="https://24ko.vercel.app/">https://24ko.vercel.app</a> 
                                 (Note: the game is still in development so there may be some bugs, or the server may not be live, but feel free to check it out.
                                 If the server is not up and you would like to play, please reach out to me via email or follow the instructions for local setup on the GitHub repos).
                                <br/>
                                GitHub repositories:
                                <br/>
                                Frontend: <a href="https://github.com/Sahlar7/24ko-frontend">https://github.com/Sahlar7/24ko-frontend</a>
                                <br/>
                                Backend: <a href="https://github.com/Sahlar7/24ko-backend">https://github.com/Sahlar7/24ko-backend</a>
                            </p>
                        </Col>
                        <Col>
                            <Image src={require("../images/24kologo.png")} fluid style={{paddingLeft: 60}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br/>
            <br/>
            <Container>
                <h2>Features & Technologies</h2>
                <ul>
                    <li>ReactJS frontend, NodeJS backend/Express server</li>
                    <li>Lobby based multiplayer via socket.io</li>
                    <li>Simple game context system to minimize requests between client and server</li>
                    <li>Tailwind CSS styling, lucide-react icons</li>
                    <li>Real time 24 game card generation and validation</li>
                    <li>Inspired by the classic 24 math game but with an arcade twist</li>
                </ul>
            </Container>
            </body>
        </>
    );
};
export default KOPage;