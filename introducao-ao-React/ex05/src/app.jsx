 function app() {
    console.log('oi');
    //javaScript
    const teacher = {
        name: "Alex",
        job: "instrutot React",
        budget: 1500,
    }

    const saveTeacher = (teacher) => {
        console.log(teacher);
    }

    //JSX
    return (
        <div className="App">
            <li>
                <h2>
                    {teacher.name}
                </h2>

                <span>cargo {teacher.job}</span>
                <span>Salario: {teacher.budget}</span>

            <button onClick={saveTeacher}>Salvar professor</button>
            <button onClick={() => saveTeacher(teacher)}>salvar professor </button>
            </li>
        </div>
    )
} 

export default app

