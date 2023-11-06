import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg11 from "../assets/img/11.png";
import projImg22 from "../assets/img/22.png";
import projImg33 from "../assets/img/33.png";
import projImg111 from "../assets/img/111.png";
import projImg222 from "../assets/img/222.png";
import projImg333 from "../assets/img/333.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Евгений Жиленков",
      description: "Team Lead",
      imgUrl: projImg1,
    },
    {
      title: "Денис Ефимов",
      description: "Team Lead",
      imgUrl: projImg2,
    },
    {
      title: "Марина Шлыкова",
      description: "Team Lead",
      imgUrl: projImg3,
    },
    {
      title: "Максим Титов",
      description: "Team Lead",
      imgUrl: projImg1,
    },
    {
      title: "Дмитрий Ханюков",
      description: "Team Lead",
      imgUrl: projImg2,
    },
    {
      title: "Мария Шелякина",
      description: "Team Lead",
      imgUrl: projImg3,
    },
    {
      title: "Олег Можевитин",
      description: "Team Lead",
      imgUrl: projImg2,
    },
  ];
  const projects2 = [
    {
      title: "New Year 2023",
      // description: "Team Lead",
      imgUrl: projImg11,
    },
    {
      title: "New Year 2023",
      // description: "Team Lead",
      imgUrl: projImg22,
    },
    {
      title: "New Year 2023",
      // description: "Team Lead",
      imgUrl: projImg33,
    },
  ];
  const projects3 = [
    {
      title: "New Year 2023",
      description: "Team Lead",
      imgUrl: projImg111,
    },
    {
      title: "New Year 2023",
      description: "Team Lead",
      imgUrl: projImg222,
    },
    {
      title: "New Year 2023",
      description: "Team Lead",
      imgUrl: projImg333,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Company</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>TeamLeads of Company</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>How We Celebrate</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Weekends</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='colorSharp2'></img>
    </section>
  )
}

export default Projects