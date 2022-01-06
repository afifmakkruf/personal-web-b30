function submitData() {
    const name = document.getElementById("input-name").value
    const email = document.getElementById("input-email").value
    const phone = document.getElementById("input-phone").value
    const subject = document.getElementById("input-subject").value
    const message = document.getElementById("input-message").value

    function getCheckBoxValue(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`)
        const checkboxValues = []

        checkboxes.forEach((checkbox) => {
            checkboxValues.push(checkbox.value)
        })
        return checkboxValues
    }

    if (name == "") {
        alert("name is required")
    } else if (email == "") {
        alert("Email is required")
    } else if (subject == "") {
        alert("Subject is required")
    } else if (message == "") {
        alert("Message is required")
    } else if (getCheckBoxValue('skills') == ""){
        alert("Atlease choose one")
    } else {
        console.log(getCheckBoxValue('skills'))
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(subject)
        console.log(message)
        
        let emailReceiver = 'afif@mail.com'

        let a = document.createElement('a')

        a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello my name is ${name} ${message} contact me ${phone}. 
        The required skill is ${getCheckBoxValue('skills').join("; ")}`

        // <a href="mailto:afif@mail.com?subject=Test Subject&body=Hello B30">Send Mail</a>
        a.click()
    }

}

