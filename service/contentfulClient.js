const contentful = require('contentful')
const client = contentful.createClient({
  space: 'w6y7q7d3of2r',
  accessToken: 'mHVLIMO2RqtcImCFP-PFfQpaJYmsylL6e98KfKCfk7g'
})

exports.client = client