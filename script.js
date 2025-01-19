const form = document.getElementById("form");
const input = document.querySelector("input");
const login_page = document.querySelector(".login-page");
let sub_success = document.querySelector(".sub-success");
let dismiss = document.querySelector("#dismiss");
let error = document.querySelector(".error");
let lp1 = document.getElementById('lp1');

function handleSubmit(e) {
  e.preventDefault();
  
  const data = {};
  const field = e.target.querySelector("input");
    data[field.name] = field.value;

    function validateEmail(input) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(input);
      }
      console.log(validateEmail(input.value));
      console.log(data);
      if(validateEmail(input.value)){
        login_page.style.display ="none"
        sub_success.style.display ="flex"
        error.style.display="none"
      }else{
        input.style.backgroundColor = "pink"
        lp1.style.display= "flex"
        // error.style.display="flex"
      } 
}
let submit = form.addEventListener('submit', handleSubmit);

let dismissMessage = dismiss.addEventListener('click', function(){
        login_page.style.display ="flex";
        sub_success.style.display ="none"
})


  