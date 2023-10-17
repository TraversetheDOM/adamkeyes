/**
 * Create a FormComponent class with all the elements in the form and the form itself.
 */
class FormComponent {
  #form = /** @type {HTMLFormElement}*/ (document.getElementById('form'));
  #name = /** @type {HTMLInputElement} */ (document.getElementById('name'));
  #email = /** @type {HTMLInputElement} */ (document.getElementById('email'));
  #textarea = /** @type {HTMLTextAreaElement} */ (
    document.getElementById('message')
  );

  /**
   * Takes in no argument or parameter
   */
  constructor() {
    this.#form.addEventListener('submit', this.#submitForm.bind(this));
  }

  /**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */
  #submitForm(evtObj) {
    this.#validateName(evtObj);
    this.#validateEmail(evtObj);
    this.#validateText(evtObj);
  }

  /**
   * @param {Event} evtObj - The event interface that takes place on the form
   * @return {void}
   */
  #validateText(evtObj) {
    if (
      this.#textarea.value.trim() === '' ||
      this.#textarea.validity.valueMissing
    ) {
      evtObj.preventDefault();
      this.#showErrorState(this.#textarea, 'Please enter a text');
    }

    // Check if the number of characters the user entered is shorter than expected
    if (this.#textarea.validity.tooShort) {
      evtObj.preventDefault();
      this.#showErrorState(this.#textarea, 'Message is too short');
    }

    //  Check if the number of characters the user entered is longer than the expected.
    if (this.#textarea.validity.tooLong) {
      evtObj.preventDefault();
      this.#showErrorState(this.#textarea, 'Message is too long');
    }

    // The user has met all the conditions for the rule to be valid.
    if (this.#textarea.validity.valid) {
      this.#showErrorState(this.#textarea, '');
    }
  }

  /**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */
  #validateEmail(evtObj) {
    // Throw and error to the user if nothing is entered when the form is submitted.
    if (this.#email.value.trim() === '' || this.#name.validity.valueMissing) {
      evtObj.preventDefault();
      this.#showErrorState(this.#email, 'Please enter an email');
    }

    // If the user enters an email with no '@' or '.org', '.com', etc we throw and error.
    if (this.#email.validity.typeMismatch) {
      evtObj.preventDefault();
      this.#showErrorState(this.#email, 'Sorry, invalid format here');
    }

    // The user has met all the conditions for the field to be valid.
    if (this.#email.validity.valid) {
      this.#removeErrorState(this.#email, '');
    }
  }

  /**
   * @param {Event} evtObj - The event interface that takes place on the form.
   * @return {void} - This method returns nothing
   */
  #validateName(evtObj) {
    // Throw an error to the user if nothing is entered when the form is submitted.
    if (this.#name.value.trim() === '' || this.#name.validity.valueMissing) {
      evtObj.preventDefault();
      this.#showErrorState(this.#name, 'Please enter a name');
    }

    // Check if the number of characters the user entered is shorter than expected
    if (this.#name.validity.tooShort) {
      evtObj.preventDefault();
      this.#showErrorState(this.#name, 'Name entered is too short');
    }

    // Check if the number of characters the user entered is longer than the expected.
    if (this.#name.validity.tooLong) {
      evtObj.preventDefault();
      this.#showErrorState(this.#name, 'Name entered is too long');
    }

    // Check if the user enters a number and not a string.
    if (this.#name.validity.patternMismatch) {
      evtObj.preventDefault();
      this.#showErrorState(this.#name, 'Please enter a name');
    }

    // All other conditions should be valid.
    if (this.#name.validity.valid) {
      this.#removeErrorState(this.#name, '');
    }
  }

  /**
   *
   * @param {HTMLInputElement | HTMLTextAreaElement} formElement - The input or the textarea element
   * @param {string} message - The error message depending on what the user violates.
   * @return {void}
   */
  #showErrorState(formElement, message) {
    formElement.setAttribute('aria-invalid', 'true');
    /**
     * This block is used to handle error messages in a form
     * It checks if the next sibling of the form element is a <p></p> with a class 'error-message'
     * If it does, we want to assign a variable error-message to it.
     * If it does not then we want to go to the next sibling.
     * @type {Element | null | undefined} errorMessage
     */
    let errorMessage = null;

    if (formElement.nextElementSibling?.classList.contains('error-message')) {
      errorMessage = formElement.nextElementSibling;
    } else {
      errorMessage = formElement.nextElementSibling?.nextElementSibling;
      if (formElement.nextElementSibling !== null) {
        formElement.nextElementSibling.className =
          'icon-error__show icon-error';
      }
    }

    if (errorMessage instanceof HTMLElement) {
      errorMessage.innerText = message;
      errorMessage.removeAttribute('hidden');
    } else {
      return;
    }
  }

  /**
   *
   * @param {HTMLInputElement | HTMLTextAreaElement} formElement - The input or the textarea element
   * @param {string} message - The error message depending on what the user violates.
   * @return {void}
   */
  #removeErrorState(formElement, message) {
    formElement.setAttribute('aria-invalid', 'false');
    /**
     * This block is used to handle error messages in a form
     * It checks if the next sibling of the form element is a <p></p> with a class 'error-message'
     * If it does, we want to assign a variable error-message to it.
     * If it does not then we want to go to the next sibling.
     * @type {Element | null | undefined} errorMessage
     */
    let errorMessage = null;

    if (formElement.nextElementSibling?.classList.contains('error-message')) {
      errorMessage = formElement.nextElementSibling;
    } else {
      errorMessage = formElement.nextElementSibling?.nextElementSibling;
      if (formElement.nextElementSibling !== null) {
        formElement.nextElementSibling.className =
          'icon-error__hide icon-error';
      }
    }

    if (errorMessage instanceof HTMLElement) {
      errorMessage.innerText = message;
      errorMessage.setAttribute('hidden', 'hidden');
    } else {
      return;
    }
  }
}

new FormComponent();

// /**
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
