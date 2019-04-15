import React, { Component, Fragment } from "react";

import { Header, Footer } from "../Layouts";
import Exercises from "./Exercises";

import { muscles, exercises } from "../store";

export default class extends Component {
    state = {
        exercises,
        category: "shoulders"
    };

    getExercisesByMuscles() {
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise];
                return exercises;
            }, {})
        );
    }
    handleCategorySelected = category => {
        this.setState({
            category
        });
    };

    render() {
        const { category } = this.state;
        const exercises = this.getExercisesByMuscles();
        return (
            <Fragment>
                <Header />
                <Exercises exercises={exercises} />
                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelected}
                />
            </Fragment>
        );
    }
}
