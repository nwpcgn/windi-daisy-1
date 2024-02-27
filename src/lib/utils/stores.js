import { derived, writable } from 'svelte/store'

export const width = writable(window.innerWidth)
export const height = writable(window.innerHeight)
export const match = writable({})

// A more convenient store for grabbing all game props
export const props = deriveObject({
	width,
	height,
	match
})

export const key = Symbol()

function deriveObject(obj) {
	const keys = Object.keys(obj)
	const list = keys.map((key) => {
		return obj[key]
	})
	return derived(list, (array) => {
		return array.reduce((dict, value, i) => {
			dict[keys[i]] = value
			return dict
		}, {})
	})
}
