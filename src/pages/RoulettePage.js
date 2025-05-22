import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navigation from "../components/Navigation";

function RoulettePage() {
    return(
        <>
            <Navigation/>
            <body className = "main">
            <h1 className="project-header">Roulette.FM</h1>
            <p className="project-subtext">Winter 2025</p>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <p>
                                Roulette.FM is a multiplayer music guessing game to get to know your friends and 
                                new music through each other's Spotify playlists. 
                            </p>
                            <p>
                                Players can create and join lobbies, and then play a guessing game consisting of several rounds.
                                In each round, a song is randomly selected from one of the player's Spotify playlists (at the moment selecting from liked songs). A short 
                                clip of the song is played and the players have to guess which player's playlist the song is from within a set duration.
                                Answer quickly to earn more points! The player with the most points at the end of the game wins.
                            </p>
                            <p>
                                You can play Roulette.FM at <a href="https://roulettefm.vercel.app/">https://roulettefm.vercel.app/</a> 
                                 (Note: the game is still in development so there may be some bugs, or the server may not be live, but feel free to check it out.
                                 If the server is not up and you would like to play, please reach out to me via email or try playing locally using the instructions on the GitHub).
                                <br/>
                                GitHub repository:
                                <a href="https://github.com/Sahlar7/RouletteFM"> https://github.com/Sahlar7/RouletteFM</a>
                            </p>
                        </Col>
                        <Col>
                            <Image src={require("../images/RouletteLogo.png")} fluid style={{paddingLeft: 60}}/>
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
                    <li>Spotify API for accessing and updating playlists</li>
                    <li>Spotify WebPlayback SDK to playback songs in real time</li>
                    <li>Roulette Recap: after the game is complete, you can create a Spotify playlist of all the songs played during the rounds of the game</li>
                    <li>Sleek UI design following the Spotify color scheme</li>
                    <li>Hosted on Vercel (frontend) and Heroku (server)</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default RoulettePage;