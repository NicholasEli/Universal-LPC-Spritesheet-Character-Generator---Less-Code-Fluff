const eyes = [
  {
    name: 'Default'
  },
  {
    name: 'Blue',
    data: {
      female: 'body/female/eyes/blue.png',
      male: 'body/male/eyes/blue.png'
    }
  },
  {
    name: 'Brown',
    data: {
      female: 'body/female/eyes/brown.png',
      male: 'body/male/eyes/brown.png'
    }
  },
  {
    name: 'Gray',
    data: {
      female: 'body/female/eyes/gray.png',
      male: 'body/male/eyes/gray.png'
    }
  },
  {
    name: 'Green',
    data: {
      female: 'body/female/eyes/green.png',
      male: 'body/male/eyes/green.png'
    }
  },
  {
    name: 'Purple',
    data: {
      female: 'body/female/eyes/purple.png',
      male: 'body/male/eyes/purple.png'
    }
  },
  {
    name: 'Red',
    data: {
      female: 'body/female/eyes/red.png',
      male: 'body/male/eyes/red.png'
    }
  },
  {
    name: 'Yellow',
    data: {
      female: 'body/female/eyes/yellow.png',
      male: 'body/male/eyes/yellow.png'
    }
  },
  {
    name: 'Orange',
    data: {
      female: 'body/female/eyes/orange.png',
      male: 'body/male/eyes/orange.png'
    }
  }
];

export const set_eyes = function (container) {
  eyes.forEach((item) => {
    if (item.data) {
      Object.keys(item.data).forEach((sex) => {
        const li = document.createElement('li');
        li.setAttribute('data-sex', sex);

        const option = document.createElement('input');
        option.type = 'radio';
        option.name = 'eyes=' + sex;
        option.value = item.data[sex];

        const label = document.createElement('label');
        label.innerText = item.name;

        li.appendChild(option);
        li.appendChild(label);

        container.appendChild(li);
      });
    } else {
      const li = document.createElement('li');

      const option = document.createElement('input');
      option.type = 'radio';
      option.name = 'eyes';

      const label = document.createElement('label');
      label.innerText = item.name;

      li.appendChild(option);
      li.appendChild(label);

      container.appendChild(li);
    }
  });
};

export default eyes;
