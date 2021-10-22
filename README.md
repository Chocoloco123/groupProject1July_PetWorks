Welcome to PetWorks!

    In this Quora clone, we've established a site where users come to ask questions about their pets! Users can ask a question, add an answer, and comment on their fellow user's posts with helpful tips, funny stories, or clever responses. Users are encouraged to interact with each other's questions, and are able sort through the database using key word filters based on the topics they are most interested in.

    Browse the site and see what you can discover about your community of pets!
        https://petworks.herokuapp.com

    Look over the PetWorks wiki to see how it's all done!
        https://github.com/Chocoloco123/groupProject1July_PetWorks/wiki

    Supported by heroku, PetWorks was built using javascript, html, and css to create a well-functioning and aesthetically pleasing site. Our creative team worked together to give users the ability to fluidly post questions, answers, and comments as a main feature, and to seamlessly sort through archived questions with the use of filter navigation buttons. Simply select from one of our many categories and view questions based on topics like health and nutrition, and dogs, cats, and other friendly pets! Buttons are programmed to change color when clicked to perpetuate users' choices for them. Select a question to read about, and you will find the comments easily toggle, to give you a view of only the question and relevant answers that you wish to see. Overall, this simple program is designed for users' ease of use, and to encourage the sharing of information about our best friends!

    The past week of coding was exciting and challenging, and the programming team faces tough hurdles to get to the finish. The coding of the toggle buttons was a significant challenge, and, after a couple of hours of problem solving, resulted in a few lines of effective code:

        const viewCommentsButtons = document.querySelectorAll(".viewCommentsButtons");
        const commentsSections = document.querySelectorAll(".commentsSections")

        viewCommentsButtons.forEach(button => {
            button.addEventListener('click', e => {
                commentsSections.forEach(commentSection => {
                    if (e.target.id.split("-")[1] === commentSection.id.split("-")[1]){
                        if (commentSection.classList.contains("hidden")) {
                            commentSection.classList.remove("hidden")
                        } else {
                            commentSection.classList.add("hidden")
        }}})})});

    This snippet allows the users to toggle the visibility of the comments under an answer, streamlining the quetions page for ease of use.

    A large bulk of the project was creating pug templates to support the rendering of the web pages, and styling them with both aesthetic and functionality. The pages that worked as input fields for the users are meant to be simple and easy to use, and instruct the user on how to use the fields with minimal styling.

       div(id='addQuestion-form')
        +validationErrorSummary(errors)
        div(id='askAQuestion') Ask a Question:
        form(action='/questions/new' method='post')
            input(type='hidden' name='_csrf' value=csrfToken)
            label(for='question' id='userAsked') #{user.username} asked:
                +field(``, 'question', null, 'textarea')
            div(id='chooseQuestions')
                label(for='category' id='chooseCategory') Choose Category:
                    select(name='category')
                        option(value='activity') Activity
                        option(value='nutrition') Nutrition
                        option(value='socialization') Socialization
                        option(value='training') Training
                        option(value='veterinary') Veterinary
                        option(value='miscellaneous') Misc.
                label(for='petType' id='choosePetType') Choose Pet Type:
                    select(name='petType')
                        option(value='dog') Dog
                        option(value='cat') Cat
                        option(value='other') Other

            div(id='questionButtons')
                button(type='submit' id='submitQuestion') Submit
                a(href='/' id='cancelQuestion') Cancel

    Pages like this one require careful selection of id and class tags to style, and to grab when we need them for DOM manipulation. Almost every element on this page has a special function, from a drop down menu, to a select and submit button, to an input field for the user to ask their questions. Over the course of the week, we started with minimal code to see the rough layout of the page, and then began to build on functionality and style. The drop down menus made selecting categories much nicer, and the submit and cancel buttons route the user to the logical next step in the website's routes.

    By the end of the week, after combining all of our skills and knowledge, we were able to come up with a simply elegant and functional website designed to improve user experience, and provide a fun and safe place to ask questions to the community. We hope you enjoy using the site!
