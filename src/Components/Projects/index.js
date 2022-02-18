import React from "react";
import { Col, Row, Container } from "../Grid";
import ProjectItem from "../ProjectItem";

const projectItems = [ 
{
        title: "Taco Tavern",
        description: "Group project full stack app that can be used to order food from restaurants, create an account, view business data",
        image: "images/tacotavern.png",
        repoURL: "https://github.com/drewml08/Taco-Tavern",
        webURL: "https://www.taco-tavern.com/"
},
{
    title: "Recipe-Gram",
    description: "Group project to develop a full stack web app that can be used to view, post, and store recipes.",
    image: "images/Recipe-Gram.png",
    repoURL: "https://github.com/drewml08/Recipe-Gram",
    webURL: "https://recipe-gram-best-team.herokuapp.com/"
},
{
    title: "Budget Tracker",
    description: "The assignment was to create a progessive web app that allowed a user to create a budget to track deposits and withdrawals, as well as being able to do this offline as well as online. Starter code was provided, largely front end was added with a few back end adjustments. Technologies used were MongoDB, indexedDB, Mongoose schema and Express.",
    image: "images/budget_tracker.png",
    repoURL: "https://github.com/drewml08/Week18-hw",
    webURL: "https://week18-hw-budget-tracker.herokuapp.com/"
},
{
    title: "Fitness Tracker",
    description: "The assignment was to create an app that allowed a user to create and track daily workouts as well as add new exercises to existing workouts. Front end starter code was provided, back end was completed using MongoDB, Mongoose schema and Express.",
    image: "images/fitness_tracker.png",
    repoURL: "https://github.com/drewml08/Week17-hw",
    webURL: "https://uncc-week17hw.herokuapp.com/"
},
{
    title: "Professional README Generator",
    description: "This assignment was to create a program that generated a professional README file that developers could use for GitHub projects.",
    image: "images/readme_gen.gif",
    repoURL: "https://github.com/drewml08/Week9-hw",
    webURL: ""
},
{
    title: "Workday Scheduler",
    description: "Homework assignment to demonstrate the use of Bootstrap, Javascript and Local Storage to implement a work day scheduler.",
    image: "images/project_scheduler.png",
    repoURL: "https://github.com/drewml08/Week5-hw",
    webURL: "https://drewml08.github.io/Week4-hw/"
    
    
},
{
    title: "Coding Quiz",
    description: "Homework assignment to implement an interactive, timed, coding quiz. Highscores are saved between sessions using Local Storage.",
    image: "images/project_quiz.png",    
    repoURL: "https://github.com/drewml08/Week4-hw",
    webURL: "https://drewml08.github.io/Week4-hw/"
}
]

const Projects = () => {
    return (
   
            <Col size="md-12">
                <h1>Portfolio</h1>
                Listed below are some samples of my work including class group projects, homework assignments, and side hobby projects.
                <br/>
                <ProjectItem items={projectItems} />
            </Col>
        
        
   
    );
};

export default Projects;