import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.png" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/algo.png" width={200} height={150} />
            <div>
              <h5> ECE2134 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Learn basic computing algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/art.png" width={200} height={150} />
            <div>
              <h5> CAMD1234 Painting </h5>
              <p className="wd-dashboard-course-title">
                Painting, Color, and Composition
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/engineering.png" width={200} height={150} />
            <div>
              <h5> ECE1111 Cornerstone of Engineering </h5>
              <p className="wd-dashboard-course-title">
                Basic Engineering Concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/history.png" width={200} height={150} />
            <div>
              <h5> HIS1234 History </h5>
              <p className="wd-dashboard-course-title">
                Intro to World History
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/math.png" width={200} height={150} />
            <div>
              <h5> MA2345 Math </h5>
              <p className="wd-dashboard-course-title">
                Intro to Calculus
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/music.png" width={200} height={150} />
            <div>
              <h5> MS1456 Music </h5>
              <p className="wd-dashboard-course-title">
                Beginner Guitar
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
);}
