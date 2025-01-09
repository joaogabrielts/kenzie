import { ITeacher } from "../../App"

interface ITeacherCardProps{
    teacher:ITeacher;
}

export const TeacherCard = ({teacher} : ITeacherCardProps) => {
    return(
        <li>
            <h3>{teacher.name}</h3>
            <p>{teacher.job} - {teacher.module}</p>
        </li>
    )
}