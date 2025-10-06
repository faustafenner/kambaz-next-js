"use client";
import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="m-4">
      <h3 className="mb-4">Profile</h3>

      <Form>
        <Form.Control
          type="text"
          defaultValue="alice"
          placeholder="Username"
          className="mb-2"
        />

        <Form.Control
          type="password"
          defaultValue="123"
          placeholder="Password"
          className="mb-2"
        />

        <Form.Control
          type="text"
          defaultValue="Alice"
          placeholder="First Name"
          className="mb-2"
        />

        <Form.Control
          type="text"
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="mb-2"
        />

        <Form.Control type="date" defaultValue="2000-01-01" className="mb-2" />

        <Form.Control
          type="email"
          defaultValue="alice@wonderland"
          placeholder="Email"
          className="mb-2"
        />

        <Form.Select defaultValue="FACULTY" className="mb-4">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>

        <Link
          id="wd-signout-btn"
          href="/Account/Signin"
          className="btn btn-danger w-100 mb-2"
        >
          Sign Out
        </Link>
      </Form>
    </div>
  );
}
