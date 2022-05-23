< script >
    // name input validation
    function validateNameInput() {
        const nameInput = document.getElementById("name");

        // khong nhap ten vao truong Your name thi thong bao loi
        if (nameInput.value === '') {
            alert('Please fill out your name.');
        } // nhap vao truong Your name qua 100 ki tu 
        else if (nameInput.value.length > 100) {
            nameInput.setCustomValidity('Your name should not exceed 100 characters.');
        } // nhap dung du lieu vao truong name 
        else {
            nameInput.setCustomValidity('');

        }
    };

// email input validation
function validateEmailInput() {
    const emailInput = document.getElementById("email");

    // khong nhap du lieu vao truong Your Email thi thong bao loi
    if (emailInput.value === '') {
        alert('Please fill out your email.');
    } // nhap vao truong Your Email qua 100 ki tu 
    else if (emailInput.value.length > 100) {
        emailInput.setCustomValidity('Your email should not exceed 100 characters.')
    } // nhap dung du lieu vao truong email 
    else {
        emailInput.setCustomValidity('');

    }
}

// Subject input validation
function validateSubjectInput() {
    const subjectInput = document.getElementById("subject");

    // khong nhap du lieu vao truong Your Subject thi thong bao loi
    if (subjectInput.value === '') {
        alert('Please fill out subject.');
    } // nhap vao truong Your subject duoi 50 ki tu 
    else if (subjectInput.value.length < 50) {
        subjectInput.setCustomValidity('Subject should not shorter than 50 characters.')
    } // nhap vao truong subject tren 250 ki tu 
    else if (subjectInput.value.length > 250) {
        subjectInput.setCustomValidity('Subject should not exceed 250 characters.')
            // nhap dung du lieu vao truong subject 
    } else {
        subjectInput.setCustomValidity('');

    }
}

// Message input validation
function validateMessageInput() {
    const messageInput = document.getElementById("message");

    // khong nhap du lieu vao truong Your Message thi thong bao loi
    if (messageInput.value === '') {
        alert('Please fill out Message.');
    } // nhap vao truong Message tren 500 ki tu 
    else if (messageInput.value.length > 500) {
        messageInput.setCustomValidity('Message should not exceed 500 characters.')
            // nhap dung du lieu vao truong subject 
    } else {
        messageInput.setCustomValidity('');

    }
}
// Nhieu truong du lieu phat sinh loi o tren
function validate() {
    validateNameInput();
    validateEmailInput();
    validateSubjectInput();
    validateMessageInput();
}
// if (EmailInput === '' && nameInput === '' && subjectInput === '') {
//     alert('Please correct the following fields before continuing: \n' +
//         fields.join(", ")​​​​
// }
<
/script>