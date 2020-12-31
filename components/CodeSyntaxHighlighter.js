import { Component } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

//import vsc_dark_plus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

import code_style from './code_highlighter_style.js';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('js', js);

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const file_name_container_background = c4 + 'd9', file_name_color = c2 + 'f2', background = c1 + 'f2';

export default class CodeSyntaxHighlighter extends Component {
	constructor(props) {
		super(props);
		this.language = this.props.code_props.className.replace('language-', '').split(':')[0];
		this.file_name = this.props.code_props.className.replace('language-', '').split(':')[1];
	}

	render() {
		return (
			<>
				{this.file_name?
					<div>
						<div className = 'file-name-container'>
							<p className = 'file-name'>{this.file_name}</p>
						</div>
						<SyntaxHighlighter language = {this.language} 
																style = {code_style}
																customStyle = {{ backgroundColor: background,
																									paddingBottom: '0px',
																									margin: '0px',
																									marginBottom: '1vh',
																									borderBottomLeftRadius: '5px',
																									borderBottomRightRadius: '5px',
																									color: c4 }}
			 													{...this.props.code_props} />
					</div>:
					<SyntaxHighlighter language = {this.language} 
																style = {code_style} 
																customStyle = {{ backgroundColor: background,
																									paddingBottom: '0px',
																									marginTop: '1vh',
																									marginBottom: '1vh',
																									borderRadius: '5px',
																									fontSize: 'calc(0.9rem + 0.1vw)' }}
			 													{...this.props.code_props} />

				}

			  <style jsx>{`
			  	.file-name-container {
			  		display: flex;
			  		width: 100%;
			  		max-width: 100%;
			  		background-color: ${file_name_container_background};
			  		padding: calc(0.5rem + 0.2vw);
			  		border-top-left-radius: 5px;
			  		border-top-right-radius: 5px;
						margin-top: 1vh;
						white-space: pre-wrap;
						word-wrap: break-word;
						overflow-wrap: break-word;
			  	}

			  	.file-name {
			  		font-family: 'Share Tech Mono', monospace;
			  		font-size: calc(0.9rem + 0.1vw);
			  		color: ${file_name_color};
			  	}

			  `}</style>
			</>
		)
	}

}