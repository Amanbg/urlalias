'use strict'

const Urlshorten = use('App/Models/Urlshorten')
class UrlShortenController {
	async shorten({request, response}){
		const urlshorten = new Urlshorten;
		urlshorten.originallink = request._body.data.originallink
		urlshorten.shortenlink = await urlShorten();
		await urlshorten.save();

		return {shortenedurl : urlshorten.toJSON()};
	}
}

module.exports = UrlShortenController
