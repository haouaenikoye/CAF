function sendEmail(){
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }
     

    emailjs.send("service_yy86hs6", "template_uhnlfhn", params).then(function (res) {
        alert("Votre message a été livré avec succés"+ res.status);
    })
   
}