'use strict'

const Urlshorten = use('App/Models/Urlshorten')
const crypto = require('crypto');

const Database = use('Database')

class UrlShortenController {

  async urlShorten(longURL, startIndex, endIndex) {
    const hash = crypto.createHash('md5').update(longURL).digest('base64').replace(/\//g, '_').replace(/\+/g, '-');
    return hash.substring(startIndex, endIndex + 1);
  }

  async shorten({ request, response }) {
    const urlshorten = new Urlshorten;
    urlshorten.originallink = request._body.data
    urlshorten.shortenedlink = await this.urlShorten(urlshorten.originallink, 0, 6);
    await urlshorten.save();

    return urlshorten.toJSON();
  }

  async original({request, response}) {
  	console.log('request.query===>', request.get())
  	const originallink = await Database.from('urlshortens').where('shortenedlink', request.params.code)
  	return originallink;
  }
}

module.exports = UrlShortenController
