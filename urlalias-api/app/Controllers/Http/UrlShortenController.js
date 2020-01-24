'use strict'

const Urlshorten = use('App/Models/Urlshorten')
const crypto = require('crypto');

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

    return { shortenedurl: urlshorten.toJSON() };
  }
}

module.exports = UrlShortenController
