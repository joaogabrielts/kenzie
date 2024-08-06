
function App() {
const person = {
  name: 'Alex',
  module: 'M3',
  age: 33,
};

const alertName = () => {
  alert(person.name)
} 

  return (
   <>
   <li>
    <h3>
      {person.name} - {person.module}
    </h3>
    <p>tenho: {person.age} anos</p>
    <button onClick={alertName}> Quem sou eu?</button>
   </li>
   </>
  )
}

export default App
