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
                        HTML += `<div class='question'><a href=/questions/${question.id}>${question.question}</a></div>`;

                        if (question.userId === userId) {
                            HTML += `<div><a href="/questions/${question.id}/edit">Edit </a><a class="delete-button" id="question-delete-${question.id}" href="">Delete</a></div>`;
                        }
                    })
                    return HTML;
                }

                questionFeed.innerHTML = generateHTML(data.questions, data.currentUserId);

            });
        });
    }
});
