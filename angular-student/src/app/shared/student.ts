import { Group } from "./groups-enum";
import { Subject } from "./subject";

export class Student {
    id: number;
    fullName: string;
    group: Group;
    subjects: Subject[];
}