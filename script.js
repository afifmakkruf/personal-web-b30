function submitData() {
    const name = document.getElementById("input-name").value
    const email = document.getElementById("input-email").value
    const phone = document.getElementById("input-phone").value
    const subject = document.getElementById("input-subject").value
    const message = document.getElementById("input-message").value
    let checkboxValue1 = document.querySelector('#html:checked')
    let checkboxValue2 = document.querySelector('#css:checked')
    let checkboxValue3 = document.querySelector('#js:checked')
    const contactForm = document.getElementById('contact')
    
    if (name == "") {
        alert("name is required")
    } else if (email == "") {
        alert("Email is required")
    } else if (subject == "") {
        alert("Subject is required")
    } else if (message == "") {
        alert("Message is required")
    } else {

       if (checkboxValue1) {
            checkboxValue1 = document.querySelector('#html').value
       } else {
           checkboxValue1 = ''
       }

       if (checkboxValue2) { 
            checkboxValue2 = document.querySelector('#css').value
       } else {
           checkboxValue2 = ''
       }

       if (checkboxValue3) {
            checkboxValue3 = document.querySelector('#js').value
       } else {
           checkboxValue3 = ''
       }
        
        let emailReceiver = 'afif@mail.com'

        let a = document.createElement('a')

        a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello my name is ${name}. ${message}. 
        The required skill is ${checkboxValue1} ${checkboxValue2} ${checkboxValue3}. Contact me ${phone}. 
        `

        // <a href="mailto:afif@mail.com?subject=Test Subject&body=Hello B30">Send Mail</a>
        a.click()

        contactForm.reset()
    }

}

