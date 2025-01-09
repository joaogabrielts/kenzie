import { ITeacher } from "../../App";
import { TeacherCard } from "../TeacherCard";

interface ITeacherListProps {
  teacherList: ITeacher[];
}

export const TeacherList = ({ teacherList }: ITeacherListProps) => {
  return (
    <ul>
      {teacherList.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </ul>
  );
};
