import React,{useState, useContext} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import { Context } from '../context/BlogContext';

const BlogPostForm = (props) => {
    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)
    return(
        <View>
            <Text>{props.type} Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(e) => setTitle(e)}
            />
            <Text>{props.type} content</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(e) => setContent(e)}
            />
            <Button title="submit" onPress={() => {
                props.onSubmit(title, content)
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 5
    }
})

export default BlogPostForm