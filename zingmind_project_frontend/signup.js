const signupForm = document.querySelector("#signup-form");

async function handleSubmit(e) {
    e.preventDefault(); 
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const formData = {
        firstName: username,
        lastName: document.getElementById('lastname').value, 
        email: email,
        password: password,
        role: document.getElementById('role').value,
    };
    console.log(formData);
    try {
         const response = await fetch("http://localhost:4000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData), 
        });

        if (response.ok) {
            console.log("Data successfully submitted");
        
        } else {
            console.error("Failed to submit data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
signupForm.addEventListener("submit", handleSubmit);
