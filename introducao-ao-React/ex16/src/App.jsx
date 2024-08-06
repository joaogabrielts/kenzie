import { EmployeeList } from "./components/EmployeeList";


function App() {
  const employeeList = [
    {
       id: 1,
       name: "Alex",
       job: "Instrutor React",
    },
    {
       id: 2,
       name: "Gabriel",
       job: "Instrutor React e Node",
    },
    {
       id: 3,
       name: "Raphael",
       job: "Instrutor React e Django",
    },
 ];

 return(
  <div>
    <EmployeeList employeeList={employeeList}/>
  </div>
 )
}

export default App
