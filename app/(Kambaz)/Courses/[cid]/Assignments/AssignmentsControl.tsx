import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

export default function AssignmentsControl() {
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

      <Button
        variant="danger"
        size="lg"
        className="d-flex align-items-center gap-2"
      >
        <FaPlus />
        Assignment
      </Button>
    </div>
  );
}
