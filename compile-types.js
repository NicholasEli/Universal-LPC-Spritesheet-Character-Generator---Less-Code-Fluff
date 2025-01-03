/**
 * This is meant to be placed in the base directory of the LPC Sprite Sheet repo
 * https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator
 *
 * run with "node compile-types.js" for output
 *
 * TODO
 * Make write file loop async - occassionaly a race condition happens causing JSON
 * to malform in longer files due to race conditions
 */

const folder = './sheet_definitions';
const fs = require('fs');

const TYPES = {};

fs.readdir(folder, (err, files) => {
	files.forEach((file, index) => {
		const file_path = folder + '/' + file;
		if (file_path.indexOf('json') == -1) return;
		obj = JSON.parse(fs.readFileSync(file_path, 'utf8'));

		const type = obj.type_name.toUpperCase().replaceAll(' ', '_');
		if (!TYPES[type]) TYPES[type] = {};

		/** Male based sprite references **/
		if (obj.layer_1 && obj.layer_1.male) {
			if (!TYPES[type].MALE) TYPES[type].MALE = {};

			obj.variants.forEach((variant) => {
				if (!variant || !obj.layer_1.male) return;
				const category_name = obj.name.toUpperCase().replaceAll(' ', '_');
				const variant_name = variant.toUpperCase().replaceAll(' ', '_');
				const key = category_name + '_' + variant_name;
				const path = obj.layer_1.male + variant.replaceAll(' ', '_') + '.png';
				TYPES[type].MALE[key] = path;
			});
		}

		/** Feale based sprite references **/
		if (obj.layer_1 && obj.layer_1.female) {
			if (!TYPES[type].FEMALE) TYPES[type].FEMALE = {};

			obj.variants.forEach((variant) => {
				if (!variant || !obj.layer_1.female) return;
				const category_name = obj.name.toUpperCase().replaceAll(' ', '_');
				const variant_name = variant.toUpperCase().replaceAll(' ', '_');
				const key = category_name + '_' + variant_name;
				const path = obj.layer_1.female + variant.replaceAll(' ', '_') + '.png';
				TYPES[type].FEMALE[key] = path;
			});
		}

		/** Will need extra cases for layers past 1 **/

		/**
		 * Write file(s)
		 */
		if (index == files.length - 1) {
			for (let type in TYPES) {
				const type_path = './types/PLAYER-' + type + '.js';
				const js =
					'const PLAYER_' +
					type +
					'=' +
					JSON.stringify(TYPES[type], null, 2) +
					'; export default ' +
					'PLAYER_' +
					type +
					';';

				fs.writeFile(type_path, js, (err) => {
					if (err) {
						console.error(err);
					}
				});
			}
		}
	});
});
