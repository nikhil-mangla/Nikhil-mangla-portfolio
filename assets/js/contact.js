function sendMail() {
  // Get the values from the form elements
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // Define the EmailJS service and template IDs
  const serviceID = "service_yhraazh";
  const templateID = "template_226ikmm";

  // Use EmailJS to send the email
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Clear the form fields on successful email send
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent successfully");
    })
    .catch((err) => console.log(err));

}

