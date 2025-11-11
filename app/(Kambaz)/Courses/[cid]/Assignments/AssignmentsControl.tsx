/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function AssignmentsControl({ cid }: { cid?: string }) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as any
  );
  const role = (currentUser as any)?.role;
  return (
    <div className="d-flex gap-2 mb-3 justify-content-between align-items-center">
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>
        <FormControl placeholder="Search..." />
      </InputGroup>

      <Button
        variant="secondary"
        size="lg"
        className="d-flex align-items-center gap-2"
      >
        <FaPlus />
        Group
      </Button>

      {role && (role === "FACULTY" || role === "ADMIN") ? (
        <Link
          href={`/Courses/${encodeURIComponent(
            String(cid || "")
          )}/Assignments/new`}
          className="btn btn-danger d-flex align-items-center gap-2 btn-lg"
        >
          <FaPlus />
          Assignment
        </Link>
      ) : (
        <Button
          variant="danger"
          size="lg"
          className="d-flex align-items-center gap-2"
        >
          <FaPlus />
          Assignment
        </Button>
      )}
    </div>
  );
}
