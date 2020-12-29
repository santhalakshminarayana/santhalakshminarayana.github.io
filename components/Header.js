import { useState } from 'react';
import Link from 'next/link';

import Tags from './Tags.js';

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const header = c4, header_left_link = c6, header_left_link_hover = c3, header_left_link_active = c5;
const header_right_link = c6, header_right_link_hover = c3, header_right_link_active = c5;

export default function Header(props) {
	const [showTags, setShowTags] = useState('none');

	function handleTagsClick(e) {
		e.preventDefault();
		if (showTags == 'none') 
			setShowTags('block');
		else
			setShowTags('none');
	}

	return (
		<div className = 'header'>
			<div className = 'header-container'>
	      <div className = 'header-left'>
	      	<Link href = '/'>
	          <img src = '/images/santha-lakshmi-narayana-logo.png' alt = 'Home' />
	      	</Link>
	        <Link href = '/'><a id = 'name'><b>Santha Lakshmi Narayana</b></a></Link>
	      </div>

	      <div className = 'header-right'>
	        <Link href = '/about'><a>About</a></Link>
	        <a href = '#' onClick = {handleTagsClick} >Tags</a>
	        <Link href = '/'><a>Home</a></Link>
	      </div>
			</div>

			<div style = {{ display: showTags }}>
				<Tags />
			</div>

      <style jsx>{`
	      .header-container {
			    display: flex;
			    flex: 1;
			    flex-direction: row;
			    padding: 10px 5vw 10px 5vw;
			    background: ${header};
			  }

			  .header-left {
			    display: flex;
			    flex: 1;
			    align-items: center;
			  }

			  .header-left a {
			    font-family: 'Source Sans Pro', sans-serif;
			    text-decoration: none;
			    color: ${header_left_link};
			  }

			  img {
			  	display: flex;
			  	flex: 1;
			  	width: calc(1.2rem + 1vw);
			  	max-width: calc(1.2rem + 1vw);
			  	height: auto;
			  	margin: 0 5px 0 5px;
			  }

			  img:hover {
			  	cursor: pointer;
			  }

			  .header-left a:hover {
			    color: ${header_left_link_hover};
			  }

			  .header-left a:active {
			    color: ${header_left_link_active};
			  }

			  .header-right {
			    display: flex;
			    flex: 3;
			    flex-direction: row-reverse;
			    align-items: center;
			  }

			  .header-right a {
			    padding: 0 1vw 0 1vw;
			    font-family: 'Source Sans Pro', sans-serif;
			    text-decoration: none;
			    color: ${header_right_link};
			  }

			  .header-right a:hover {
			    color: ${header_right_link_hover};
			  }

			  .header-right a:active {
			  	color: ${header_right_link_active};
			  }

			  @media screen and (max-width: 920px) {
			  	.header-container {
			  		padding: 10px 2vw 10px 2vw;
			  		overflow-x: scroll;
			  	}

			  	#name {
			  		display: none;
			  	}

			  	img {
			  		display: flex;
			  	}
				}

			  @media screen and (max-width: 480px) {
			  	.header-container {
			  		padding: 10px 2vw 10px 2vw;
			  		overflow-x: scroll;
			  	}
				}

				@media screen and (max-width: 300px) {
					img {
						display: none;
					}
				}

		  `}</style>
    </div>
	)
}