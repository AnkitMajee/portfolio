const mongooes = require('mongoose');

const introSchema = new mongooes.Schema({
    welcomeText : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
});

const aboutSchema = new mongooes.Schema({
    lottieURL:{
        type: String,
        required: true
    },
    description1:{
        type: String,
        required: true
    },
    description2:{
        type: String,
        required: true
    },
    skills:{
        type: Array,
        required: true
    }
});

const experienceSchema = new mongooes.Schema({
    title :{
        type:String,
        required:true,
    },
    period :{
        type:String,
        required:true,
    },
    company :{
        type:String,
        required:true,
    },
    description :{
        type:String,
        required:true,
    }
});

const projectsSchema = new mongooes.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
    },
});

const coursesSchema = new mongooes.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const contactSchema = new mongooes.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: Array,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    address: {
        type: Array,
        required: true,
    },
});

module.exports={
    Intro : mongooes.model("intros",introSchema),
    About : mongooes.model("abouts",aboutSchema),
    Experience : mongooes.model("experience",experienceSchema),
    Project: mongooes.model("projects", projectsSchema),
    Course: mongooes.model("courses", coursesSchema),
    Contact: mongooes.model("contacts", contactSchema),
};