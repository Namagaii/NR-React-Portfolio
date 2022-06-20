import notetaker from '../img/NoteTaker.png';
import projectone from '../img/ProjectOne.png';
import projectthree from '../img/ProjectThree.png';
import projecttwo from '../img/ProjectTwo.jpg';
import placeholder from '../img/288792301.jpg';

const data = [
    {
        moduleSprite: placeholder,
        mainImg: notetaker,
        imgs: [],
        link: "https://nr-notetaker.herokuapp.com/",
        title:"Note Taker",
        shortDescription: "A website that allows you to take notes that save on a server.",
        description: "Note-Taker is a website that allows you to save and delete notes for yourself that you can go back to the site and reference. The site also doubles a psuedo forum that anyone can post to and delete from and can be pretty enjoyable to mess around with."
    },
    {
        moduleSprite: placeholder,
        mainImg: projectone,
        imgs: [],
        link: "",
        title:"Everyone's-A-Critic",
        shortDescription: "A project I worked on in a group that lets you search for movies and find nytimes reviews about them.",
        description: "Everyone's a Critic is a website that movie enthusiasts or the average movie-goer can visit to find reviews about a number of movies they are interested. By asking the user to input the movie title and the year (if they choose) they will be populated with movie results matching their criteria."
    },
    {
        moduleSprite: placeholder,
        mainImg: projectthree,
        imgs: [],
        link: "",
        title:"Quiz Creator",
        shortDescription: "Another project I worked on in a group that allows you to create and take quizzes.",
        description: "Quiz-Creator is the place for all quiz lovers to find quizzes and take them! With a variety of quizzes, users can find anything that peaks their interest and test their scores among other users! Quiz-Creator uses both front and back end technologies to create a user friendly application."
    },
    {
        moduleSprite: placeholder,
        mainImg: projecttwo,
        imgs: [],
        link: "https://review-core.herokuapp.com/index.html",
        title:"Review Core",
        shortDescription: "A website I made in a group that lets you write reviews for video games and comment on those reviews.",
        description: "Review Core is an application that allows the user to upon reaching the front page either Create a User id or Login. Then Shows the user the option to either Create or View Reviews that were previously created by that user or other users. Along with Comments attached to those reviews from users. The users has the option to Select from a list of games to choose which they would like to make a review on, then give a description of their review and a rating from 1-5. Then by clicking submit have that review show on the front page where others can see it."
    },
]

export default data;