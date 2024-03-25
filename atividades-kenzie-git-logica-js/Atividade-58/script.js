const departmentList = [
    {
      departmentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: false
    },
    {
      departmentName: 'Capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
  ]


function howManyDepartments (){
    let quantidadeDeDepartamento = 0
      departmentList
    for(let i = 0; i < departmentList.length; i++){
      if(departmentList[i].departmentName){
        quantidadeDeDepartamento++
      }
    }
    return quantidadeDeDepartamento
}
console.log(howManyDepartments());

function changeDepartmentName1 (nomeAtual,novoNome){
    let novoObjeto = []
    departmentList
    for(let i = 0; i < departmentList.length; i++ ){
      if(departmentList[i].departmentName.toLowerCase() === nomeAtual.toLowerCase()){
         departmentList[i].departmentName = novoNome
        novoObjeto.push(departmentList[i])
        return novoObjeto
      }
    } 
    return "Department not found."
    
}
 //console.log(changeDepartmentName1('Capitation', 'it')); 

 function  giveTheDepartmentABreak(){
  let novoObjeto = []
  departmentList
  for(let i = 0; i < departmentList.length; i++){
    if(departmentList[i].working === true){
      departmentList[i].working = false
       novoObjeto.push(departmentList[i])
    } else if(departmentList[i].working !== true){
         departmentList[i].working = true
        novoObjeto.push(departmentList[i])
        
    }
  }
  return novoObjeto
 }
//console.log(giveTheDepartmentABreak());





function  howManyEmployeesInDepartment (departento){
  let funcionarioTotal = []
  departmentList
  for(let i = 0; i < departmentList.length; i++){
     if(departmentList[i].departmentName === departento){
      for(let j = 0; j < departmentList[i].employees.length; i++ ){
        if(departmentList[i].employees[j].name){
       funcionarioTotal.push(departmentList[i].employees[j])
        } 
      }
      return funcionarioTotal
     }
  }   
  return  "Departament not found"    
}
//console.log( howManyEmployeesInDepartment('Expedition')); 





function  howManyEmployeesInDepartment2 (departento){
  let funcionarioTotal2 = 0
  departmentList
   for(let i = 0; i < departmentList.length; i++){
    for(let j = 0; j < departmentList[i].employees.length; j++){
      if(departmentList[i].departmentName.toLowerCase() === departento.toLowerCase()){
        funcionarioTotal2++
      }
    }
   } 
   return funcionarioTotal2
    } 
    console.log(howManyEmployeesInDepartment2(''));


    let pessoa = {
      name:'gabriel',
      age: 25,
      responsibility:'Programador de JavaScript',
      salary: 5000
    }
    console.log(departmentList);
 function insertNewEmployeeInDepartment(departamento,pessoa ) {
  departmentList
  for(let i = 0; i < departmentList.length; i++){
    for(let j = 0; j < departmentList[i].employees.length; j++){
      if(departmentList[i].departmentName.toLowerCase() === departamento.toLowerCase()){
        departmentList[i].employees.push(pessoa)
         return departmentList
      }
    }
      
  }
 return  "Department not found"
 }
 console.log(insertNewEmployeeInDepartment('Financial', pessoa)); 
 console.log(departmentList);

     
