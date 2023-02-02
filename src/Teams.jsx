import { useContext } from "react";
import DataContext from "./context/Context";

const Teams = () => {
  const { selectedTeam, handleTeamChange } = useContext(DataContext);
  return (
    <select
      className="form-select form-select-lg"
      aria-label="Default select example"
      value={selectedTeam}
      onChange={handleTeamChange}
    >
      <option value="TeamA">Team A</option>
      <option value="TeamB">Team B</option>
      <option value="TeamC">Team C</option>
      <option value="TeamD">Team D</option>
    </select>
  );
};

export default Teams;
