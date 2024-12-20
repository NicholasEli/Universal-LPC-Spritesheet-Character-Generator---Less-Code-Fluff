const legs = [
  {
    name: 'No Legs'
  },
  {
    category: 'Tight Dress',
    options: [
      {
        name: 'Black',
        data: { female: 'torso/shirts/dress/TightDress_black.png' }
      },
      {
        name: 'Blue',
        data: { female: 'torso/shirts/dress/TightDress_lightblue.png' }
      },
      {
        name: 'Red',
        data: { female: 'torso/shirts/dress/TightDress_red.png' }
      },
      {
        name: 'White',
        data: { female: 'torso/shirts/dress/TightDress_white.png' }
      }
    ]
  },
  {
    category: 'Pants',
    options: [
      {
        name: 'Large Black',
        data: { male: 'legs/pants/Pants_black.png', female: 'legs/pants/Pants_black.png' }
      },
      {
        name: 'Large Blue',
        data: { male: 'legs/pants/Pants_blue.png', female: 'legs/pants/Pants_blue.png' }
      },
      {
        name: 'Large brown',
        data: 'legs/pants/Pants_brown.png'
      },
      {
        name: 'Formal',
        data: { male: 'legs/pants/male/formal_pants.png' }
      },
      {
        name: 'Formal stripes',
        data: { male: ' legs/pants/male/formal_pants stripes.png' }
      },
      {
        name: 'Muscular white',
        data: {
          male: 'legs/pants/male/musc_pants_white.png'
        }
      },
      {
        name: 'Black',
        data: {
          male: 'legs/pants/male/male_pants_black.png'
        }
      },
      {
        name: 'blue',
        data: {
          male: 'legs/pants/male/male_pants_blue.png'
        }
      },
      {
        name: 'brown',
        data: {
          male: 'legs/pants/male/male_pants_brown.png'
        }
      },
      {
        name: 'green',
        data: {
          male: 'legs/pants/male/male_pants_green.png'
        }
      },
      {
        name: 'purple',
        data: {
          male: 'legs/pants/male/male_pants_purple.png'
        }
      },
      {
        name: 'red',
        data: {
          male: 'legs/pants/male/male_pants_red.png'
        }
      },
      {
        name: 'yellow',
        data: {
          male: 'legs/pants/male/male_pants_yellow.png'
        }
      },
      {
        name: 'Magenta',
        data: {
          male: 'legs/pants/male/magenta_pants_male.png',
          female: 'legs/pants/female/magenta_pants_female.png'
        }
      },
      {
        name: 'Teal',
        data: {
          male: 'legs/pants/male/teal_pants_male.png',
          female: 'legs/pants/female/teal_pants_female.png'
        }
      },
      {
        name: 'White',
        data: {
          male: 'legs/pants/male/white_pants_male.png',
          female: 'legs/pants/female/white_pants_female.png'
        }
      }
    ]
  }
];

export const set_legs = function (container) {
  legs.forEach((item) => {
    const li = document.createElement('li');

    if (item.options) {
      const ul = document.createElement('ul');

      const category = document.createElement('li');
      category.classList.add('category');
      category.innerText = item.category;
      li.appendChild(category);

      item.options.forEach((_item) => {
        Object.keys(_item.data).forEach((sex) => {
          const _li = document.createElement('li');
          _li.setAttribute('data-sex', sex);

          const option = document.createElement('input');
          option.type = 'radio';
          option.name = 'legs=' + sex;
          option.value = _item.data[sex];

          const label = document.createElement('label');
          label.innerText = _item.name;

          _li.appendChild(option);
          _li.appendChild(label);

          ul.appendChild(_li);
        });
      });

      li.appendChild(ul);
      container.appendChild(li);
    } else {
      const option = document.createElement('input');
      option.type = 'radio';
      option.name = 'legs';
      option.value = item;

      const label = document.createElement('label');
      label.innerText = item.name;

      li.appendChild(option);
      li.appendChild(label);

      container.appendChild(li);
    }
  });
};

export default legs;
