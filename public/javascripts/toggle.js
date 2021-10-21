window.addEventListener('DOMContentLoaded', (event) => {
    const commentToggle = document.getElementsByClassName('target')
    const toggleButton = document.getElementById('toggleButton')

    toggleButton.addEventListener('click', (e) => {
        console.log(commentToggle, toggleButton)
        // e.preventDefault();
        if (commentToggle.visibility === 'hidden') commentToggle.visibility = 'visible'
        else commentToggle.visibility = 'hidden'
    })
})
