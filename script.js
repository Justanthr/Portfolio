let myProjects = document.querySelector('.my-projects')

//Header for projects
let projectsHeader = document.createElement('h2')
projectsHeader.setAttribute('class', 'projects-header')
projectsHeader.textContent = 'My Projects  '
myProjects.append(projectsHeader)

//Creating show-hide button
let showHide = document.createElement('button')
showHide.setAttribute('class', 'projects-button')
showHide.textContent = '+'
projectsHeader.append(showHide)

//Projects
let projectsList = document.createElement('div')
projectsList.setAttribute('class', 'projects-list')
myProjects.append(projectsList)

let projects = document.createElement('p')
projects.setAttribute('class', 'projects')
projects.setAttribute('style', 'display: none')
projectsList.append(projects)

let project1 = document.createElement('a')
project1.setAttribute('id', 'project-1')
project1.setAttribute('href', 'https://github.com/Justanthr/Create-Your-Own-Prject')
project1.textContent = 'Create Your Own Adventure,'
projects.append(project1)

let project2 = document.createElement('a')
project2.setAttribute('id', 'project-2')
project2.setAttribute('href', 'https://github.com/Justanthr/Create-Your-Own-Trivia')
project2.textContent = '  Create Your Own Trivia,'
projects.append(project2)

let project3 = document.createElement('a')
project3.setAttribute('id', 'project-3')
project3.setAttribute('href', 'https://github.com/Justanthr/FSI-Shopping-Cart-Mock-Assessment-Starter')
project3.textContent = '  Create a Working Shopping Cart'
projects.append(project3)

//Show-hide button
showHide.addEventListener('click', function(){
    let projectsList = document.querySelector('.projects')
    let btnText = showHide.textContent
    if(btnText === '+'){
        projectsList.style.display = 'block'
        showHide.innerHTML = '-'
    }
    else{
        projectsList.style.display = 'none'
        showHide.innerHTML = '+'
    }
})
