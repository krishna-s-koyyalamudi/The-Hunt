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

window.customElements.define('main-button', class extends HTMLElement {
    constructor() {
      super();
      if (!username || !password) {
        return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
      }
      console.log("hello")
      var shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `<input type="submit" class="rounded-100 col-sm-3 mt-3 text-center" value="Register" id="signup">`;
    }
  });

  function checkforblank(){

    if(document.getElementById('uname').value==""){
      alert('please fill the Username');
      return false;
    }
  }

