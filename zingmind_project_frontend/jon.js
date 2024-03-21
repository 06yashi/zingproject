const skillsForm = document.getElementById("skillsForm");

async function handleSubmit(e) {
    e.preventDefault(); 

    // Get form data
    const skills = Array.from(document.getElementById('skills').selectedOptions).map(option => option.value);
    const resumeFile = document.getElementById('resume').files[0];

    // Create FormData object
    const formData = new FormData();
    formData.append('skills', JSON.stringify(skills));
    formData.append('resume', resumeFile);

    // Log form data for testing
    console.log([...formData.entries()]);

    try {
        // Send form data to server
        const response = await fetch("http://localhost:4000/upload/fileUpload/[Document_id]", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            console.log("Form data submitted successfully");
        } else {
            console.error("Failed to submit form data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Add event listener to form submit button
document.getElementById("submitBtn").addEventListener("click", handleSubmit);
