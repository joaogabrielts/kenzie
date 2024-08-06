import { TeacherCard } from "./component/TeacherCard"

function App() {

const person = {
       name: 'Alex',
       courseModule: 'M3',
       age:33,
    
}


  return (
    <>
    
      <TeacherCard name={person.name} courseModule={person.courseModule} age={person.age}/>
    </>
  )
}

export default App
