# Tate Braeckel Phase 4 Project: Drawing Ideas Now
Tate Braeckel's Drawing Ideas Now site was created to be a resource for artists, educators, children, and adult alike. It is a full CRUD site that allows the user to login, to access other general drawing ideas, to add any of those drawings to their own profile and read, update, and delete drawings within their own profile. The React front end is an SPA with a navbar that clients can use to navigate to Home and Categories and the User Profile tab routes.  The back end is Ruby on Rails.  This site has basic tools like a navbar and a logo image that links to the home page,  

Live demo [_here_](https://youtu.be/KeARm1YrWls). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- TeachSource was created by an educator for educators. One of the most frustrating aspects of teaching/ education is having the resources needed to successfully and holistically present informtion/ lessons to students - in any subject area. This site is intended to be a comprehensive search database for all subject areas curated by the educators in the field.
- Their are so many resources online for educators but this site is a singularity for all of those resources. 


## Technologies Used
- Frontend: ReactJS 18.2.0
- Backend: Ruby 3.2.2
- VS Code - version 1.79.2


## Features
List the ready features here:
- Subject links that link directly to all resources for that given subject.
- An add new subject form where the client can create a new educational subject.
- Each specific subject page has it's own add new resource form that the client can utilize to create new resources based on name, description, and url.
- Each individual resource card has a delete button or an edit button. The edit button can be doubled clikced to open an edit form. 


## Screenshots
(https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main/blob/main/Screenshot%202023-07-07%20at%2010.18.07%20AM.png)
(https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main/blob/main/Screenshot%202023-07-07%20at%2010.18.14%20AM.png)
(https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main/blob/main/Screenshot%202023-07-07%20at%2010.18.22%20AM.png)


## Setup
To setup this project go to my 2 GitHub repositories.
Frontend at: https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main
Backend at: https://github.com/tbraeck/phase-3-project-tate-braeckel-backend-main

Start with the README file and then open the CSS, React, and Ruby files in a text editor like VS Code.



## Usage
Below are snippets of some code within the project.

//React example for ResourceEdit component//

`const handleResourceChange = (e) => {
  let name = e.target.name
  let value = e.target.value
  setResourceBody({...resourceBody, [name]:value})
}

const handleUpdateRes = (updatedRes) => {
  const subject = subjects.find((sub)=>sub.id === updatedRes.subject_id)
  const updatedResources = subject.resources.map(r => r.id === updatedRes.id ? updatedRes : r)
  const updatedSubject = {...subject, resources: updatedResources}
  const updatedSubjects = subjects.map(s => s.id === subject.id ? updatedSubject : s)
  setSubjects(updatedSubjects)              
}` 

//Ruby ActiveRecord example for Application Controller backend routing//

`post "/resources" do
    subject = Subject.find(params[:subject_id])
    resource = subject.resources.create(
      name: params[:name],
      description: params[:description],
      url: params[:url]
    )
    resource.to_json
  end

  delete "/resources/:id" do
    deleteResource = Resource.find_by(id: params[:id])
    deleteResource.destroy
  end`


## Project Status
Project is: _in progress_ The project is ever-evolving and will grow as I grow as a developer. I really do want this project to be deployed and for educators to use this tool to help them in the classroom.


## Room for Improvement

Room for improvement:
- I need to improve the aesthetics of the overall site 
- Improve the use interface/ experience
- Add functionality like full CRUD on the 'Subjects'page
- Add a User Login functionality: helps so not every user can destroy all data intentionally or accidentally

To do:
- Work on the styling/ placement of elements
- Add or subtract other features, interactions, experiences


## Acknowledgements

- This project was inspired by my years as an educator, thinking of how difficult and frustrating it is at times to find usable resources without scraping the entire net.
- Trying to solve a simple problem for educators.

## Contact
Created by [Tate Braeckel](www.linkedin.com/in/tate-braeckel) - feel free to contact me!


