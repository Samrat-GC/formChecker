const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
var i;

// Show input error message
const showError = (input, message) => {
	input.parentElement.classList.remove('success');
	input.parentElement.classList.add('error');
	const small = input.parentElement.querySelector('small');
	small.textContent = message;
	small.style.display = 'inline-block';
}


// Show success outline
const showSuccess= input => {
	input.parentElement.classList.remove('error');
	input.parentElement.classList.add('success');
	input.parentElement.querySelector('small').style.display = 'none';

}

// Check email is valid
const isValidEmail = email => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const checkEmail = email => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// return re.test(String(email).toLowerCase());
	if(re.test(email.value)){
		showSuccess(email);
	}else{
		showError(email, 'Email should be normal');
	}
}

// Check required fields
const checkRequired = inputArr => {
	inputArr.forEach(item => {
		if(item.value.trim() === ''){
			showError(item, `${getFieldName(item)} is required`)
		}else {
			showSuccess(item);
		}
	})
}

// Check Input Fields
const checkLength = (input, min, max) => {
	if(input.value.length < min ){
		showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
	}else if(input.value.length > max){
		showError(input, `${getFieldName(input)} must be less than ${max} characters`)

	}else{
		showSuccess(input);
	}
}

// Check password 
const checkPassowrd = input => {
	const validator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
	// const result = validator.test(input.value.trim());
	if(validator.test(input.value.trim())){
		showSuccess(input);
	}else{
		showError(input, `Use 8 or more characters with a mix of letters, numbers & symbols`)
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2){
	if(input1.value === input2.value && input2.value){
		showSuccess(input2);
	}else{
		showError(input2, 'Password don\'t match')
	}
}


// Get Fieldname

const getFieldName = input => {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('click', e => {
	if(e.target.classList.contains('fa-eye')){
		e.target.classList.remove('fa-eye');
		e.target.classList.add('fa-eye-slash');
		e.target.previousElementSibling.setAttribute('type', 'password')
	}else if (e.target.classList.contains('fa-eye-slash')){
		e.target.classList.remove('fa-eye-slash');
		e.target.classList.add('fa-eye');
		e.target.previousElementSibling.setAttribute('type', 'type')
	}
})

//Event listeners
form.addEventListener('keyup', e => {
	e.preventDefault();

 switch (e.target.id){
	 case 'username':
		 checkLength(username, 6, 15);
		 break;
	
		case 'email':
			checkEmail(email);
			break;
		
		case 'password':
			checkPassowrd(password);
			if(i){
				checkPasswordsMatch(password, password2);
			}
			break
		
		case 'password2':
			checkPasswordsMatch(password, password2);
			i = 1;

			break;
 }
})

	form.addEventListener('submit', e=> {

	})
	// checkRequired([username, email, password, password2]);
	// checkLength(username, 6, 15);
	// checkLength(password, 6,  25);
	// console.log(email.value);
	// checkEmail(email);
	// checkPasswordsMatch(password, password2)

	// if(username.value === ''){
	// 	showError(username, 'Username is required');
	// } else {
	// 	showSuccess(username);
	// }

	// if(email.value === ''){
	// 	showError(email, 'email is required');
	// }else if(!isValidEmail(email.value)){
	// 	showError(email, 'email should be regular')
	// } else {
	// 	showSuccess(email);
	// }

	// if(password.value === ''){
	// 	showError(password, 'password is required');
	// } else {
	// 	showSuccess(password);
	// }

	// if(password2.value !== password.value){
	// 	showError(password2, 'password doesn\'t match');
	// } else {
	// 	showSuccess(password2);
	// }
