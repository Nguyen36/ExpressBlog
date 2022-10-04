const express=require('express');
const router=express.Router();
const controller=require('../controllers/blogController');

router.get('/',controller.getListBlog);
router.get('/blog/:id',controller.getBlogById);
router.post('/create',controller.createNewBlog);
router.get('/createForm',controller.getForm);
router.post('/blog/:id',controller.addComment);
router.get('/blog/:id/delete',controller.deleteBlog);
router.get('/blog/:id/updateFrom',controller.getUpdateForm);
router.post('/blog/:id/update',controller.handleUpdate);

module.exports={
    router,
}