window.addEventListener('DOMContentLoaded', (event) => {
    const commentToggle = document.getElementById('commentsFeed')
    const toggleButton = document.getElementById('toggleButton')

    toggleButton.addEventListener('click', (e) => {
        if (commentToggle.getAttribute('class') === 'targetShow') commentToggle.setAttribute('class', 'targetHide')
        else commentToggle.setAttribute('class', 'targetShow')
    })


    const filterButton = document.getElementsByClassName('filterButtonUnclicked')
    console.log(filterButton)

    filterButton.forEach((ele)=> {
        ele.addEventListener('click', ()=> {
            if (ele.getAttribute('class') === 'filterButtonUnclicked') ele.setAttribute('class', 'filterButtonClicked')
            else ele.setAttribute('class', 'filterButtonUnclicked')
        })
    })
})
