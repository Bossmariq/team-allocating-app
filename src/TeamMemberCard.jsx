import { useContext } from "react";
import DataContext from "./context/Context";

const TeamMemberCard = ({ employee }) => {
  const { handleCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div
      id={employee.id}
      key={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
    >
      <img
        src={require(`./images/agent${employee.id}.jpg`)}
        className="card-img-top"
        alt={employee.image}
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
