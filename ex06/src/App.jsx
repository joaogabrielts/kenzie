function App() {

  //javaScript
  const teacher = {
    name: 'alex',
    job: 'instrutor React',
    budget: 1500,
  }

 const saveTeacher = (teacher) => {
  console.log(teacher);
 }

 //jsx
 return (
  <div className="App">
    <li>
      <h2>{teacher.name}</h2>

      <span>Cargo: {teacher.job}</span>
      
      <span>Salario: {teacher.budget}</span>

      <button onClick={saveTeacher}>Salvar professor</button>
      <button onClick={() => saveTeacher(teacher)}>salavar professor</button>
    </li>
  </div>
 )


}

export default App