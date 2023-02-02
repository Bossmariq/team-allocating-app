import { useContext } from "react";
import DataContext from "./context/Context";

export default function Header() {
  const { selectedTeam, employees } = useContext(DataContext);

  const teamMemberCount = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;

  return (
    <header className=" bg-light">
      <div className="row container  mx-auto justify-content-center mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>
            {selectedTeam} has {teamMemberCount}{" "}
            {teamMemberCount === 1 ? "Member" : "Members"}
          </h3>
        </div>
      </div>
    </header>
  );
}
