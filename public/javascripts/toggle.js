window.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.querySelectorAll('.toggleButton')

    toggleButton.forEach(ele => {
        if (toggleButton) {
            ele.addEventListener('click', (e) => {
                const answerId = e.target.id.split('-')[1]
                const commentToggle = document.getElementById(`commentsFeed-${answerId}`)
                if (commentToggle.getAttribute('class') === 'targetShow') commentToggle.setAttribute('class', 'targetHide')
                else commentToggle.setAttribute('class', 'targetShow')
        })
    }})

    const filterToggleButtons = document.getElementsByClassName('filter-btn')

    for(let i=0; i<filterToggleButtons.length; i++){
        const button = filterToggleButtons[i];
        button.addEventListener('click', (e)=> {
            const onButton = document.querySelector('.filterButtonClicked')
            const target = e.target

            target.setAttribute('class', 'filterButtonClicked')
            onButton.setAttribute('class', 'filterButtonUnclicked')
        })
    }
})
