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
  	const originallink = await Database.from('urlshortens').where('shortenedlink', request.get().code)
  	return originallink;
  }

  async shortenedUrlList({request, response}) {
  	const urls = await Urlshorten.all()
  	return urls;
  }
}

module.exports = UrlShortenController
