import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keeper from "../../Assets/Projects/keeper.jpeg";
import motiondetector from "../../Assets/Projects/motiondetector.jpeg"
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import mytodo from "../../Assets/Projects/mytodo.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              ghLink="https://github.com/soumyajit4419/Chatify"
              //deomolink
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DUTY MUNSHI"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="IN NEED"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
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
              demoLink =" https://rishabhsharawat15-my-todo-web-stzzj2.streamlit.app/"
             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
