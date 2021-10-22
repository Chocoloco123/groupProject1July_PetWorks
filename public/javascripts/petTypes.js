
// get the petType for a post maybe a variable?

/*
understand:
[] create filter buttons to filter the question feed based on the button selected

Things to consider:
[] click event and possible propagations
[] petType from db
[] filtering based on userId as well
[] merge conflicts with question

plan:
[] create event listener on the window
[] create a main function to filter the feed
[] create a variable to hold the buttons
[] iterate through each button (find some way to get the class of that button)
[] if the class is equal to the petType selected,
  []

[] create a function to add only show elements of the given class
[] create a function to take off elements if not selected

*/



window.addEventListener('load', (event) => {
  // node list of filterButtons
  const filterButtons = document.querySelectorAll('.filter-btn');
  // arr of filterButtons
  const filterBtnArr = Array.from(filterButtons);

  for (let i = 0; i < filterBtnArr.length; i++) {
    filterBtnArr[i].addEventListener('click', async (e) => {
      e.preventDefault();
      let data;
<<<<<<< HEAD
<<<<<<< HEAD
      let feed = document.getElementById('questionFeed');
      // console.log(feed);
      // console.log(e.target.id);
=======
=======
>>>>>>> 0a454c288a51b2ff8554e2cfa1e85c0c704e0fe1
      const category = document.getElementById("queryCategory")

      console.log(category.value)

      let feed = document.getElementById('questionFeed')
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 0a454c288a51b2ff8554e2cfa1e85c0c704e0fe1

      const result = await fetch(`/search/${e.target.id}`, {
        method: "POST",
        body: JSON.stringify({
          petType: e.target.id,
          category: category.value
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (result.status === 200) {
        data = await result.json();
        // console.log(data);
      }

      // populate the question feed
      const newInnerHTML = (arrOfQuestions, userId) => {
        let innerHTML = '';

<<<<<<< HEAD
        // question = arr of questions
        arrOfQuestions.forEach(question => {
          innerHTML += `<div class="question"><a href="/questions/${question.id}">${question.question}</a></div>`;
=======
        arrOfQuestions.forEach((question) => {
          let currHTML = `<a class="questionText" href="/questions/${question.id}">${question.question}</a>`;

>>>>>>> main
          if (question.userId === userId) {
            currHTML += `<div class="editDeleteContainer"><a class="editDelete" href="/questions/${question.id}/edit" id="editQuestion">Edit</a><a class="delete-button deleteQuestion editDelete" id="question-delete-${question.id}" href="">Delete</a></div>`
          }

          innerHTML += (`<div class="question">` + currHTML + `</div>`)

        })
        return innerHTML;
      }

      feed.innerHTML = newInnerHTML(data.questions, data.userId);

    })
  }
})
