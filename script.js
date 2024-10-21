function display() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var education = document.getElementById('education');
    var experience = document.getElementById('experience');
    var skills = document.getElementById('skills');
    var displayArea = document.getElementById("display");
    // Collect the values of the input fields
    var first = name.value;
    var sec = email.value;
    var thrd = phone.value;
    var four = education.value;
    var five = experience.value;
    var six = skills.value;
    // Clear previous content and append new content in a resume format
    displayArea.innerHTML = "\n\n        <h2 style=\"color: red; font-size: 60px  ;\">Resume</h2>\n        <h3 style=\"color: rgb(0, 123, 255);\">Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(first, "</p>\n        <p><strong>Email:</strong> ").concat(sec, "</p>\n        <p><strong>Phone No.:</strong> ").concat(thrd, "</p>\n        \n        <h3 style=\"color: rgb(0, 123, 255);\">Education</h3>\n        <p>").concat(four, "</p>\n        \n        <h3 style=\"color: rgb(0, 123, 255);\">Experience</h3>\n        <p>").concat(five, "</p>\n        \n        <h3 style=\"color: rgb(0, 123, 255);\">Skills</h3>\n        <p>").concat(six, "</p>\n    ");
}
// Add event listener to the submit button
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", display);
