const loginForm = document.getElementById("login-form");

async function handleSubmit(e) {
    e.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    const formData = {
        username: username,
        password: password,
    };

    console.log(formData); 

    try {
        const response = await fetch("http://localhost:4000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), 
        });

        if (response.ok) {
            console.log("Login successful"); 
        } else {
            console.error("Failed to login"); 
        }
    } catch (error) {
        console.error("Error:", error); 
    }
}

loginForm.addEventListener("submit", handleSubmit);
