"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CourseNavigation({ cid = "1234" }: { cid?: string }) {
  const pathname = usePathname();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <ListGroup id="wd-courses-navigation" className="wd fs-5 rounded-0">
      {links.map((label) => {
        const href = `/Courses/${encodeURIComponent(cid)}/${label}`;
        const primary = label.toLowerCase();
        const segments = pathname.split("/");
        const activeSegment = (segments[2] || "home").toLowerCase();
        const isActive = primary === activeSegment;
        const className = `list-group-item border-0 ${
          isActive ? "active" : "text-danger"
        }`;

        return (
          <ListGroupItem
            key={label}
            as={Link}
            href={href}
            id={`wd-course-${label.toLowerCase()}-link`}
            className={className}
          >
            {label}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
