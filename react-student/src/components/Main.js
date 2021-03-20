import React, { Component } from 'react';

import Details from '../components/Details';
import { STUDENTS } from '../constants/students';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: STUDENTS,
            currStudentId: 0,
        };

        this.selectStudent = this.selectStudent.bind(this);
    }

    selectStudent(id) {
        this.setState(() => ({
            currStudentId: id
        }));
    }

    render() {
        const StudentsList = () => {
            return (
                <>
                    {
                        this.state.students.map((student) =>
                            <p key={student.id}>
                                <a onClick={this.selectStudent.bind(this, student.id)}>
                                    {student.fullName}
                                </a>
                                &nbsp;
                                {student.group}
                            </p>
                        )
                    }
                </>
            );
        };

        const CurrentStudent = ({ studentId }) => {
            return (
                <Details student={this.state.students.find(student => student.id === studentId)} />
            );
        };

        return (
            <>
                <StudentsList />
                <CurrentStudent studentId={this.state.currStudentId} />
            </>
        );
    }
}

export default Main;