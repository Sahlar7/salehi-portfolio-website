import Container from "react-bootstrap/Container";
import {Col, Row, Carousel, Image} from "react-bootstrap";
import Navigation from "../components/Navigation";

function DocagentPage(){
    return(
        <>
            <Navigation/>
            <body className="main">
            <h1 className="project-header">DocAgent: Agentic Google Docs Research & Editing Assistant</h1>
            <p className="project-subtext">Spring 2025</p>
            <div>
                <Container>
                    <Row> 
                        <Col>
                            <p>
                                This project was completed for the UVA CS 4501: Generative AI Foundation and Application Overviews 
                                course. The goal of this project was to create a chat interface agent which could write directly to 
                                Google Docs, also integrating research tools to help users synthesize information from multiple sources 
                                into their writing. This leverages the power of LLMs in the writing space while also simplifying the AI assisted writing 
                                process by allowing the LLM to write directly into the document which the user can also edit, ultimately reducing the amount of 
                                back and forth between the user and the LLM. DocAgent also integrates citations in a user specified format into the document, maintaining 
                                the list of citations across updates.
                                
                            </p>
                            <p>
                                The application is currently a command line interface which features a chat loop between the user and the agent.
                                The agent was built using LangChain ReAct agent and powered by Gemini Flash 2.0. The agent has access to a SerpAPI 
                                research tool to search the web for information, which it can integrate into its writing. The agent then generates an 
                                updated text based on the original document, maintaining original text as necessary while also incorporating udpates based on the users prompt. 
                                Upon the user's approval, the agent sends a Google Docs API request to update the document with the new text via Google Cloud Service. 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="project-video">
                <Image width="800" height="500" src={require("../images/docagent_flow.png")}/>
                <br/>
                <span>DocAgent Workflow Diagram</span>
            </div>
            <div className="project-video">
                <Carousel style={{paddingTop: 20}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/docagent_systemprompt.png")}
                            alt="First slide"
                        />
                        <div className="carousel_caption">
                            <h3>DocAgent System Prompt</h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/docagent_generatequery.png")}
                            alt="Second slide"
                        />
                        <br/>
                        <div className="carousel_caption">
                            <h3>DocAgent Search Thought</h3>
                            <p>DocAgent, during its thought, chooses the search tool as its action and provides a query as the action input</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/DocAgent_searchoutput.png")}
                            alt="Third slide"
                        />
                        <div className="carousel_caption">
                            <h3>DocAgent Search Result</h3>
                            <p>DocAgent outputs the results of its web search including citations </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/docagent_finaloutput.png")}
                            alt="Fourth slide"
                        />
                        <div className="carousel_caption">
                            <h3>DocAgent Generates Final Output</h3>
                            <p>DocAgent generates the final output as an action input, making that output usable to be sent to the Google Doc via API request</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br/>
            <Container>
                <h2>Contributions</h2>
                <ul>
                    <li>Designed the agentic system behind DocAgent, including defining the search tool, and creating the system prompt/prompt template</li>
                    <li>Created the chat interface in which the user interacts with DocAgent</li>
                    <li>Implemented the Google Docs API/Google Cloud Service to allow DocAgent to write directly to the document</li>
                </ul>
            </Container>
            </body>
        </>
    );
}
export default DocagentPage;