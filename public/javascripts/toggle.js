window.addEventListener('DOMContentLoaded', (event) => {
    const commentToggle = document.getElementById('commentsFeed')
    const toggleButton = document.getElementById('toggleButton')

    toggleButton.addEventListener('click', (e) => {
        console.log(commentToggle, toggleButton)
        // e.preventDefault();
        if (commentToggle.getAttribute('class') === 'targetShow') commentToggle.setAttribute('class', 'targetHide')
        else commentToggle.setAttribute('class', 'targetShow')
    })


    const filterButton = document
})
