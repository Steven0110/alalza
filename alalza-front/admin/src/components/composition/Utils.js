import { ref, reactive } from "vue"

export default function Utils() {
	return {
		clone: obj => JSON.parse(JSON.stringify( obj )),
		cloneReactive: obj => reactive(JSON.parse(JSON.stringify(obj || {}))),
	}
}