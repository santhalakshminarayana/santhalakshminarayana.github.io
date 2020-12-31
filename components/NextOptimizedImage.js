const def_alt = 'Santha Lakshmi Narayana', def_width = '100%', def_margin = '0%';

export default function NextOptimizedImage({ img_props }) {
	const imgSrc = require(`../images/${img_props.src}?resize?sizes[]=680,sizes[]=920,sizes[]=1024`);
	const imgSrcWebp = require(`../images/${img_props.src}?resize?sizes[]=680,sizes[]=920,sizes[]=1024&format=webp`);
	const imgType = img_props.src.split('.').pop();

	let img_alt_array = [];
	let imgAlt = def_alt, imgWidth = def_width, extraMargin = def_margin;

	try {
		img_alt_array = img_props.alt.split(',');
		if (img_alt_array.length == 1) {
			imgAlt = img_alt_array[0];
		}
		else if (img_alt_array.length == 2) {
			imgAlt = img_alt_array[0];
			imgWidth = `${img_alt_array[1]}%`;
			extraMargin = `${(100 - img_alt_array[1]) / 2}%`;
		}
	} catch (err) {
		imgAlt = def_alt;
		imgWidth = def_width;
		extraMargin = def_margin;
	}

	return (
		<picture>
      <source srcSet={imgSrcWebp} type = "image/webp" />
      <source srcSet={imgSrc} type = {imgType} />
      <img src={imgSrc} alt = {imgAlt}
      			style = {{ width: imgWidth,
							maxWidth: imgWidth,
							height: 'auto',
							marginLeft: extraMargin, }} />
    </picture>
		)
}