const inputRef = document.querySelector("input#validation-input")

const validationText = () => {
    
	if (inputRef.value.length !== +inputRef.getAttribute("data-length")) {
		inputRef.classList.add("invalid")
        inputRef.classList.remove("valid")
	} else {
		inputRef.classList.add("valid")
        inputRef.classList.remove("invalid")
    } 
}
inputRef.addEventListener("change", validationText)