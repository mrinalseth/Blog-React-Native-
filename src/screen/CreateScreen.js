import React, {useContext} from 'react'
import { useState } from 'react'
import {View, Text, TextInput, StyleSheet, Button, Pressable} from 'react-native'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context)
    return(
        <BlogPostForm
        title =''
        content =''
        type = 'Enter'
        onSubmit={(title, content,id=9) => {
            addBlogPost(title,content,() => {
                    navigation.navigate('Index')
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

export default CreateScreen