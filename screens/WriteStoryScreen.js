import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,KeyboardAvoidingView,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config.js';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }
    submitStory=(title,storyText,author)=>{
        db.collection('Story_Ideas').add({
            "Story_Name" : title,
            "Author_Name" : author,
            "Story_Text" : storyText,
            "Date" : firebase.firestore.FieldValue.serverTimestamp(),
        });
        this.setState({
            title : '',
            author : '',
            storyText : '',
        })
        return Alert.alert("Story Successfully Sent!")
    }
    render(){
        return(
            /*
            <View style = {styles.container}>
                <View>
                    <Text style = {{textAlign:'center', fontSize:30}}>Write Story</Text>
                </View>
                <TextInput style={styles.inputBox}></TextInput>
                <TextInput style={styles.inputBox}></TextInput>
                <TextInput style={styles.storyBox}></TextInput>
                <TouchableOpacity style = {styles.submitButton}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            */
            <KeyboardAvoidingView style={styles.keyBoardStyle}
            behavior="padding" enabled>
               <Text>Story Hub</Text>
               <TextInput 
                   placeholder="Story Title"
                   onChangeText= {(text)=>{
                       this.setState({
                           title: text
                       })
                   }}
                   placeholderTextColor='black'
                   value={this.state.title}
                   style={styles.inputBox}/>
               <TextInput
                   placeholder="Author"
                   onChangeText= {(text)=>{
                       this.setState({
                           author: text
                       })
                   }}
                   placeholderTextColor='black'
                   value={this.state.author}
                   style={styles.inputBox} />
               <TextInput 
                   placeholder="Write your story"
                   onChangeText= {(text)=>{
                       this.setState({
                           storyText: text
                       })
                   }}
                   placeholderTextColor='black'
                   value={this.state.storyText}
                   style={styles.storyBox}
                   multiline={true}/>
               
               <TouchableOpacity
                   style={styles.submitButton}
                   onPress={this.submitStory}
                   >
                   <Text style={styles.buttonText}>Submit</Text>
               </TouchableOpacity>
           </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    }, 
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    displayText :{
        fontSize :15,
        textDecorationLine: "underline",
    },
    inputBox :{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        marginTop : 25,
    },
    storyBox :{
        width:300,
        height:200,
        borderWidth:1.5,
        fontSize:20,
        marginTop : 25,
        marginBottom : 25,
    },
    submitButton :{
        backgroundColor : '#FBC02D',
        width : 100,
        height : 40,
    },
    submitButtonText :{
        textAlign : 'center',
        fontSize : 16,
        fontWeight : 'bold',
        color : 'white',
        padding : 6,
    },
    title:{
        height: 80,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color:'black',
        padding: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10, 
        padding: 6,
        textAlignVertical: "top"
    },
    submitButton:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40,color:'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color:'black',
    },
})