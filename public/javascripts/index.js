window.addEventListener("load", (event) => {
    console.log("hello from javascript!")

    const deleteButtons = document.querySelectorAll(".delete-button");

    if (deleteButtons) {
        deleteButtons.forEach((button) => {
            button.addEventListener("click", async (e) => {
                e.preventDefault();

                const category = document.getElementById("queryCategory")
                const questionFeed = document.getElementById("questionFeed")

                let data;
                const res = await fetch(`/questions/${e.target.id.split("-")[2]}/delete`, {
                    method: "POST",
                    body: JSON.stringify({
                        id: e.target.id.split("-")[2],
                        category: category.value
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (res.status === 200) {
                    data = await res.json();
                }

                const generateHTML = (arr, userId) => {
                    let HTML = ""

                    arr.forEach((question) => {
                        let currHTML = `<a class="questionText" href="/questions/${question.id}">${question.question}</a>`;

                        if (question.userId === userId) {
                            currHTML += `<div class="editDeleteContainer"><a class="editDelete" href="/questions/${question.id}/edit" id="editQuestion">Edit</a><a class="delete-button deleteQuestion editDelete" id="question-delete-${question.id}" href="">Delete</a></div>`
                        }

                        HTML += (`<div class="question">` + currHTML + `</div>`)

                    })
                    return HTML;
                }

                questionFeed.innerHTML = generateHTML(data.questions, data.currentUserId);

            });
        });
    }

    // toggle comments


    const viewCommentsButtons = document.querySelectorAll(".viewCommentsButtons");
    const commentsSections = document.querySelectorAll(".commentsSections")

    viewCommentsButtons.forEach(button => {
        button.addEventListener('click', e => {
            commentsSections.forEach(commentSection => {
                if (e.target.id.split("-")[1] === commentSection.id.split("-")[1]) {
                    if (commentSection.classList.contains("hidden")) {
                        commentSection.classList.remove("hidden")
                    } else {
                        commentSection.classList.add("hidden")
                    }
                }
            })
        })
    });

    // hold selected petType button

    const petTypeButtons = document.querySelectorAll(".filter-btn");

    petTypeButtons.forEach((button) => {
        button.addEventListener('click', e => {
            // console.log("You are here");
            petTypeButtons.forEach(button => button.classList.remove("selected"))

            e.target.classList.add("selected");
        })
    })

    // likes

    const likeBtn = document.querySelector('.likeBtn');
    console.log('helloooo', likeBtn);
    likeBtn.addEventListener('click', async(e) => {
        e.preventDefault();
        // console.log('helloooooooooo')
        const res = await fetch(`${window.location.pathname}/like`, {
            method: "POST",
            body: JSON.stringify({
                id: parseInt(window.location.pathname.split("/")[2]) // questionId
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (res.status === 200) {
            const data = await res.json();

            const likeNumber = document.querySelector('.likeCount');
            likeNumber.innerText = data.likeCount;
            console.log(likeNumber, '<-------------')
        }
        
    })
});