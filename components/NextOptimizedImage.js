const alt_delim = ':=:', text_arr_delim = '^^^', text_delim = '$$$';
const def_alt = 'Santha Lakshmi Narayana', def_width = '100%', def_margin = '0%', def_text_arr = [];

export default function NextOptimizedImage({ img_props }) {
	//const imgSrc = require(`../images/${img_props.src}?resize?sizes[]=680,sizes[]=920,sizes[]=1024`);
	//const imgSrcWebp = require(`../images/${img_props.src}?resize?sizes[]=680,sizes[]=920,sizes[]=1024&format=webp`);
	const imgType = img_props.src.split('.').pop();

	let img_alt_array = [];
	let imgAlt = def_alt, imgWidth = def_width, extraMargin = def_margin, imgTextArr = def_text_arr;
	try {
		img_alt_array = img_props.alt.split(alt_delim);
		if (img_alt_array.length >= 1) {
			imgAlt = img_alt_array[0];
		}
		if (img_alt_array.length >= 2) {
			imgWidth = `${img_alt_array[1]}%`;
			extraMargin = `${(100 - img_alt_array[1]) / 2}%`;
		}
		if (img_alt_array.length == 3) {
			imgTextArr = img_alt_array[2].split(text_arr_delim);
		}
	} catch (err) {
		imgAlt = def_alt;
		imgWidth = def_width;
		extraMargin = def_margin;
		imgTextArr = def_text_arr;
	}
	return (
		<picture>
			{/*
			<picture>
	      <source srcSet={imgSrcWebp} type = "image/webp" />
	      <source srcSet={imgSrc} type = {imgType} />
	      <img src={imgSrc} alt = {imgAlt}
	      			style = {{ width: imgWidth,
								maxWidth: imgWidth,
								height: 'auto',
								marginLeft: extraMargin, }} />
			</picture>
			*/}
      <img src={'/images/'+img_props.src} alt = {imgAlt}
      			style = {{ width: imgWidth,
							maxWidth: imgWidth,
							height: 'auto',
							marginLeft: extraMargin, }} />

			<span className = 'img-text'>
				{(Array.isArray(imgTextArr) === true && imgTextArr.length > 0)?
					imgTextArr.map((item, index) => {
						const itemArr = item.split(text_delim);
						if (itemArr.length == 2) 
							return <a key = {itemArr[0]}
									href = {itemArr[1]}	
									target = '_blank' rel = 'noreferrer'>
									{itemArr[0]}
								</a>
						else
							return <span key = {itemArr[0]}>{itemArr[0]}</span>
					})
					: null
				}
			</span>

      <style jsx>{`
      	.img-text {
      		display: block;
      		text-align: center;
      		font-family: 'Source Sans Pro', sans-serif;
      		font-size: calc(0.8rem + 0.1vw);
      		color: #1d2b35;
      		overflow-wrap: 'break-word',
      	}

        a {
          margin: 0;
          text-decoration: none;
          color: #1d2b35;
          border-bottom: 1px solid;
        }
		  `}</style>
    </picture>
		)
}