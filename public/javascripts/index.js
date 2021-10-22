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


    // const viewCommentsButton = document.querySelectorAll(".viewCommentsButton");
    // console.log(viewCommentsButtons)
    // console.log(commentsContainer)

    // viewCommentsButton.forEach((button) => {
    //     button.addEventListener('click', e => {
            // e.preventDefault();
    //         const commentsContainer = document.getElementById('hidden');

    //         if (commentsContainer.classList.contains("hidden")) {
    //             commentsContainer.classList.remove("hidden");
    //         } else {
    //             commentsContainer.classList.add("hidden");
    //         }

    //     })
    // })

    // hold selected petType button

    const petTypeButtons = document.querySelectorAll(".filter-btn");

    petTypeButtons.forEach((button) => {
        button.addEventListener('click', e => {
            // console.log("You are here");
            petTypeButtons.forEach(button => button.classList.remove("selected"))

            e.target.classList.add("selected");
        })
    })
});