import { useReducer, useState } from 'react';
import emailjs from 'emailjs-com';

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const label_color = c4, label_required_color = c5, text_input_color = c4 + 'e6';
const text_input_border_normal_color = c4 + '66', text_input_border_focus_color = c3 + '66';
const button_background = c1, button_color = c2, button_box_shadow = c4;
const button_hover_background = c4, button_hover_color = c4, button_hover_box_shadow = c2;

const form_initial_state = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
	switch(action.type) {
		case ('name'):
			return { ...state, name: action.value };
		case ('email'):
			return { ...state, email: action.value };
		case ('message'):
			return { ...state, message: action.value }
	}
}

export default function ContactForm(props) {
	const [formState, dispatch] = useReducer(reducer, form_initial_state);
	const [errMessage, setErrMessage] = useState('');
	const [errMessageColor, setErrMessageColor] = useState('green');
	const { name, email, message } = formState;

	const handleSubmitForm = (e) => {
		e.preventDefault();
		if (name.length === 0 || email.length === 0 || message === 0) {
			setErrMessage('Please fill all details.')
			setErrMessageColor('red')
		}
		else {
			setErrMessage('Submitting...')
			emailjs.send(
				process.env.EMAILJS_SERVICE_ID,
				process.env.EMAILJS_TEMPLATE_ID,
				{...formState},
				process.env.EMAILJS_USER_ID
				).then(({ status }) => {
					if (status == 200) {
						setErrMessage("Response Submitted Successfully.");
						setErrMessageColor('green');
					} else {
						setErrMessage('Oops! Something went Wrong. Please contact mailing directly or try again.');
						setErrMessageColor('red');
					}
				}, (err) => {
					setErrMessage('Oops! Something went Wrong. Please contact mailing directly or try again.');
					console.log(err);}
				).catch((err) => {
					setErrMessage('Oops! Something went Wrong. Please contact mailing directly or try again.');
					console.log('In catch error')
					setErrMessage('Oops! Something went Wrong. Please contact mailing directly or try again.');
					setErrMessageColor('red');
				})
		}
	}

	return (
		<div>
			<div className = 'contact-form-container'>
				<label className = 'label-name'>Name<label className = 'label-name-required'>*</label></label>
				<input id = 'form_name' type = 'text' value = {name} className = 'text-input'
								onChange = {(e) => dispatch({ type: 'name', value: e.target.value })} required />

				<label className = 'label-name'>Email<label className = 'label-name-required'>*</label></label>
				<input id = 'form_email' type = 'text' value = {email} className = 'text-input'
								onChange = {(e) => dispatch({ type: 'email', value: e.target.value })} required />

				<label className = 'label-name'>Message<label className = 'label-name-required'>*</label></label>
				<textarea id = 'form_message' type = 'text' value = {message}
									rows = {'8'} className = 'text-input'
									onChange = {(e) => dispatch({ type: 'message', value: e.target.value })} required />

				<p style = {{ color: errMessageColor, 
											fontSize: `calc(1rem + 0.1vw)`,
											fontFamily: "'Source Sans Pro', sans-serif" }} >{errMessage}</p>
				<div className = 'btn-container'>
					<button className = 'btn' onClick = {(e) => handleSubmitForm(e)} >Submit</button>
				</div>
			</div>

      <style jsx>{`
      	.contact-form-container {
      		display: flex;
      		width: 100%;
      		max-width: 100%;
      		flex-direction: column;
      		margin: 0;
      	}

      	.label-name {
      		display: flex;
      		width: 100%;
      		max-width: 100%;
      		color: ${label_color};
      		font-family: 'Ubuntu', sans-serif;
      		font-weight: bold;
      		font-size: calc(1rem + 0.1vw);
      		margin: 1vh 0 1vh 0;
      	}

      	.label-name-required {
      		color: ${label_required_color};
      		font-size: calc(1rem + 0.1vw);
      		font-weight: normal;
      	}

      	.text-input {
      		color: ${text_input_color};
      		font-family: 'Source Sans Pro', sans-serif;
      		font-size: calc(1rem + 0.1vw);
      		border: 2px solid ${text_input_border_normal_color};
      		padding: 10px;
      	}

      	.text-input:focus {
      		outline: none;
      		border: 2px solid ${text_input_border_focus_color};
      	}

      	.btn-container {
      		display: flex;
      		flex-direction: row;
      	}

      	.btn {
      		background-color: ${button_background};
      		color: ${button_color};
      		font-family: 'Maven Pro', sans-serif;
      		font-size: calc(0.9rem + 0.2vw);
      		border: none;
      		outline: none;
      		cursor: pointer;
      		padding: 10px 20px;
      		margin: 2vh 0 2vh 0;
      		box-shadow: 5px 5px 5px ${button_box_shadow};
      	}

      	.btn:hover {
      		background-color: ${button_hover_background};
      		color: ${button_color};
      	}

      	.btn:active {
      		transform: scale(0.99);
      	}

		  `}</style>
    </div>
	)
}