'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UrlshortenSchema extends Schema {
  up () {
    this.create('urlshortens', (table) => {
      table.string('originallink', 254).notNullable()
      table.string('shortenedlink', 254).notNullable().unique()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('urlshortens')
  }
}

module.exports = UrlshortenSchema
