// proměnné
const rangeInput = document.getElementById("range");
const upperCaseInput = document.getElementById("uppercase");
const lowerCaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

const passwordOutput = document.getElementById("password_output");
const passwordLengthLabel = document.getElementById("passwordLength");

// řetězec charakterů stringu
const createStringChain = () => {
    let result = "";

    if (upperCaseInput.checked) {
        result += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCaseInput.checked) {
        result += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    }
    if (numbersInput.checked) {
        result += "0123456789";
    }
    if (symbolsInput.checked) {
        result += "!\"#\$%&'()*+,-./:;<=>?@[\]^_{|}~`";
    }
    return result;
}

// generovaní password
generateButton.addEventListener("click", (e) => {
    e.preventDefault();

    const stringChain = createStringChain();
    let passwordResult = "";

    for (let i = 1; i <= rangeInput.value; i++) {
        let index = Math.floor(Math.random() * stringChain.length);
        passwordResult += stringChain.charAt(index);
    }
    passwordOutput.value = passwordResult;
})

// zkopirovani textu
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordOutput.value);
})

// měnící se slider
rangeInput.addEventListener("input", () => {
    passwordLengthLabel.textContent = rangeInput.value;
})