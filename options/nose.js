const nose = [
  { name: 'No Nose' },
  {
    category: 'Big Nose',
    options: [
      {
        name: 'Light',
        data: {
          male: 'body/male/nose/bignose_light.png',
          female: 'body/female/nose/bignose_light.png'
        }
      },
      {
        name: 'dark',
        data: {
          male: 'body/male/nose/bignose_dark.png',
          female: 'body/female/nose/bignose_dark.png'
        }
      },
      {
        name: 'dark2',
        data: {
          male: 'body/male/nose/bignose_dark2.png',
          female: 'body/female/nose/bignose_dark2.png'
        }
      },
      {
        name: 'darkelf',
        data: {
          male: 'body/male/nose/bignose_darkelf.png',
          female: 'body/female/nose/bignose_darkelf.png'
        }
      },
      {
        name: 'darkelf2',
        data: {
          male: 'body/male/nose/bignose_darkelf2.png',
          female: 'body/female/nose/bignose_darkelf2.png'
        }
      },
      {
        name: 'tanned',
        data: {
          male: 'body/male/nose/bignose_tanned.png',
          female: 'body/female/nose/bignose_tanned.png'
        }
      },
      {
        name: 'tanned2',
        data: {
          male: 'body/male/nose/bignose_tanned2.png ',
          female: 'body/female/nose/bignose_tanned2.png'
        }
      }
    ]
  },
  {
    category: 'Button Nose',
    options: [
      {
        name: 'Light',
        data: {
          male: 'body/male/nose/buttonnose_light.png',
          female: 'body/female/nose/buttonnose_light.png'
        }
      },
      {
        name: 'Dark',
        data: {
          male: 'body/male/nose/buttonnose_dark.png',
          female: 'body/female/nose/buttonnose_dark.png'
        }
      },
      {
        name: 'Dark2',
        data: {
          male: 'body/male/nose/buttonnose_dark2.png',
          female: 'body/female/nose/buttonnose_dark2.png'
        }
      },
      {
        name: 'DarkElf',
        data: {
          male: 'body/male/nose/buttonnose_darkelf.png',
          female: 'body/female/nose/buttonnose_darkelf.png'
        }
      },
      {
        name: 'DarkElf2',
        data: {
          male: 'body/male/nose/buttonnose_darkelf2.png',
          female: 'body/female/nose/buttonnose_darkelf2.png'
        }
      },
      {
        name: 'Tanned',
        data: {
          male: 'body/male/nose/buttonnose_tanned.png',
          female: 'body/female/nose/buttonnose_tanned.png'
        }
      },
      {
        name: 'Tanned2',
        data: {
          male: 'body/male/nose/buttonnose_tanned2.png',
          female: 'body/female/nose/buttonnose_tanned2.png'
        }
      }
    ]
  },
  {
    category: 'Straight Nose',
    options: [
      {
        name: 'Light',
        data: {
          male: 'body/male/nose/straightnose_light.png',
          female: 'body/female/nose/straightnose_light.png'
        }
      },
      {
        name: 'Dark',
        data: {
          male: 'body/male/nose/straightnose_dark.png',
          female: 'body/female/nose/straightnose_dark.png'
        }
      },
      {
        name: 'Dark2',
        data: {
          male: 'body/male/nose/straightnose_dark2.png',
          female: 'body/female/nose/straightnose_dark2.png'
        }
      },
      {
        name: 'DarkElf',
        data: {
          male: 'body/male/nose/straightnose_darkelf.png',
          female: 'body/female/nose/straightnose_darkelf.png'
        }
      },
      {
        name: 'DarkElf2',
        data: {
          male: 'body/male/nose/straightnose_darkelf2.png',
          female: 'body/female/nose/straightnose_darkelf2.png'
        }
      },
      {
        name: 'Tanned',
        data: {
          male: 'body/male/nose/straightnose_tanned.png',
          female: 'body/female/nose/straightnose_tanned.png'
        }
      },
      {
        name: 'Tanned2',
        data: {
          male: 'body/male/nose/straightnose_tanned2.png',
          female: 'body/female/nose/straightnose_tanned2.png'
        }
      }
    ]
  }
];

export const set_nose = function (container) {
  nose.forEach((item) => {
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
          option.name = 'nose=' + sex;
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
      option.name = 'nose';
      option.value = item;

      const label = document.createElement('label');
      label.innerText = item.name;

      li.appendChild(option);
      li.appendChild(label);

      container.appendChild(li);
    }
  });
};

export default nose;
