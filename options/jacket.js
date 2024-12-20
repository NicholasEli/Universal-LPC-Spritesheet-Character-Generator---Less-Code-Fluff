const jacket = [
  {
    name: 'No Jacket'
  },
  {
    name: 'Tabard',
    data: {
      male: 'torso/chain/tabard/jacket_male.png',
      female: 'torso/chain/tabard/jacket_female.png}'
    }
  },
  {
    name: 'Tabard black',
    data: { male: 'torso/chain/tabard/male_tabard_black.png' }
  },
  {
    name: 'Tabard blue',
    data: { male: 'torso/chain/tabard/male_tabard_blue.png' }
  },
  {
    name: 'Tabard green',
    data: { male: 'torso/chain/tabard/male_tabard_green.png' }
  },
  {
    name: 'Tabard purple',
    data: { male: 'torso/chain/tabard/male_tabard_purple.png' }
  },
  {
    name: 'Tabard red',
    data: { male: 'torso/chain/tabard/male_tabard_red.png' }
  },
  {
    name: 'Tabard yellow',
    data: { male: 'torso/chain/tabard/male_tabard_yellow.png' }
  },
  {
    name: 'Formal iverness',

    data: { male: 'torso/chain/tabard/formal_iverness.png' }
  },
  {
    name: 'Formal black',

    data: { male: 'torso/chain/tabard/formal_jacket black.png' }
  },
  {
    name: 'Formal brown',

    data: { male: 'torso/chain/tabard/formal_jacket brown.png' }
  },
  {
    name: 'Striped brown',

    data: { male: 'torso/chain/tabard/formal_jacket brown stripes.png' }
  },
  {
    name: 'Formal tan',

    data: { male: 'torso/chain/tabard/formal_jacket tan.png' }
  },
  {
    name: 'Formal trench gray',

    data: { male: 'torso/chain/tabard/formal_trenchcoat grey.png' }
  },
  {
    name: 'Formal trench',

    data: { male: 'torso/chain/tabard/formal_trenchcoat.png' }
  },
  {
    name: 'Formal vest stripes',

    data: { male: 'torso/chain/tabard/formal_vest stripes.png' }
  },
  {
    name: 'Formal vest',

    data: { male: 'torso/chain/tabard/formal_vest.png' }
  },
  {
    name: 'Formal vest 2',
    data: { male: 'torso/chain/formal/9.png', female: 'torso/chain/formal/9.png' }
  },
  {
    name: 'Formal 2',
    data: { male: 'torso/chain/formal/8.png', female: 'torso/chain/formal/8.png' }
  }
];

export const set_jacket = function (container) {
  jacket.forEach((item) => {
    if (item.data) {
      Object.keys(item.data).forEach((sex) => {
        const li = document.createElement('li');
        li.setAttribute('data-sex', sex);

        const option = document.createElement('input');
        option.type = 'radio';
        option.name = 'jacket=' + sex;
        option.setAttribute('data-sex', sex);
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
      option.name = 'jacket';

      const label = document.createElement('label');
      label.innerText = item.name;

      li.appendChild(option);
      li.appendChild(label);

      container.appendChild(li);
    }
  });
};

export default jacket;
