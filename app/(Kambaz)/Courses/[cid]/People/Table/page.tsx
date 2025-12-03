/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import PeopleDetails from "../Details";
import { useParams } from "next/navigation";
import * as coursesClient from "../../../client";

export default function PeopleTable({
  users: propUsers,
  fetchUsers: propFetchUsers,
}: {
  users?: any[];
  fetchUsers?: () => void;
} = {}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const rawCid = (params as any).cid;
  const cid = Array.isArray(rawCid) ? rawCid[0] : rawCid;

  const fetchEnrolledUsers = async () => {
    try {
      const enrolledUsers = await coursesClient.findUsersForCourse(cid);
      setUsers(enrolledUsers);
    } catch (error) {
      console.error("Error fetching enrolled users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If users are passed as props, use them (Account/Users page)
    if (propUsers !== undefined) {
      setUsers(propUsers);
      setLoading(false);
    }
    // Otherwise fetch enrolled users for this course (Course People page)
    else if (cid) {
      fetchEnrolledUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid, propUsers]);

  if (loading) {
    return <div>Loading enrolled students...</div>;
  }

  const handleFetchUsers = propFetchUsers || fetchEnrolledUsers;

  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            handleFetchUsers();
          }}
        />
      )}

      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span
                  className="text-decoration-none"
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name text-danger">
                    {user.firstName}
                  </span>
                  <span className="wd-last-name text-danger">
                    {user.lastName}
                  </span>
                </span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
