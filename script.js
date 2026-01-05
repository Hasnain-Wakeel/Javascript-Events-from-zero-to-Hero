function fillCampus() {
  let rollNumber = Number(document.getElementById("rollNumber").value); 
  // .value returns a string and our inputting value is in number
  console.log("Roll Number =>" , rollNumber);

  let campusValue;

  switch (rollNumber) {
    case 10:
      campusValue = '"Zaitoon Ashraf IT Park"';
      break;
    case 20:
      campusValue = '"Bahadurabad Campus"';
      break;
    case 30:
      campusValue = '"Gulshan Campus"';
      break;
    case 40:
      campusValue = '"Zamzama Campus"';
      break;
    case 50:
      campusValue = '"Nazimabad Campus"';
      break;
    default:
      alert("You are not Enrolled in any Campus!");
      campusValue = "Not Enrolled in any Campus";

  }

  if(campusValue === "Not Enrolled in any Campus"){
    document.getElementById("campus").value = "";
    // document.getElementById("campus").value = "Not Enrolled in any Campus";
    console.log("Campus =>" , campusValue);
  }
  else{
    document.getElementById("campus").value = campusValue;
    console.log("Campus =>" , campusValue);
  }

}
