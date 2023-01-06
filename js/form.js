var nameErr = emailErr = passErr = cpassErr = phoneErr = countryErr = true;

function printError(id, error) {
  document.getElementById(id).innerHTML = error;

}

function validateForm() {

  var name = document.myForm.Name.value
  email = document.myForm.EMail.value
  Password = document.myForm.Password.value
  Confirmpass = document.myForm.Confirmpass.value
  Phone = document.myForm.Phone.value
  Country = document.myForm.Country.value

  // console.log(name);

  if (name == "") {
    printError("nameErr", "*Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "*Please enter a valid name");
    } else if (name.length < 4) {
      printError("nameErr", "*Name must be long");
    }
    else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "*Please enter mail")
  } else {
    var regex1 = /@gmail.com/;
    if (regex1.test(email) === false) {
      printError("emailErr", "*Enter valid mail only gmail account allow")
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (Password == "") {
    printError("passErr", "*Please enter password")
  } else {
    if (Password !== Confirmpass) {
      printError("passErr", "*Password and confirm password doesnt matched")
    } else {
      printError("passErr", "");
      passErr = false;
    }
  }

  if (Confirmpass == "") {
    printError("cpassErr", "*Please enter Confirmpass")
  } else {
    if (Confirmpass !== Password) {
      printError("cpassErr", "*Pwd and confirmPwd doesnt matched")
    } else {
      printError("cpassErr", "");
      cpassErr = false;
    }
  }

  if (Phone == "") {
    printError("phoneErr", "*Please enter phoneNum")
  } else {
    var regex2 = /^[0-9]+$/;
    if (regex2.test(Phone) === false) {
      printError("phoneErr", "*Only number is allow")
    } else if (Phone.length < 10) {
      printError("phoneErr", "*Number must be 10 digit")
    }
    else {
      printError("phoneErr", "");
      phoneErr = false;
    }
  }

  if (Country == "-1") {
    printError("countryErr", "*select any country")
  } else {
    printError("countryErr", "")
    countryErr = false
  }



  if ((nameErr || emailErr || passErr || cpassErr || phoneErr || countryErr) == true) {
    return false;
  } else {

    var dataPreview = "Full Name: " + name + "\n" +
                      "Email address: " + email + "\n" +
                      "Phone num: " + Phone + "\n" +
                      "Country: " + Country + "\n"




    console.log(dataPreview);
  }

}

