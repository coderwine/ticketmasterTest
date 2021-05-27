const key = 'vJv4XVKaYF0DfbiB5uwb0cSwUUrXBrEo'
const baseURL = 'https://app.ticketmaster.com/'
let url;
let geoPoint = '39.76667,-86.16667'
// let geoPoint = 'Indianapolis'
// let geoPoint = 'Indianapolis39.76667-86.16667'


let fetchFunction = () => {

    url = `${baseURL}/discovery/v2/events?geoPoint=${geoPoint}&apikey=${key}`

    fetch(url)
        .then(res => res.json())
        .then(console.log)
        .catch(err => console.log(err))
}

fetchFunction()