function display() {
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const education = document.getElementById('education') as HTMLInputElement;
    const experience = document.getElementById('experience') as HTMLInputElement;
    const skills = document.getElementById('skills') as HTMLInputElement;

    const displayArea = document.getElementById("display") as HTMLElement;

    // Collect the values of the input fields
    const first: string = name.value;
    const sec: string = email.value;
    const thrd: string = phone.value;
    const four: string = education.value;
    const five: string = experience.value;
    const six: string = skills.value;

    // Clear previous content and append new content in a resume format
    displayArea.innerHTML = `

        <h2 style="color: red; font-size: 60px  ;">Resume</h2>
        <h3 style="color: rgb(0, 123, 255);">Personal Information</h3>
        <p><strong>Name:</strong> ${first}</p>
        <p><strong>Email:</strong> ${sec}</p>
        <p><strong>Phone No.:</strong> ${thrd}</p>
        
        <h3 style="color: rgb(0, 123, 255);">Education</h3>
        <p>${four}</p>
        
        <h3 style="color: rgb(0, 123, 255);">Experience</h3>
        <p>${five}</p>
        
        <h3 style="color: rgb(0, 123, 255);">Skills</h3>
        <p>${six}</p>
    `;
}

// Add event listener to the submit button
const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
submitButton.addEventListener("click", display);
