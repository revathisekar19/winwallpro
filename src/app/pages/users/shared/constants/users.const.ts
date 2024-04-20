export function passwordValidation() {
    const myInput = document.getElementById("password-input") as HTMLInputElement;
    const letter = document.getElementById("pass-lower");
    const capital = document.getElementById("pass-upper");
    const number = document.getElementById("pass-number");
    const length = document.getElementById("pass-length");

    myInput.onfocus = function () {
        let input = document.getElementById("password-contain") as HTMLElement;
        input.style.display = "block"
    };

    myInput.onblur = function () {
        let input = document.getElementById("password-contain") as HTMLElement;
        input.style.display = "none"
    };

    myInput.onkeyup = function () {
        const lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter?.classList.remove("invalid");
            letter?.classList.add("valid");
        } else {
            letter?.classList.remove("valid");
            letter?.classList.add("invalid");
        }

        const upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital?.classList.remove("invalid");
            capital?.classList.add("valid");
        } else {
            capital?.classList.remove("valid");
            capital?.classList.add("invalid");
        }

        const numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number?.classList.remove("invalid");
            number?.classList.add("valid");
        } else {
            number?.classList.remove("valid");
            number?.classList.add("invalid");
        }

        if (myInput.value.length >= 8) {
            length?.classList.remove("invalid");
            length?.classList.add("valid");
        } else {
            length?.classList.remove("valid");
            length?.classList.add("invalid");
        }
    };
}