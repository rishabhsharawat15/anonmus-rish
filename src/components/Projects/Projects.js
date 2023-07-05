import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keeper from "../../Assets/Projects/keeper.jpeg";
import motiondetector from "../../Assets/Projects/motiondetector.jpeg";
import INNEED from "../../Assets/Projects/INNEED.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import mytodo from "../../Assets/Projects/mytodo.jpeg";
import duty from "../../Assets/Projects/duty.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatbot (currently working)"
              description="This Python-based chatbot is a versatile and interactive conversational AI system designed to facilitate seamless communication with users. Built using natural language processing techniques, the chatbot leverages an intent file to adapt its responses to different user inputs. This intent file acts as a repository, containing predefined user intents and corresponding responses, enabling the chatbot to accurately comprehend user queries and provide contextually relevant answers"
              ghLink="https://github.com/rishabhsharawat15/chatbot"
              //deomolink
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={duty}
              isBlog={false}
              title="DUTY MUNSHI"
              description="The major objective behind building this web app is to make life of officer easy.Can easily check all the officer working in the region by simply selecting the regionIt will help them to see all the thana in their region.An interface to schedule themselves without depending on munshi and middle man to schedule their duty"
              ghLink="https://github.com/rishabhsharawat15/DUTY-MUNSHI-JS/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={INNEED}
              isBlog={false}
              title="IN NEED"
              description="INNEED is an ecommerce website that aims to provide products to people in need at the lowest cost possible. They achieve this by selling products that are close to their expiration date but have not yet expired. By doing so, INNEED reduces food waste and offers affordable options to consumers."
              ghLink="https://github.com/rishabhsharawat15/INNEED"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motiondetector}
              isBlog={false}
              title="Motion detection"
              description="Introduction Motion detection using Python is easy because of the multiple open-source libraries provided by the Python programming language which detect even slight motion in the frame and highlight it with green rectangle frame and the time the object entered and the time, it exited the frame is recorded and using bokeh library of python and python compatibility with other languages make it possible for to plot with html. For example, it can be used for invigilation in online exams or for security purposes in stores, banks, etc"
              ghLink="https://github.com/rishabhsharawat15/objectdetection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="KEEPER APP"
              description="Keeper is an innovative notepad-like application designed to help users organize and manage their notes efficiently. It provides a simple and intuitive interface for creating, editing, and organizing text-based notes, making it easier to keep track of important information"
              ghLink="https://github.com/rishabhsharawat15/KEEPER-APP"
              demoLink="https://fni4t6.csb.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytodo}
              isBlog={false}
              title="TO DO APP"
              description="To-do app is used to enhance productivity and efficiency by providing a centralized platform for capturing, organizing, and completing tasks.made todo using python/rect/ejs"
              ghLink="https://github.com/rishabhsharawat15/My-todo"
              demoLink=" https://rishabhsharawat15-my-todo-web-stzzj2.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
