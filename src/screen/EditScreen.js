import React,{useState, useContext} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Pressable} from 'react-native'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const {state, editBlogPost} = useContext(Context)
    const blog = state.find((blog) => {
        return blog.id === props.navigation.getParam('id')
    })
    const id = props.navigation.getParam('id')
    
    return(
        <BlogPostForm
            title={blog.title}
            content={blog.content}
            type='Edit'
            onSubmit={(title,content) => {
                editBlogPost(title, content, id,()=>{
                    props.navigation.pop()
                })
            }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 5
    }
})

export default EditScreen