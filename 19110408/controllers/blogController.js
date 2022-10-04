const {myblog}=require('../models/blogModel');
const getListBlog=(req,res)=>{
    res.render('home',{blogs: myblog});
}
const getBlogById=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    res.render('blogView',{blog:blog,comments:blog.comments});
}
const createNewBlog=(req,res)=>{
    var text=req.body.content;
    let newBlog={
        id:myblog.length+1,
        title:req.body.title,
        content:text,
        comments:[]
    }
    myblog.push(newBlog);
    res.redirect('/');
}
const getForm=(req,res)=>{
    res.render('blogForm');
}
const addComment=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    let newComment={
        text:req.body.text,
    }
    blog.comments.push(newComment);
    res.render('blogView',{blog:blog,comments:blog.comments});
}
const deleteBlog=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    let index=myblog.indexOf(blog);
    myblog.splice(index,1);
    res.redirect('/');
}

const getUpdateForm=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    res.render('updateForm',{blog:blog});
}
const handleUpdate=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    blog.title=req.body.title;
    blog.content=req.body.content;
    res.redirect(`/blog/${req.params.id}`);

}
module.exports={
    getListBlog,
    getBlogById,
    createNewBlog,
    getForm,
    addComment,
    deleteBlog,
    getUpdateForm,
    handleUpdate
}