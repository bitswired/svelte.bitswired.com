export function serializeSchema(schema: object) {
	return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}