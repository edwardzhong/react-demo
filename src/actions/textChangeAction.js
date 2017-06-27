export function nameChange(txt){
	return {
		type:'CHANGE_NAME',
		txt
	}
}

export function emailChange(txt){
	return {
		type:'CHANGE_MAIL',
		txt
	}
}