/**
 * Create a FormComponent class with all the elements in the form and the form itself.
 */class e{#e=/** @type {HTMLFormElement}*/document.getElementById("form");#t=/** @type {HTMLInputElement} */document.getElementById("name");#i=/** @type {HTMLInputElement} */document.getElementById("email");#a=/** @type {HTMLTextAreaElement} */document.getElementById("message");/**
   * Takes in no argument or parameter
   */constructor(){this.#e.addEventListener("submit",this.#n.bind(this))}/**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */#n(e){this.#r(e),this.#s(e),this.#l(e)}/**
   * @param {Event} evtObj - The event interface that takes place on the form
   * @return {void}
   */#l(e){(""===this.#a.value.trim()||this.#a.validity.valueMissing)&&(e.preventDefault(),this.#o(this.#a,"Please enter a text")),this.#a.validity.tooShort&&(e.preventDefault(),this.#o(this.#a,"Message is too short")),this.#a.validity.tooLong&&(e.preventDefault(),this.#o(this.#a,"Message is too long")),this.#a.validity.valid&&this.#o(this.#a,"")}/**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */#s(e){(""===this.#i.value.trim()||this.#t.validity.valueMissing)&&(e.preventDefault(),this.#o(this.#i,"Please enter an email")),this.#i.validity.typeMismatch&&(e.preventDefault(),this.#o(this.#i,"Sorry, invalid format here")),this.#i.validity.valid&&this.#m(this.#i,"")}/**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */#r(e){(""===this.#t.value.trim()||this.#t.validity.valueMissing)&&(e.preventDefault(),this.#o(this.#t,"Please enter a name")),this.#t.validity.tooShort&&(e.preventDefault(),this.#o(this.#t,"Name entered is too short")),this.#t.validity.tooLong&&(e.preventDefault(),this.#o(this.#t,"Name entered is too long")),this.#t.validity.patternMismatch&&(e.preventDefault(),this.#o(this.#t,"Please enter a name")),this.#t.validity.valid&&this.#m(this.#t,"")}/**
   *
   * @param {HTMLInputElement | HTMLTextAreaElement} formElement - The input or the textarea element
   * @param {string} message - The error message depending on what the user violates.
   * @return {void}
   */#o(e,t){e.setAttribute("aria-invalid","true");/**
     * This block is used to handle error messages in a form
     * It checks if the next sibling of the form element is a <p></p> with a class 'error-message'
     * If it does, we want to assign a variable error-message to it.
     * If it does not then we want to go to the next sibling.
     * @type {Element | null | undefined} errorMessage
     */let i=null;e.nextElementSibling?.classList.contains("error-message")?i=e.nextElementSibling:(i=e.nextElementSibling?.nextElementSibling,null!==e.nextElementSibling&&(e.nextElementSibling.className="icon-error__show icon-error")),i instanceof HTMLElement&&(i.innerText=t,i.removeAttribute("hidden"))}/**
   *
   * @param {HTMLInputElement | HTMLTextAreaElement} formElement - The input or the textarea element
   * @param {string} message - The error message depending on what the user violates.
   * @return {void}
   */#m(e,t){e.setAttribute("aria-invalid","false");/**
     * This block is used to handle error messages in a form
     * It checks if the next sibling of the form element is a <p></p> with a class 'error-message'
     * If it does, we want to assign a variable error-message to it.
     * If it does not then we want to go to the next sibling.
     * @type {Element | null | undefined} errorMessage
     */let i=null;e.nextElementSibling?.classList.contains("error-message")?i=e.nextElementSibling:(i=e.nextElementSibling?.nextElementSibling,null!==e.nextElementSibling&&(e.nextElementSibling.className="icon-error__hide icon-error")),i instanceof HTMLElement&&(i.innerText=t,i.setAttribute("hidden","hidden"))}}new e;// /**
//  * The class sets up the blue print for bootstrapping the animations
//  */
// class BootstrapAnimation {
//   #target;
//   /**
//    *
//    * @param {Node} target - The elements that we will be observing
//    */
//   constructor(target) {
//     this.#target = target;
//     this.#observeIntersection();
//   }
//   /**
//    *
//    * @param {Array<IntersectionObserverEntry>} entries
//    * @param {IntersectionObserver} observer
//    */
//   #handleIntersection(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('OnIt');
//         if (this.#target instanceof Element) {
//           observer.unobserve(this.#target);
//         }
//       }
//     });
//   }
//   /**
//    * This method will be called in the constructor to start the intersection observer.
//    */
//   #observeIntersection() {
//     const observerOptions = {
//       root: null,
//       threshold: 0.2,
//       rootMargin: '20px 0px 0px 0px'
//     };
//     const observer = new IntersectionObserver(
//       this.#handleIntersection.bind(this),
//       observerOptions
//     );
//     if (this.#target instanceof Element) {
//       observer.observe(this.#target);
//     }
//   }
// }
// /**
//  * The function will instantiate a class that would bootstrap the animation of the page when it loads. You should also be able to use window.addEventListener('load', callback)
//  * @return {void}
//  */
// function animateOnIt() {
//   const sections = /** @type {NodeList}*/ (
//     document.querySelectorAll('.animate')
//   );
//   sections.forEach(function (section) {
//     // Here due to line breaks which is interpreted as text node, the div element is the second child node in the section element while traversing the DOM.
//     const target = section.childNodes[1];
//     new BootstrapAnimation(target);
//   });
// }
// animateOnIt();
//# sourceMappingURL=index.fe8ab2ad.js.map

//# sourceMappingURL=index.fe8ab2ad.js.map
