import Link from 'next/link';

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const tags_background = c2, tags_border = c1, tag = c4, tag_border = c5;
const tag_hover = c2, tag_hover_background = c3, tag_hover_border = c2, tag_active_background = c5;

export default function Tags(props) {
	return (
			<div className = 'tags'>
        <Link href = '/tags/image-processing'><a>#image-processing</a></Link>
        <Link href = '/tags/opencv'><a>#opencv</a></Link>
        <Link href = '/tags/python-performance'><a>#python-performance</a></Link>
        <Link href = '/tags/color-science'><a>#color-science</a></Link>
        <Link href = '/tags/react'><a>#react</a></Link>
        <Link href = '/tags/next-js'><a>#next-js</a></Link>
        <Link href = '/tags/flutter'><a>#flutter</a></Link>

      <style jsx>{`
      	.tags {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          padding: 1vw 5vw 1vw 5vw;
          background-color: ${tags_background};
          border-bottom: 5px solid ${tags_border};
        }

        .tags a {
          font-family: 'Share Tech Mono', monospace;
          color: ${tag};
          margin: 0 1em 0 1em;
          text-decoration: none;
          border-bottom: 1px dashed ${tag_border};
        }

        .tags a:hover {
          background: ${tag_hover_background};
          color: ${tag_hover};
          border-bottom: 1px dashed ${tag_hover_border};
        }

        .tags a:active {
          background: ${tag_active_background};
        }

		  `}</style>
      </div>
		)
}