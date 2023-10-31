const app = document.querySelector('.root')
const inital_page = `<div class="textContainer">
<h1 class="title">Stay updated!</h1>
<p class="desc">
  Join 60,000+ product managers receiving monthly updates on:
</p>
<ul class="features">
  <li class="feature_item">
    <img src="../assets/images/icon-list.svg" alt="" class="featuer_image" />
    
    Product discovery and building what matters
  </li>
  <li class="feature_item">
    <img src="../assets/images/icon-list.svg" alt="" class="featuer_image" />
    Measuring to ensure updates are a success
  </li>
  <li class="feature_item">
    <img src="../assets/images/icon-list.svg" alt="" class="featuer_image" />
    And much more!
  </li>
</ul>
<form class="postEmail">
  <label  for="email">Email address <span class="error">Valid email require</span></label>
  <input type="email" name="email" id="email" class="input" placeholder="email@company.com">
  <button class="btn submit">Subscribe to monthly newsletter</button>
</form>
</div>
<div class="imageContainer">
<picture class="image_con">
    <source media="(max-width:790px)" srcset="../assets/images/illustration-sign-up-mobile.svg">
    <img src="../assets/images/illustration-sign-up-desktop.svg" alt="illustration to demonstrate all features we have showing screen, progress bar, and charts show success  " class="image" />
</picture>
</div>`
const succeessMassageCard = `<div class="success_content">
<div class="success_image_container">
  <img src="../assets/images/icon-success.svg" alt="success icon">
</div>
<h1 class="title">Thanks for subscribing!</h1>
<p class="desc">
  A confirmation email has been sent to <b>ash@loremcompany.com.</b> 
  Please open it and click the button inside to confirm your subscription.
</p>
</div>
<button class="btn dismiss">Dismiss message</button>`


class UI{
    constructor(app){
        this.app = app;
        this.dismissButton;
        this.submitButton;
        this.submitFormContainer;
        this.successMessage;
        this.value = '';
        this.state = 'inital';
    }
    CREATE_UI(){
        if (this.state === 'inital') {
            // contanier
            this.submitFormContainer = document.createElement('article');
            this.submitFormContainer.classList.add('container')
            this.submitFormContainer.innerHTML = inital_page;
            // form
            this.form = this.submitFormContainer.querySelector('.input');
            this.form.addEventListener('change',(e)=>{
                this.value += e.target.value;
                console.log(e.target.value);
            })
            // button
            this.submitButton = this.submitFormContainer.querySelector('.submit');
            this.submitButton.addEventListener('click',this.upload);
            this.app.appendChild(this.submitFormContainer);
            
        }else if (this.state === 'success') {
            this.successMessage = document.createElement('div')
            this.successMessage.classList.add('success_container')
            this.successMessage.innerHTML = succeessMassageCard;
            // button
            this.dismissButton =  this.successMessage.querySelector('.dismiss');
            this.dismissButton.addEventListener('click',this.dismiss)
            this.app.appendChild(this.successMessage)
        }
        
    }
    remove(){
        if (this.state === 'inital') {
            this.app.removeChild(this.successMessage)
            
        }else{
            this.app.removeChild(this.submitFormContainer)
        }
        this.CREATE_UI();
        
    }
    stateHandler(givenState){
        this.state = givenState;
    }
    upload = (e)=>{
        e.preventDefault()
        if (this.value) {
            this.stateHandler('success');
            this.remove();
            this.value = ''
        }
    }
    dismiss =()=>{
        this.stateHandler('inital')
        this.remove()
    }
}

// initalize
const ui = new UI(app);
window.addEventListener('DOMContentLoaded',()=>{
    ui.CREATE_UI()
})
