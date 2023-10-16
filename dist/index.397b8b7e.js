!function(){/**
 * Create a FormComponent class with all the elements in the form and the form itself.
 */class t{#t=/** @type {HTMLFormElement}*/document.getElementById("form");#e=/** @type {HTMLInputElement} */document.getElementById("name");#i=/** @type {HTMLInputElement} */document.getElementById("email");#a=/** @type {HTMLTextAreaElement} */document.getElementById("message");/**
   * Takes in no argument or parameter
   */constructor(){this.#t.addEventListener("submit",this.#n.bind(this))}/**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */#n(t){this.#s(t),this.#r(t),this.#l(t)}/**
   * @param {Event} evtObj - The event interface that takes place on the form
   * @return {void}
   */#l(t){(""===this.#a.value.trim()||this.#a.validity.valueMissing)&&(t.preventDefault(),this.#o(this.#a,"Please enter a text")),this.#a.validity.tooShort&&(t.preventDefault(),this.#o(this.#a,"Message is too short")),this.#a.validity.tooLong&&(t.preventDefault(),this.#o(this.#a,"Message is too long")),this.#a.validity.valid&&this.#o(this.#a,"")}/**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */#r(t){(""===this.#i.value.trim()||this.#e.validity.valueMissing)&&(t.preventDefault(),this.#o(this.#i,"Please enter an email")),this.#i.validity.typeMismatch&&(t.preventDefault(),this.#o(this.#i,"Sorry, invalid format here")),this.#i.validity.valid&&this.#h(this.#i,"")}/**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */#s(t){(""===this.#e.value.trim()||this.#e.validity.valueMissing)&&(t.preventDefault(),this.#o(this.#e,"Please enter a name")),this.#e.validity.tooShort&&(t.preventDefault(),this.#o(this.#e,"Name entered is too short")),this.#e.validity.tooLong&&(t.preventDefault(),this.#o(this.#e,"Name entered is too long")),this.#e.validity.patternMismatch&&(t.preventDefault(),this.#o(this.#e,"Please enter a name")),this.#e.validity.valid&&this.#h(this.#e,"")}/**
   *
   * @param {HTMLInputElement | HTMLTextAreaElement} formElement - The input or the textarea element
   * @param {string} message - The error message depending on what the user violates.
   * @return {void}
   */#o(t,e){t.setAttribute("aria-invalid","true");/**
     * This block is used to handle error messages in a form
     * It checks if the next sibling of the form element is a <p></p> with a class 'error-message'
     * If it does, we want to assign a variable error-message to it.
     * If it does not then we want to go to the next sibling.
     * @type {Element | null | undefined} errorMessage
     */let i=null;t.nextElementSibling?.classList.contains("error-message")?i=t.nextElementSibling:(i=t.nextElementSibling?.nextElementSibling,null!==t.nextElementSibling&&(t.nextElementSibling.className="icon-error__show icon-error")),i instanceof HTMLElement&&(i.innerText=e,i.removeAttribute("hidden"))}/**
   *
   * @param {HTMLInputElement | HTMLTextAreaElement} formElement - The input or the textarea element
   * @param {string} message - The error message depending on what the user violates.
   * @return {void}
   */#h(t,e){t.setAttribute("aria-invalid","false");/**
     * This block is used to handle error messages in a form
     * It checks if the next sibling of the form element is a <p></p> with a class 'error-message'
     * If it does, we want to assign a variable error-message to it.
     * If it does not then we want to go to the next sibling.
     * @type {Element | null | undefined} errorMessage
     */let i=null;t.nextElementSibling?.classList.contains("error-message")?i=t.nextElementSibling:(i=t.nextElementSibling?.nextElementSibling,null!==t.nextElementSibling&&(t.nextElementSibling.className="icon-error__hide icon-error")),i instanceof HTMLElement&&(i.innerText=e,i.setAttribute("hidden","hidden"))}}new t;/**
 * The class sets up the blue print for bootstrapping the animations
 */class e{#m;/**
   *
   * @param {Node} target - The elements that we will be observing
   */constructor(t){this.#m=t,this.#d()}/**
   *
   * @param {Array<IntersectionObserverEntry>} entries
   * @param {IntersectionObserver} observer
   */#v(t,e){t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("OnIt"),this.#m instanceof Element&&e.unobserve(this.#m))})}/**
   * This method will be called in the constructor to start the intersection observer.
   */#d(){let t=new IntersectionObserver(this.#v.bind(this),{root:null,threshold:.2,rootMargin:"20px 0px 0px 0px"});this.#m instanceof Element&&t.observe(this.#m)}}!/**
 * The function will instantiate a class that would bootstrap the animation of the page when it loads. You should also be able to use window.addEventListener('load', callback)
 * @return {void}
 */function(){let t=/** @type {NodeList}*/document.querySelectorAll(".animate");t.forEach(function(t){// Here due to line breaks which is interpreted as text node, the div element is the second child node in the section element while traversing the DOM.
let i=t.childNodes[1];new e(i)})}()}();//# sourceMappingURL=index.397b8b7e.js.map

//# sourceMappingURL=index.397b8b7e.js.map
