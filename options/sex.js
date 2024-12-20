const sex = {
	options: ['male', 'female']
};

export const set_sex = function (container) {
	sex.options.forEach((item) => {
		const li = document.createElement('li');

		const option = document.createElement('input');
		option.type = 'radio';
		option.name = 'sex';
		option.value = item;

		if (item == 'male') option.checked = true;

		const label = document.createElement('label');
		label.innerText = item;

		li.appendChild(option);
		li.appendChild(label);

		container.appendChild(li);
	});
};

export default sex;
