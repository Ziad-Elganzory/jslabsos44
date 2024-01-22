const form = document.querySelector(`form`);
const userName = document.querySelector('.username');
const userPass = document.querySelector('.userpass');
const submitBtn = document.querySelector('.submit-btn');

const message = document.querySelector(`.message`);

function validateUserName(element) {
	const regex = /^[a-zA-Z][\w|_]*/g;
	return regex.test(element.value.trim());
}

function insertMessage(element, message, type, id) {
	const messageClass = type === 'valid' ? 'valid-message' : 'error-message';
	const messageElement = `<p class="input-message ${messageClass} message-id-${id}">
				<i class="fa-solid fa-circle-check"></i>
        ${message}
			  </p>`;

	const messageContainer = document.querySelector(`.message-id-${id}`);
	if (messageContainer) {
		messageContainer.remove();
	}

	element.insertAdjacentHTML('afterend', messageElement);
}


form.addEventListener(`submit`, (e) => {
	e.preventDefault();
	const submitionObj = {
		username: userName.value,
		userpass: userPass.value,
	};
	if (validateUserName(userName) && submitionObj.userpass.length >= 3) {
		if (submitionObj.username === 'admin' && submitionObj.userpass === '123') {
			message.classList.remove('hidden');
			message.textContent = `Welcome ${submitionObj.username}`;
		} else {
			message.classList.remove('hidden');
			message.textContent = `${submitionObj.username} Not Registered`;
		}
	} else {
		message.classList.remove('hidden');
		message.textContent = 'Invalid Inputs';
	}
});

userName.addEventListener('focusout', (e) => {
	const valid = validateUserName(e.target);
	if (valid) {
		userName.classList.add('valid');
		userName.classList.remove('error');
		insertMessage(e.target, 'Valid User Name', 'valid', 1);
	} else {
		userName.classList.add('error');
		userName.classList.remove('valid');
		insertMessage(e.target, 'Invalid User Name', 'error', 1);
	}
});

userPass.addEventListener('focusout', (e) => {
	const valid = e.target.value.length >= 3 ? true : false;
	if (valid) {
		userPass.classList.add('valid');
		userPass.classList.remove('error');
		insertMessage(e.target, 'Valid Password', 'valid', 2);
	} else {
		userPass.classList.add('error');
		userPass.classList.remove('valid');
		insertMessage(e.target, 'The password must be at least 3 characters', 'error', 2);
	}
});
