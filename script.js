//spritesheet_.mixin(_.str.exports());

import options from './options/index.js';
import { set_sex } from './options/sex.js';
import { set_body } from './options/body.js';
import { set_hair } from './options/hair.js';
import { set_eyes } from './options/eyes.js';
import { set_nose } from './options/nose.js';
import { set_facial } from './options/facial.js';
import { set_clothes } from './options/clothes.js';
import { set_jacket } from './options/jacket.js';
import { set_legs } from './options/legs.js';
import { set_shoes } from './options/shoes.js';

window.onload = function () {
  const form = document.querySelector('[data-el="customizer-form"]');
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  for (let category in options) {
    const obj = options[category];
    const category_el = document.createElement('div');
    category_el.setAttribute('data-category', category);
    category_el.style.marginTop = '1rem';

    const category_title = document.createElement('label');
    category_title.innerText = category;
    category_el.appendChild(category_title);

    const category_options = document.createElement('ul');
    category_el.appendChild(category_options);

    if (category == 'sex') set_sex(category_options);
    if (category == 'body') set_body(category_options);
    if (category == 'hair') set_hair(category_options);
    if (category == 'eyes') set_eyes(category_options);
    if (category == 'nose') set_nose(category_options);
    if (category == 'facial') set_facial(category_options);
    if (category == 'clothes') set_clothes(category_options);
    if (category == 'jacket') set_jacket(category_options);
    if (category == 'legs') set_legs(category_options);
    if (category == 'shoes') set_shoes(category_options);
    form.appendChild(category_el);
  }

  const set_options = function (sex) {
    form.classList.remove('male', 'female');
    form.classList.add(sex);
  };

  const set_image_layers = function () {
    console.clear();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const formData = new FormData(form);
    let sex = formData.get('sex');
    let layer_index = 0;
    const layers = ['body', 'hair', 'eyes', 'nose', 'facial', 'clothes', 'jacket', 'legs', 'shoes'];

    const load_layer = function () {
      const layer = layers[layer_index];
      const data = formData.get(`${layer}=${sex}`);

      if (data) {
        const image = new Image();
        image.src = './spritesheets/' + data;

        image.onload = function () {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          layer_index++;

          if (layer_index >= layers.length) return;

          load_layer();
        };
      } else {
        layer_index++;

        if (layer_index >= layers.length) return;

        load_layer();
      }
    };

    load_layer();

    return sex;
  };

  const sex = set_image_layers();
  set_options(sex);

  form.addEventListener('change', function (event) {
    event.preventDefault();

    const sex = set_image_layers();
    set_options(sex);
  });

  const formDataToJson = function (formData) {
    const object = {};
    formData.forEach((value, key) => {
      if (object[key]) {
        if (Array.isArray(object[key])) {
          object[key].push(value);
        } else {
          object[key] = [object[key], value];
        }
      } else {
        object[key] = value;
      }
    });
    return object;
  };

  const export_sprite = function () {
    const url = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = url;
    link.download = 'canvas-image.png';
    link.click();

    const formData = new FormData(form);
    const formDataJson = formDataToJson(formData);
    console.log(formDataJson);
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    export_sprite();
  });
};
