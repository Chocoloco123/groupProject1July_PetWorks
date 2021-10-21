window.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.querySelectorAll('.toggleButton')
    const answersFeed = document.getElementsByClassName('answersFeed')

    toggleButton.forEach(ele => {
        if (toggleButton) {
            ele.addEventListener('click', (e) => {
                const answerId = e.target.id.split('-')[1]
                const commentToggle = document.getElementById(`commentsFeed-${answerId}`)
                if (commentToggle.getAttribute('class') === 'targetShow') commentToggle.setAttribute('class', 'targetHide')
                else commentToggle.setAttribute('class', 'targetShow')
        })
    }})


})
