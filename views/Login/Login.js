class Button extends HTMLElement{
    connectedCallBack(){
        this.innerHTML =  `<input type="submit" class="rounded-100 col-sm-3 margin-0"  id="signup"><br><br>`
    }
}

customElements.define('button-main', Button);