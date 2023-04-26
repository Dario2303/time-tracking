
const task = document.querySelectorAll('.activity_date div')


document.addEventListener('DOMContentLoaded', () => {
    showDates()
})
 
const showDates = () => {

    for(i = 0; task[i] = date[i]; i++){
        const title = document.createElement('h2')
        const menu = document.createElement('img')

        title.textContent = `${date[i].title}`
        menu.src='./images/icon-ellipsis.svg'

        task[i].appendChild(title)
        task[i].appendChild(menu)
    } 
}