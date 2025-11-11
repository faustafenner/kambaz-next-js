"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";

type Props = {
  cid: string;
  course?: { _id: string; name?: string } | undefined;
  children: ReactNode;
};

export default function CoursesClient({ cid, course, children }: Props) {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <div id="wd-courses">
      <div id="wd-home">
        <h2 className="text-danger d-flex align-items-center">
          <FaAlignJustify
            className="me-4 fs-4 mb-1"
            style={{ cursor: "pointer" }}
            onClick={() => setIsNavVisible((v) => !v)}
            aria-label="Toggle course navigation"
            role="button"
          />
          {course?.name}
        </h2>
        <hr />
        <div className="d-flex">
          <div
            className={isNavVisible ? "d-block d-md-block me-3" : "d-none me-3"}
          >
            <CourseNavigation cid={cid} />
          </div>
          <div className="flex-fill">{children}</div>
        </div>
      </div>
    </div>
  );
}
