import { PersonCard } from "./components/PersonCard"
import { Input } from "./fragments/input"


function App() {


  return (
  
    <div className="App">
       <PersonCard name={'gabriel'} surname={'Teixeira'} age={19}/>
       <PersonCard name={'joão'} surname={'Teixeira'} age={20}/>
       <Input type='text' label='nome:' id='name' />
       <Input type='email' label='Email:' id='email' />
       <Input type='password' label='senha:' id='password' />
    </div>
    
    
  )
}

export default App
