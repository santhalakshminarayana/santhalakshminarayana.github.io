import Image from 'next/image';

const def_alt = 'Santha Lakshmi Narayana', def_width = 300, def_height = 200;
const img_quality = 50;

export default function NextImage({ img_props }) {
	let alt_split = [];
	try {
		alt_split = img_props.alt.split(',');
		if (alt_split.length == 0){
			alt_split = [def_alt, def_width, def_width];
		}
		else if (alt_split.length == 1) {
			alt_split.push(def_width);
			alt_split.push(def_height);
		}
		else if (alt_split.length == 2) {
			alt_split.push(def_height)
		}
		else {
			alt_split[1] = parseInt(alt_split[1]);
			alt_split[2] = parseInt(alt_split[2]);
		}
	} catch (err) {
		alt_split = [def_alt, def_width, def_width];
	}

	return (
		<div style = {{ width: '100%', maxWidth: '100%', height: 'auto' }} >
			<Image src = {img_props.src} alt = {alt_split[0]} width = {alt_split[1]} height = {alt_split[2]}
							layout = 'responsive' quality = {img_quality} loading  = 'lazy' />
		</div>
		)
}