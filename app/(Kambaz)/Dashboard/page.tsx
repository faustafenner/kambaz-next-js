import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234/Home"
                className="text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/react.png" height={160} />
                <CardBody>
                  <CardTitle>CS1234 React JS</CardTitle>
                  <CardText>Full Stack software developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/2134"
                className="text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/algo.png" height={160} />
                <CardBody>
                  <CardTitle>ECE2134 Algorithms</CardTitle>
                  <CardText>Learn basic computing algorithms</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/2345"
                className="text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/art.png" height={160} />
                <CardBody>
                  <CardTitle>CAMD2345 Painting</CardTitle>
                  <CardText>Painting, Color, and Composition</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1111"
                className="text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/engineering.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle>ECE1111 Cornerstone of Engineering</CardTitle>
                  <CardText>Basic Engineering Concepts</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/3456"
                className="text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/history.png" height={160} />
                <CardBody>
                  <CardTitle>HIS3456 History</CardTitle>
                  <CardText>Intro to World History</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5678"
                className="text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/math.png" height={160} />
                <CardBody>
                  <CardTitle>MA5678 Math</CardTitle>
                  <CardText>Intro to Calculus</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1456"
                className="text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/music.png" height={160} />
                <CardBody>
                  <CardTitle>MS1456 Music</CardTitle>
                  <CardText>Beginner Guitar</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
