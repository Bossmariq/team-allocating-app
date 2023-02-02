import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      image: 'agent1',
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      image: 'agent2',
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      image: 'agent3',
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      image: 'agent4',
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      image: 'agent5',
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      image: 'agent6',
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      image: 'agent7',
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      image: 'agent8',
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      image: 'agent9',
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      image: 'agent10',
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      image: 'agent11',
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      image: 'agent12',
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }]);

  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees))

  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))

  }, [selectedTeam]);

  const handleTeamChange = (e) => {
    setTeam(e.target.value);
  }

  const handleCardClick = (e) => {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee);

    setEmployees(transformedEmployees);
  }

  return <DataContext.Provider value={{ employees, selectedTeam, setTeam, handleTeamChange, handleCardClick }}>
    {children}
  </DataContext.Provider>

}

export default DataContext;