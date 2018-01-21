import axios from 'axios';

export function sum  ()  {
	let test = "Hey! I'm Helper";
	return test
}

export function getPageHTMLViaAjax (pageUrl) {
	return axios.get(pageUrl);
}
