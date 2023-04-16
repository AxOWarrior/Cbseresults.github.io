const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (username === '22284143','22284144','22284150','22284156','22284160','22284168' && password === 'AJ146643','MS166643','AT146643','AR156643','BP156643','JR166643') {
		open('file:///C:/Users/pc/Desktop/Super%20trash/html/LOL.html');
		
	} else {
		alert('Invalid Roll number or Admit Card ID.');
	}
});
    