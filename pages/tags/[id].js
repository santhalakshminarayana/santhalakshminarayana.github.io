import Head from 'next/head';

import { getAllTagsPath, getTagPostsMetadata } from '../../lib/get-all-tags.js';

import Header from '../../components/Header.js';
import CardLayout from '../../components/CardLayout.js';

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const quote = c5;

const home_page_url = 'https://santhalakshminarayana.github.io/';

export default function Tags({ postsMetaData, tagName }) {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <meta name = 'description' content = {'Posts about ' + tagName} />
        <meta name="author" content="Santha Lakshmi Narayana" />

        <meta property="og:title" content={'Santha Lakshmi Narayana'} key="ogtitle" />
        <meta property="og:description" content={'Posts about' + tagName} key="ogdesc" />
        <meta property="og:url" content={home_page_url + 'tags/' + tagName} key="ogurl" />
				<meta property="og:image" content={home_page_url + 'images/santha-lakshmi-narayana.png'} key="ogimage" />
				<meta property="og:type" content="article" />
				<meta property='og:article:publisher' content={home_page_url} key='ogaritclepublisher'/>
				<meta property="og:site_name" content={"Santha Lakshmi Narayana"} key="ogsitename" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={'Santha Lakshmi Narayana'} />
				<meta name="twitter:description" content={'Posts about ' + tagName} />
				<meta name="twitter:url" content={home_page_url + 'tags/' + tagName} />
				<meta name="twitter:site" content="@santhalakshminarayana" />
				<meta name="twitter:image" content={home_page_url + 'images/santha-lakshmi-narayana.png'} />
				<meta name="twitter:creator" content='@santhalakshminarayana' />

				<link rel = 'icon' href = '/images/santha-lakshmi-narayana-logo.png?' />
				<link rel="canonical" href={home_page_url + 'tags/' + tagName} />

        <title>{'Santha Lakshmi Narayana'}</title>
			</Head>

			<Header />

			 <div className = 'posts-display-container' >
            <p className = 'quote'>{'tag: ' + tagName}</p>
        </div>

        <CardLayout postsMetaData = { postsMetaData } />

    	<style jsx>{`
        .posts-display-container {
          padding: 1vh 10vw 1vh 10vw;
        }

			  .quote {
			    color: ${quote};
			    font-family: 'Ubuntu', sans-serif;
			    font-size: calc(1rem + 1vw);
			  }

        @media screen and (max-width: 480px) {
          .posts-display-container {
            padding: 1vh 5vw 1vh 5vh;
          }

  		`}</style>
		</div>
	)
}

export async function getStaticPaths() {
	const paths = getAllTagsPath();
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const tag_posts_metadata = getTagPostsMetadata(params.id);
	return {
		props: {
			postsMetaData: tag_posts_metadata,
			tagName: params.id,
		}
	}
}