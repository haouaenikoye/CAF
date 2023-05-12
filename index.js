function sendEmail(){
    var params = {
        from_fullName: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
     

    emailjs.send("service_9hlcjnm", "template_ct1ecuf", params).then(function (res) {
        alert("Votre message a été livré avec succés"+ res.status);
    })
   
}