$(document).ready(function () {
    // Eventlistener for the login button
    $("#SignIn").click(function () {
        // Get the input values
        var enteredEmail = $("#Email").val()
        var enteredPassword = $("#Password").val()

        // Retrieve user data from localStorage
        var storedEmail = localStorage.getItem('email')
        var storedPassword = localStorage.getItem('password')

        // Check if the entered information  match with the stored information
        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            alert("Login successful!")
            // Redirect to the page takenote.html
            window.location.href = 'takenote.html'
        } else {
            alert("Invalid !  Please try again.")
        }
    })
})



    
     $(document).ready(function () {
        // Eventlistener for the signup button
        $("#Register").click(function () {
            // Get the input values
            var fullName = $("#Fullname").val()
            var email = $("#Email").val()
            var password = $("#Password").val()

            // Save user information in the localStorage
            localStorage.setItem('fullName', fullName)
            localStorage.setItem('email', email);
            localStorage.setItem('password', password)

            // Redirect to login.html
            window.location.href = 'login.html'
        })
    })


