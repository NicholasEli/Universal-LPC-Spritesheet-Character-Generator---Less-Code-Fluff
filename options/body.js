const body = {
	options: [
		{
			name: 'White',
			data: {
				female: 'body/female/woman-white.png',
				male: 'body/male/man-white.png'
			}
		},
		{
			name: 'Black',
			data: {
				female: 'body/female/woman-black.png',
				male: 'body/male/man-black.png'
			}
		},
		{
			name: 'Olive',
			data: {
				female: 'body/female/woman-olive.png',
				male: 'body/male/man-olive.png'
			}
		},
		{
			name: 'Brown',
			data: {
				female: 'body/female/woman-brown.png',
				male: 'body/male/man-brown.png'
			}
		},
		{
			name: 'Peach',
			data: {
				female: 'body/female/woman-peach.png',
				male: 'body/male/man-peach.png'
			}
		},
		{
			name: 'Light',
			data: {
				female: 'body/female/light.png',
				male: 'body/male/light.png'
			}
		},
		{
			name: 'Dark',
			data: {
				female: 'body/female/dark.png',
				male: 'body/male/dark.png'
			}
		},
		{
			name: 'Dark 2',
			data: {
				male: 'body/female/dark2.png'
			}
		},
		{
			name: 'Tan 1',
			data: {
				female: 'body/female/tanned.png',
				male: 'body/male/tanned.png'
			}
		},
		{
			name: 'Tan 2',
			data: {
				female: 'body/female/tanned2.png',
				male: 'body/male/tanned2.png'
			}
		},
		{
			name: 'Barb 1',
			data: {
				male: 'body/male/muscular_white.png'
			}
		},
		{
			name: 'Barb 2',
			data: {
				male: 'body/male/muscular_dark.png'
			}
		}
	]
};

export const set_body = function (container) {
	body.options.forEach((item) => {
		Object.keys(item.data).forEach((sex) => {
			const li = document.createElement('li');
			li.setAttribute('data-sex', sex);

			const option = document.createElement('input');
			option.type = 'radio';
			option.name = 'body=' + sex;
			option.value = item.data[sex];

			if (sex == 'male' && item.name == 'White') {
				option.checked = true;
			}

			const label = document.createElement('label');
			label.innerText = item.name;

			li.appendChild(option);
			li.appendChild(label);
			container.appendChild(li);
		});
	});
};

export default body;
