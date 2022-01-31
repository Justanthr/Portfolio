let myProjects = document.querySelector('.my-projects')

//Header for projects
let projectsHeader = document.createElement('h2')
projectsHeader.setAttribute('class', 'projects-header')
projectsHeader.textContent = 'My Projects  '
myProjects.append(projectsHeader)

//Show-hide button
let showHide = document.createElement('button')
showHide.setAttribute('class', 'projects-button')
showHide.textContent = '+'
projectsHeader.append(showHide)

//Projects
let projectsList = document.createElement('div')
projectsList.setAttribute('class', 'projects-list')
myProjects.append(projectsList)

showHide.addEventListener('click', function(){
    console.log('click')
})