import { useState } from "react";


function App() {
  /*
const [numberList, setNumberList] = useState([1,2,3])

const total = numberList.reduce((preveValue,number) => {
   return preveValue + number
},0 )

console.log(total);

const addNumber = () => {
  setNumberList([...numberList, 4])
}
*/

  const [teacherList, setTeacherList] = useState([
    {
      name: 'alex',
      job: 'instrutor React',
      budget: 7000,
    }
  ])

const javascriptTeachers = teacherList.filter(teacher => teacher.job === 'instrutor javascript'.toLocaleLowerCase())

console.log('-- TEACHER LIST --');

console.log(teacherList);

console.log('-- javascriptTeachers --');

console.log(javascriptTeachers);


  const addTeacher = () => {
    setTeacherList([...teacherList, { name: 'caique', job: 'instrutor JavaScript'.toLocaleLowerCase(), budget: 7000 }])
  }
  return (
    <>

      <button onClick={addTeacher}> Adicioar número</button>
    </>
  )
}

export default App
