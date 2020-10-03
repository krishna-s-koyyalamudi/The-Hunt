// class RButton extends HTMLElement{
//     constructor(){
//         super();
     
//         const template = document.getElementById("cool-timer");
//         const templateContent = template.content;
//         this.shadow = this.attachShadow({mode: "open"}).appendChild(templateContent.cloneNode(true));
//     }
//     connectedCallBack(){
//          this.render();
//     }
//     render(){
//         this.innerHTML =  `<button type="submit" class="rounded-100 col-sm-3 margin-0"  id="signup"></button>`;
//     }
// }


// customElements.define('main-button', RButton);



  function checkvalidation1(){

    if(document.getElementById('uname').value==""){
      alert('please fill the Username');
      return false 
    } 
    if(document.getElementById('password').value==""){
      alert('please fill the password');
      return false 
    }   

  alert("successfully login");

  }
 
  function goToRegister() {
    window.location.href = "views/Signup/Signup.html";
  }


  function goToForgotPassword(){
       window.location.href = "//views/ForgetPassword/forgetpassword1.html";
  }
