const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')
const router= express.router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../template/index.html'))
})

router.get('/blog', (req, res) => {
    //blogs.forEach(e => {
        //console.log(e.title)
    //});
    res.sendFile(path.join(__dirname, '../template/blogHome.html'))
})
router.get('/blog_post/:slug', (req, res) => {
    myBlog=blogs.filter((e) => {
        return e.slug = req.params.slug
    })
    res.sendFile(path.join(__dirname, '../template/blogPage.html'))
})


module.exports = router
