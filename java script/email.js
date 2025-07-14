function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs
        .send("service_0kimkbk", "template_42arwrh", templateParams)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.log("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        });
}


function preorder() {
    const templateParams = {
       
        email: document.querySelector("#email").value,
       
    };

    emailjs
        .send("service_0kimkbk", "template_vpa8dph", templateParams)
        .then(() => {
            alert("subscribe successfully!");
        })
        .catch((error) => {
            console.log("Error sending email:", error);
            alert(" Please try again.");
        });
}


