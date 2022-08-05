async function checkIfContactExistsInList(email, listId) {
	const apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY

	const res = await fetch(`https://api.sendinblue.com/v3/contacts/${email}`, {
		method: 'GET',
		headers: {
			'api-key': apiKey,
			Accept: 'application/json'
		}
	})
	const data = await res.json()

	if (data.listIds && data.listIds.includes(listId)) {
		return true
	}
	return false
}

export async function post({ request }) {
	const body = await request.json()
	const apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY

	console.log(body)

	const createDoiContact = {}
	createDoiContact.email = body.email
	//createDoiContact.attributes = {"FNAME":"John","LNAME":"Doe"};
	createDoiContact.includeListIds = [2]
	createDoiContact.templateId = 22
	createDoiContact.redirectionUrl = 'https://bitswired.com/bitsletter/thank-you'

	console.log(createDoiContact)

	const res = await fetch('https://api.sendinblue.com/v3/contacts/doubleOptinConfirmation', {
		method: 'POST',
		body: JSON.stringify(createDoiContact),
		headers: {
			'api-key': apiKey,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})

	const exists = await checkIfContactExistsInList(body.email, 2)
	if (exists) {
		return {
			status: 400,
			body: { code: 'already_exists' }
		}
	}

	const data = await res.json()

	if (res.status === 201) {
		return {
			status: 200
		}
	}

	return {
		status: res.status,
		body: data
	}
}
