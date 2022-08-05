import SibApiV3Sdk from 'sib-api-v3-typescript'

async function checkIfContactExistsInList(apiInstance, email, listId) {
	try {
	const x = await apiInstance.getContactInfo(email)
		if (x.body.listIds.includes(listId)) {
			return true
		} 
		return false 
	} catch (err) {
		return false
	}
}

export async function post({ request }) {
	const body = await request.json()

	let apiInstance = new SibApiV3Sdk.ContactsApi()

	let apiKey = apiInstance.authentications['apiKey']
	apiKey.apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY

	const exists = await checkIfContactExistsInList(apiInstance, body.email, 2)

	if (exists) {
		return {
			status: 400,
			body: {code: "already_exists"}
		}
	}

	let createDoiContact = new SibApiV3Sdk.CreateDoiContact()

	createDoiContact.email = body.email
	//createDoiContact.attributes = {"FNAME":"John","LNAME":"Doe"};
	createDoiContact.includeListIds = [2]
	createDoiContact.templateId = 22
	createDoiContact.redirectionUrl = 'https://bitswired.com/bitsletter/thank-you'

	return apiInstance.createDoiContact(createDoiContact).then(
		function (res) {
			console.log('API called successfully.')

			return {
				status: 200
			}
		},
		function (error) {
			console.error(error)
			return {
				status: error.statusCode,
				body: error.body
			}
		}
	)
}
