


import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importação correta
import { ITeacher } from "../../App";

interface ITeacherListFormProps {
  setTeacherList: React.Dispatch<React.SetStateAction<ITeacher[]>>;
}

export const TeacherListForm = ({ setTeacherList }: ITeacherListFormProps) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [courseModule, setCourseModule] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTeacher: ITeacher = {
      id: uuidv4(), // Geração de ID único
      name,
      job,
      module: courseModule,
    };
    setTeacherList((prevList) => [...prevList, newTeacher]);
    setName("");
    setJob("");
    setCourseModule("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Cargo"
        required
      />
      <input
        type="text"
        value={courseModule}
        onChange={(e) => setCourseModule(e.target.value)}
        placeholder="Módulo"
        required
      />
      <button type="submit">Cadastrar funcionário</button>
    </form>
  );
};


/*
import { FormEvent, useState } from "react";
import { uuid } from "uuidv4";
import { ITeacher } from "../../App";

interface ITeacherListFormProps {
  setTeacherList: React.Dispatch<React.SetStateAction<ITeacher[]>>;
}

export const TeacherListForm = ({ setTeacherList }: ITeacherListFormProps) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [courseModule, setCourseModule] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTeacher: ITeacher = {
      id: uuid(),
      name,
      job,
      module: courseModule,
    };
    setTeacherList((prevList) => [...prevList, newTeacher]);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <input
        type="text"
        value={courseModule}
        onChange={(e) => setCourseModule(e.target.value)}
      />
      <button>Cadastrar funcionário </button>
    </form>
  );
};
*/