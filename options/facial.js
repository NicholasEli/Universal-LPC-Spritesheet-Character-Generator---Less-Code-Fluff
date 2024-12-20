const facial = [
  { name: 'No Facial' },
  {
    category: 'Covering',
    options: [
      {
        name: 'Mask',
        data: { female: 'facial/Female_mask.png', male: 'facial/Male_mask.png' }
      },
      {
        name: 'Mask dark',
        data: { female: 'facial/Male_maskDark.png', male: 'facial/Male_maskDark.png' }
      },
      {
        name: 'Glasses',
        data: { female: 'facial/formal_glasses.png', male: 'facial/formal_glasses.png' }
      },
      {
        name: 'Monocle',
        data: { female: 'facial/formal_monocle.png', male: 'facial/formal_monocle.png' }
      },
      { name: 'Patch', data: { male: 'facial/5.png', female: 'facial/5.png' } },
      {
        name: 'Sunglasses',
        data: { male: 'facial/3.png', female: 'facial/3.png' }
      }
    ]
  },
  {
    category: 'Bigstache',
    options: [
      {
        name: 'bigstache',
        data: { male: 'facial/male/bigstache/black.png' }
      },
      {
        name: 'bigstache',
        data: { male: 'facial/male/bigstache/blonde.png' }
      },
      {
        name: 'bigstache',
        data: { male: 'facial/male/bigstache/blue.png' }
      }
    ]
  },
  {
    category: 'Mustache',

    options: [
      {
        name: 'mustache',
        data: { male: 'facial/male/mustache/black.png' }
      },
      {
        name: 'mustache',
        data: { male: 'facial/male/mustache/blonde.png' }
      },
      {
        name: 'mustache',
        data: { male: 'facial/male/mustache/blue.png' }
      }
    ]
  }
];

export const set_facial = function (container) {
  facial.forEach((item) => {
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
          option.name = 'facial=' + sex;
          option.setAttribute('data-sex', sex);
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
      option.name = 'facial';
      option.value = item;

      const label = document.createElement('label');
      label.innerText = item.name;

      li.appendChild(option);
      li.appendChild(label);

      container.appendChild(li);
    }
  });
};

export default facial;
