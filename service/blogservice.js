var client = require('./contentfulClient').client

function allPost () {

 return  client.getEntries()
}
 
function getArticlefeatured (slug,query) {
  query = query || {}
  query['content_type'] = 'articlesfeatured'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getArticlefeatureds (query) {
  query = query || {}
  query.content_type = 'articlesfeatured'
  return client.getEntries(query)
}

function getArticleReview (slug,query) {
  query = query || {}
  query['content_type'] = 'albumReview'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getArticleReviews (query) {
  query = query || {}
  query.content_type = 'albumReview'
  return client.getEntries(query)
}

function getArticleArt (slug,query) {
  query = query || {}
  query['content_type'] = 'articlesart'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getArticleArts (query) {
  query = query || {}
  query.content_type = 'articlesart'
  return client.getEntries(query)
}

module.exports = {
  getArticleReview,
  getArticleReviews,
  getArticlefeatured,
  getArticlefeatureds,
  getArticleArt,
  getArticleArts,
  allPost
}