import React from 'react'
import { Form, withFormik, Field, FastField, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Input } from 'components/common'
import { Error, Center, InputField } from './styles'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

const ContactForm = ({
	setFieldValue,
	isSubmitting,
	values,
	errors,
	touched,
}) => (
	<Form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
	>
		<Input component="input" type="hidden" name="form-name" value="contact" />
		<Input component="input" type="hidden" name="bot-field" />
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="Full name*"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				id="email"
				aria-label="email"
				component="input"
				type="email"
				name="email"
				placeholder="Email*"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Message*"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message" />
		</InputField>
		{values.success && (
			<InputField>
				<Center>
					<h4>
						Your message has been successfully sent, I will get back to you
						ASAP!
					</h4>
				</Center>
			</InputField>
		)}
		<Center>
			<Button secondary type="submit" disabled={isSubmitting}>
				Submit
			</Button>
		</Center>
	</Form>
)

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('Full name field is required'),
			email: Yup.string()
				.email('Invalid email')
				.required('Email field is required'),
			message: Yup.string().required('Message field is required'),
		}),
	handleSubmit: async (
		{ name, email, message, recaptcha },
		{ setSubmitting, resetForm, setFieldValue }
	) => {
		try {
			const encode = data => {
				return Object.keys(data)
					.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
					.join('&')
			}
			await fetch('/?no-cache=1', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({ 
					'form-name': 'contact', 
					name,
					email,
					message,
				}),
			})
			await setSubmitting(false)
			await setFieldValue('success', true)
			setTimeout(() => resetForm(), 2000)
		} catch (err) {
			setSubmitting(false)
			setFieldValue('success', false)
			alert(err) // eslint-disable-line
		}
	},
})(ContactForm)
