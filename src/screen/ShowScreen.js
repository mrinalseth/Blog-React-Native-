import React, {useContext} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = (props) => {

    const {state} = useContext(Context)
    const blog = state.find((blog) => {
        return blog.id === props.navigation.getParam('id')
    })
    return(
        <View>
            <Text>{blog.title}</Text>
            <Text>{blog.content}</Text>
            <Text>{blog.id}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = (props) => {
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Edit',{id:props.navigation.getParam('id')})
                }}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        )
        
    }
    

}


const styles = StyleSheet.create({})

export default ShowScreen 