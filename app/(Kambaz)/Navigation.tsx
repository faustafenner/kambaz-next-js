"use client";
import { usePathname } from "next/navigation";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { GoBeaker } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { FaCalendarDays } from "react-icons/fa6";
import { BsInboxFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { SiAirplayvideo } from "react-icons/si";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBook } from "react-icons/fa";

import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid },
    { label: "Labs", path: "/Labs", icon: GoBeaker },
    { label: "Groups", path: "/Groups", icon: SlPeople },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "History", path: "/History", icon: BsClockHistory },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 115 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Account"
        className={`text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroupItem>

      {links.map((link) => (
        <ListGroupItem
          key={link.path}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroupItem>
      ))}

      <ListGroupItem
        as={Link}
        href="/Dashboard"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Dashboard")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <AiOutlineDashboard
          className={`fs-1 ${
            pathname.includes("Dashboard") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Dashboard
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Courses")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <FaBook
          className={`fs-1 ${
            pathname.includes("Courses") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Courses
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Labs"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Labs")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <GoBeaker
          className={`fs-1 ${
            pathname.includes("Labs") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Labs
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Groups"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Groups")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <SlPeople
          className={`fs-1 ${
            pathname.includes("Groups") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Groups
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Calendar"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Calendar")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <FaCalendarDays
          className={`fs-1 ${
            pathname.includes("Calendar") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Calendar
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Inbox"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Inbox")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <BsInboxFill
          className={`fs-1 ${
            pathname.includes("Inbox") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Inbox
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/History"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("History")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <BsClockHistory
          className={`fs-1 ${
            pathname.includes("History") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        History
      </ListGroupItem>
    </ListGroup>
  );
}
