class Button extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }
    connectedCallBack(){
        this.render();
    }
    render(){
        this.shadow.innerHTML =  `<input type="submit" class="rounded-100 col-sm-3 margin-0"  id="signup"><br><br>`;
    }
}


customElements.define('main-button', Button);