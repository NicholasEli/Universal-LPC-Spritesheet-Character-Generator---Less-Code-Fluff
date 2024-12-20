const shoes = [
  {
    name: 'No Shoes'
  },
  {
    category: 'Armour',
    options: [
      {
        name: 'Shoes 1',
        data: {
          male: 'feet/armor/male/4.png',
          female: 'feet/armor/female/4.png'
        }
      },
      {
        name: 'Shoes 2',
        data: {
          male: 'feet/armor/male/5.png',
          female: 'feet/armor/female/5.png'
        }
      },
      {
        name: 'Shoes 3',
        data: {
          male: 'feet/armor/male/6.png',
          female: 'feet/armor/female/6.png'
        }
      },
      {
        name: 'Shoes 4',
        data: {
          male: 'feet/armor/male/7.png',
          female: 'feet/armor/female/7.png'
        }
      },
      {
        name: 'Shoes 5',
        data: {
          male: 'feet/armor/male/8.png',
          female: 'feet/armor/female/8.png'
        }
      },
      {
        name: 'Shoes 6',
        data: {
          male: 'feet/armor/male/9.png',
          female: 'feet/armor/female/9.png'
        }
      }
    ]
  },
  {
    name: 'Black Shoes',
    data: {
      male: 'feet/shoes/male/black_shoes_male.png',
      female: 'feet/shoes/female/black_shoes_female.png'
    }
  },
  {
    name: 'Brown Shoes',
    data: {
      male: 'feet/shoes/male/brown_shoes_male.png',
      female: 'feet/shoes/female/brown_shoes_female.png'
    }
  },
  {
    name: 'Maroon Shoes',
    data: {
      male: 'feet/shoes/male/maroon_shoes_male.png',
      female: 'feet/shoes/female/maroon_shoes_female.png'
    }
  },
  {
    name: "Sara's Shoes",
    data: {
      female: 'feet/shoes/female/SaraShoes.png'
    }
  },
  {
    name: 'Roman Sandals',
    data: {
      male: 'feet/shoes/Male_sandals.png',
      female: 'feet/shoes/Female_sandals.png'
    }
  },
  {
    name: 'Ghillies',
    data: {
      female: 'feet/ghillies_female_no_th-sh.png'
    }
  },
  {
    name: 'Black Slippers',
    data: {
      female: 'feet/slippers_female/black.png'
    }
  },
  {
    name: 'Brown Slippers',
    data: {
      female: 'feet/slippers_female/brown.png'
    }
  },
  {
    name: 'Gray Slippers',
    data: {
      female: 'feet/slippers_female/gray.png'
    }
  },
  {
    name: 'White Slippers',
    data: {
      female: 'feet/slippers_female/white.png'
    }
  },
  {
    name: 'Brown Boots',
    data: {
      female: 'feet/shoes/LongBoots_brown.png'
    }
  },
  {
    name: 'Dark Boots',
    data: {
      female: 'feet/shoes/LongBoots_dark.png'
    }
  }
];

export const set_shoes = function (container) {
  shoes.forEach((item) => {
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
          option.name = 'shoes=' + sex;
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
      if (item.data) {
        Object.keys(item.data).forEach((sex) => {
          const _li = document.createElement('li');
          _li.setAttribute('data-sex', sex);

          const option = document.createElement('input');
          option.type = 'radio';
          option.name = 'shoes=' + sex;

          option.value = item.data[sex];

          const label = document.createElement('label');
          label.innerText = item.name;

          _li.appendChild(option);
          _li.appendChild(label);

          container.appendChild(_li);
        });
      } else {
        li.setAttribute('data-sex', 'both');

        const option = document.createElement('input');
        option.type = 'radio';
        option.name = 'shoes';
        option.value = item;

        const label = document.createElement('label');
        label.innerText = item.name;

        li.appendChild(option);
        li.appendChild(label);

        container.appendChild(li);
      }
    }
  });
};

export default shoes;
