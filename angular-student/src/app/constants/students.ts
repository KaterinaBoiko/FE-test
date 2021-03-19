import { Group } from "../shared/groups-enum";
import { Student } from "../shared/student";

export const STUDENTS: Student[] = [
    {
        id: 0,
        fullName: 'Андрющенко Максим Васильович',
        group: Group.IT71,
        subjects: [
            {
                title: 'Компоненти програмної інженерії',
                mark: 90
            },
            {
                title: 'Безпека життєдіяльності',
                mark: 95
            },
        ]
    },
    {
        id: 1,
        fullName: 'Радченко Вадим Юрійович',
        group: Group.IT73,
        subjects: [
            {
                title: 'Компоненти програмної інженерії',
                mark: 65
            },
            {
                title: 'Безпека життєдіяльності',
                mark: 100
            },
        ]
    },
    {
        id: 2,
        fullName: 'Василишина Олена Ігорівна',
        group: Group.IT71,
        subjects: [
            {
                title: 'Компоненти програмної інженерії',
                mark: 100
            },
            {
                title: 'Безпека життєдіяльності',
                mark: 100
            },
        ]
    }
];