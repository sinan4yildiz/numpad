(function () {
    "use strict";

    /*
    * @param {string} el The element to which the keypad is attached.
    *
    * */
    class numericKeypad {
        constructor(el) {
            this.el = el;

            this.nums = [
                {
                    value: 1,
                    color: "#6F98A8",
                },
                {
                    value: 2,
                    color: "#2B8EAD",
                },
                {
                    value: 3,
                    color: "#2F454E",
                },
                {
                    value: 4,
                    color: "#2B8EAD",
                },
                {
                    value: 5,
                    color: "#2F454E",
                },
                {
                    value: 6,
                    color: "#BFBFBF",
                },
                {
                    value: 7,
                    color: "#BFBFBF",
                },
                {
                    value: 8,
                    color: "#6F98A8",
                },
                {
                    value: 9,
                    color: "#2F454E",
                },
            ]
        }


        render() {
            document.querySelector(this.el).innerHTML = '<ol>123</ol>';
        }
    }

    // Create an instance
    const numPad = new numericKeypad('article');

    // Initial rendering
    numPad.render();

})();