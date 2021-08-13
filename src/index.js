(function () {
    "use strict";

    /*
    * @param {string} element
    * The element to which the keypad is attached.
    *
    * */
    class numericKeypad {
        constructor(element) {
            this.element = element;
        }

        /*
        * Renders the keypad into specified element
        *
        * */
        render(shuffle = false) {

            /*
            * Create parent element
            *
            * */
            const ol = document.createElement('ol');

            for (var i = 1; i <= 9; i++) {

                /*
                * Create child elements
                *
                * */
                const li = document.createElement('li'),
                    button = document.createElement('button');

                /*
                * Button text and attributes
                *
                * */
                button.setAttribute('type', 'button');
                button.setAttribute('data-value', i);
                button.innerText = i;

                // Append the number button
                li.append(button);

                // Append the list item
                ol.appendChild(li);
            }


            /*
            * Shuffle the numbers
            *
            * */
            if(shuffle) {
                for (var c = ol.children.length; c >= 0; c--) {
                    ol.appendChild(ol.children[Math.random() * c | 0]);
                }
            }


            /*
            * Put the markup
            *
            * */
            const parent = document.querySelector(this.element);

            if(parent.firstChild) {
                parent.firstChild.remove();
            }

            parent.appendChild(ol);
        }
    }

    /*
    * Create an instance
    *
    * */
    const numPad = new numericKeypad("article");


    /*
    * Initial rendering
    *
    * */
    numPad.render();


    /*
    * Shuffle numbers
    *
    * */
    document.querySelector('#shuffle').addEventListener('click', () => {
        numPad.render(true);
    });


    /*
    * Sort numbers
    *
    * */
    document.querySelector('#sort').addEventListener('click', () => {
        numPad.render();
    });


})();