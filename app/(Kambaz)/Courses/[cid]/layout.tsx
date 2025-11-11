import { ReactNode } from "react";
import { courses } from "../../Database";
import CoursesClient from "./CoursesClient";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

  return (
    <CoursesClient cid={cid} course={course}>
      {children}
    </CoursesClient>
  );
}
