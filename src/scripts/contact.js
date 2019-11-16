let form_elements = document.getElementsByTagName("input");
let textarea = document.getElementsByTagName("textarea")[0];
let submit = document.getElementsByClassName("send_button");

submit[0].addEventListener("click", function() {
    for (let f in form_elements){
        if (form_elements[f].value == 'undefined'){
            continue;
        }

        if (form_elements[f].value == ''){
            return;
        }
    }

    let name = form_elements[0].value;
    let number = form_elements[1].value;
    let email = form_elements[2].value;

    Email.send({
    SecureToken : "38177cd3-0fa9-4057-b4d3-aa2f148079ee",
    To : 'bcca.chairman@gmail.com',
    From : email,
    Subject : name + ' ' + number,
    Body : textarea.value
    }).then(
      message => alert(message)
    );

    // Reset values
    form_elements[0].value = '';
    form_elements[1].value = '';
    form_elements[2].value = '';
    textarea.value = '';
}
)
