let output = document.getElementById('output');
function clearInput() {
   document.getElementById("Form").reset();
  
}
//this is another method to do this 
// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const mess = document.getElementById("message");

// function sendEmail(){
//    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;
 

//    Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "2003hardikgaur@gmail.com",
//       Password : "A600061954C8F5D81E2F7F7B6A749F215C14",
//       To : '2003hardikgaur@gmail.com',
//       From : "2003hardikgaur@gmail.com",
//       Subject : subject.value,
//       Body : bodyMessage
//   }).then(
//     message => {
//       if(message =="OK") {
//          Swal.fire({
//             title: "Success",
//             text: "Message sent successfully",
//             icon: "success"
//           });
//       }
//     }
//   );
// }

// function checkInputs() {
//    const items = document.querySelectorAll(".item");

//    for (const item of items) {
//       if(item.value == ""){
//          item.classList.add("error");
//          item.parentElement.classList.add("error");
//       }

//       item.addEventListener("Keyup", () => {
//          if(item.value != ""){
//             item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//          }
//          else {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//          }

//       });
//    }
// }

// form.addEventListener("submit", (e) =>{
//    e.preventDefault();
//    checkInputs();
//   // sendEmail;
// })
