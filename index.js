/** @format */

const binaryInput = document.querySelector(".binary");
const decimalOutput = document.querySelector(".decimal");

binaryInput.addEventListener("input", e => {
	e.preventDefault();

	setTimeout(() => {
		let binaryString = e.target.value;

		// Testing for valid binary number
		if (/[^01]/.test(binaryString)) {
			decimalOutput.classList.add("input", "error");

			return (decimalOutput.textContent = "Invalid digits");
		} else if (binaryString === "") {
			// If input is empty
			decimalOutput.classList.remove("error");
			decimalOutput.classList.add("input");

			return (decimalOutput.textContent = "...");
		}

		decimalOutput.classList.add("input");
		decimalOutput.classList.remove("error");

		decimalOutput.textContent = binToDec(binaryString);
	}, 500);
});
// Converting binary number to decimal
const binToDec = binaryString => {
	return parseInt((binaryString + "").replace(/[^01]/gi, ""), 2);
};
