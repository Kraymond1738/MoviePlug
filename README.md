# MoviePlug Web Application

<img src="/public/images/logoedited.png" alt="MoviePlug" title="MoviePlug">

MoviePlug is a redefined streaming service and recommendation web application that customizes cinematic content, makes it easy to discover, watch and share favorite movies.

## Table of content

- [The Story](#the-story)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Features](#features)
    - [Home Page](#Home-Page)
    - [Dashboard](#Dashboard)
    - [Movies and Shows](#Movies and Shows)
    - [Trailer](#Trailer)
    - [RapidAPI MovieSearch](#RapidAPI MovieSearch)
- [Built With](#built-with)
- [API](#api)
- [Future](#future)
- [Authors](#authors)
    - [Christian Donatus](#KrizTech)
    - [Kasumba Raymond](#Kraymond)
    - [Afolabi Seyi](#Afooseyi)
    - [Kwaku](#Brymo07)
- [Acknowledgments](#acknowledgements)

## The Story

First, We are inspired by the complex and excruciating processes of getting to find a movie of your choice to stream, be it alone, with friends or family. The search is over. Movieplug is a platform that makes it easy of anyone at anytime to access any movie of their choice generated by an AI or searched for manually. 

That is why we are Your surest MoviePlug!

A workspace was created on Trello which was utilized throughout in order to keep tasks and communication organized.
The javascript front end and the way the dashboard was designed, allowed MoviePlug to have more dynamic features and experience.

The RapidAPI was implemented to enable users search for movies by typing a keyword
We decided to use ORM and MySQL because of modularity and familiarity.

FrontEnd
* Javascript components
* HTML/CSS for consistent styling
* Calls to manipulate database
* Node.js

RapidAPI
* GET, POST, PUT requests handled.

Relational Database
* Handled with ORM (SQLAlchemy)
* Model system with base model handling identification
* Many to many relationship for users.

Server / Deployment
* Nginx / Gunicorn / Flask
* Ubuntu 20.04

## Getting Started

Access it on MoviePlug.com and create an account today!
* To explore features without logging in, check out [Features](#features)

## Screenshots

<img width=100% src="/public/images/Screenshot (46).png">

<img width=100% src="/public/images/Screenshot (35).png">

<img width=100% src="/public/images/Screenshot (34).png">

<img width=100% src="/public/images/Screenshot (44).png">

## Features

Movieplug has features that can be found through our dropdown navigation bar menu.

<img width=100% src="/public/images/Screenshot (26).png">

These features will be explored below!

<img width=50% src="/public/images/Screenshot (57).png">


### **Dashboard**

The dashboard webpage allows a user to choose from our catlogue of movies, change modes from light mod to dark mode, stream movies and so on.

<img width=100% src="/public/images/Screenshot (55).png">

<img width=100% src="/public/images/Screenshot (45).png">

<img width=100% src="/public/images/Screenshot (49).png">

### **Movies and Shows**

This page gives a view of all our offers.

<img width=100% src="/public/images/Screenshot (50).png">

### **Trailer**

This section shows the list of trailer movies available in cart.

<img width=100% src="/public/images/Screenshot (41).png">

### **RapidAPI MovieSearch**

This particular feature enables users to search for movies and results of movies are recommended and generated in-line with the inputed word.

<img width=75% src="/public/images/Screenshot (42).png">


## Built With
* [Python](http://www.python.org) - The Backend Language
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The Frontend Language
* [Html/css](https://www.codecademy.com/catalog/language/html-css) - Frontend Language
* [Flask](http://flask.pocoo.org/docs/1.0/) - The Web Development Framework
* [SQLAlchemy](https://www.sqlalchemy.org/) - Python SQL Toolkit and Object Relational Mapper
* [MySQL](https://mysql.com) - Relational Database Management System
* [Unittest](https://docs.python.org/3/library/unittest.html) - Unittesting Framework

## API

/api/user

/api/user/<user_id>/email

GET: Returns a user email
POST: Adds a user email

<img width=75% src="/public/images/rapid.jpg">

<img width=75% src="/public/images/rapid2.png">

<img width=75% src="/public/images/rapidservice.png">


## Future

There are plenty of features that we would love to implement into MoviePlug.
One of the MoviePlug standby mission is inclusivity, Making the platform accessible to everybody at anytime and anywhere. MoviePlug in future wil be adding subtitle opions, audio tracks, downloading features to the web app, where anyone can download movies easily. Making art and story telling accessible to all. In other to achieve this, It is recommended to use specialized APIs, equipped servers, frameworks and libraries to ensure a robust and secure implementation and experience.

If you have any suggestions or would like to contribute to MoviePlug, please contact either of us.

## Authors
### **Christian Donatus**
[Christian](https://KrizTech.github.io)

Christian (KrizTech) is a Frontend software engineer, working on the system design, interface, technical writing and taking charge of the styling and javascript portion of the web app while still partially involved in the backend database and debugging of bugs.

### **Kasumba Raymond**
[Kasumba](https://Kraymond1738.github.io)

Kazumba is a backend software engineer, working on the system backend, database, and RapidAPI was integrated.

### **Kwaku Felix**
[Kwaku](https://Brymo07.github.io/)
Kwaku is the second backend software engineer working on the web app alongside with kasumba and the rest of the team. 

### **Afolabi Seyi**
[Afolabi](https://Afooseyi.github.io)

Afolabi is a frontend software Engineer, works on the design and writeups computation. He is also passionate about the physical appearance of the site and engagement of the user with the interface.

If you would like to contact [Kazumba](https://Kraymond1738.github.io/) or [Chris](https://KrizTech.github.io) or [Afolabi](https://Afooseyi.github.io/) or [Kwaku](https://Brymo07.github.io/) about any opportunities, feel free to reach out!


## Acknowledgements
* [ALX School](https://www.alx.com/) (Staff and Students)
* Fellow LearnHub Team Mates
* ALx Peers
