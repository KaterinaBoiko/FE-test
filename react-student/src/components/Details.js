import React, { Component } from 'react';

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student: props.student
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const { name, value } = evt.target;
        this.state.student[ name ] = value;
        this.setState({
            student: this.state.student
        });
    }

    render() {
        const SubjectsList = () => {
            return (
                <>
                    <p>Список предметів:</p>
                    {
                        this.state.student.subjects.map((subject) =>
                            <p key={subject.title}>
                                {subject.title} - {subject.mark}
                            </p>
                        )
                    }
                </>
            );
        };

        return (
            <>
                <p>Деталі студента:</p>
                <form>
                    <p>
                        <label>
                            Ім'я:
                        <input
                                type="text"
                                name="fullName"
                                value={this.state.student.fullName}
                                onChange={this.handleChange.bind(this)}
                            />
                        </label>
                    </p>

                    <p>
                        <label>
                            Група:
                        <input
                                type="text"
                                name="group"
                                value={this.state.student.group}
                                onChange={this.handleChange.bind(this)}
                            />
                        </label>
                    </p>
                </form>
                <SubjectsList />
            </>
        );
    }
}

export default Details;