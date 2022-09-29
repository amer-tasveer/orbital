var express = require('express')
var router = express.Router()
var blogpost = require('../service/blogservice')

/* router params */

router.get('/post/all/', function (req, res, next) {

  blogpost.allPost().then( (post)=> {
      res.json(post);

  }).catch((err) => {
     res.status(500).send(err);
  })
});


router.get('/post/featured/:slug', function (req, res, next) {
 
    blogpost.getArticlefeatured(req.params.slug).then(function (post) {
      res.json(post);
        console.log(post)
        next()
      }).catch(function (err) {
        console.log(err)
      })
})

router.get('/post/featured/', function (req, res, next) {

    blogpost.getArticlefeatureds().then( (post)=> {
        res.json(post);

    }).catch((err) => {
       res.status(500).send(err);
    })
  });

  router.get('/post/album-review/:slug', function (req, res, next) {
 
    blogpost.getArticleReview(req.params.slug).then(function (post) {
      res.json(post);
        console.log(post)
        next()
      }).catch(function (err) {
        console.log(err)
      })
})

router.get('/post/album-review/', function (req, res, next) {

    blogpost.getArticleReviews().then( (post)=> {
        res.json(post);

    }).catch((err) => {
       res.status(500).send(err);
    })
  });

  router.get('/post/art/:slug', function (req, res, next) {
 
    blogpost.getArticleArt(req.params.slug).then(function (post) {
      res.json(post);
        console.log(post)
        next()
      }).catch(function (err) {
        console.log(err)
      })
})

router.get('/post/art/', function (req, res, next) {

    blogpost.getArticleArts().then( (post)=> {
        res.json(post);

    }).catch((err) => {
       res.status(500).send(err);
    })
  });




module.exports = router
