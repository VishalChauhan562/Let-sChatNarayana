import { createSlice, current } from "@reduxjs/toolkit";
import { v4 } from 'uuid'



const initialState =[
    {id:v4(), name:"Vishal", userName:"vishal562", contacts:[{
        contactName:"Ayush", contactUserName : "ayush562",
        chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Ayush I am good"}]
    },{
        contactName:"Deepak", contactUserName : "deepak562",
        chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Deepak I am good"}]
    },{
        contactName:"Prashant", contactUserName : "prashant562",
        chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Prashant I am good"}]
    }]},
    {id:v4(),name:"Ayush", userName:"ayush562", contacts:[{
        contactName:"Vishal", contactUserName : "vishal562",
        chatStream:[{messageReciever:"Hi Ayush, how are you"},{messageSender:"Hi, Vishal I am good"}]
    },{
        contactName:"Deepak", contactUserName : "deepak562",
        chatStream:[{messageReciever:"Hi Ayush, how are you"},{messageSender:"Hi, Deepak I am good"}]
    },{
        contactName:"Prashant",contactUserName : "prashant562",
        chatStream:[{messageReciever:"Hi Ayush, how are you"},{messageSender:"Hi, Prashant I am good"}]
    }]},
    {id:v4(),name:"Deepak", userName:"deepak562", contacts:[{
        contactName:"Ayush" , contactUserName : "ayush562",
        chatStream:[{messageReciever:"Hi Deepak, how are you"},{messageSender:"Hi, Ayush I am good"}]
    },{
        contactName:"Vishal", contactUserName : "vishal562",
        chatStream:[{messageReciever:"Hi Deepak, how are you"},{messageSender:"Hi, Vishal I am good"}]
    },{
        contactName:"Prashant", contactUserName : "prashant562",
        chatStream:[{messageReciever:"Hi Deepak, how are you"},{messageSender:"Hi, Prashant I am good"}]
    }]},
    {id:v4(),name:"Prashant", userName:"prashant562", contacts:[{
        contactName:"Ayush",  contactUserName : "ayush562",
        chatStream:[{messageReciever:"Hi Prashant, how are you"},{messageSender:"Hi, Ayush I am good"}]
    },{
        contactName:"Deepak", contactUserName : "deepak562",
        chatStream:[{messageReciever:"Hi Prashant, how are you"},{messageSender:"Hi, Deepak I am good"}]
    },{
        contactName:"Vishal", contactUserName : "vishal562",
        chatStream:[{messageReciever:"Hi Prashant, how are you"},{messageSender:"Hi, Vishal I am good"}]
    }]},
    {id:v4(),name:"Abhinav", userName:"abhi117", contacts:[]},
    {id:v4(),name:"Aakash", userName:"aakash777", contacts:[]},
    {id:v4(),name:"Priya", userName:"priya111", contacts:[]},
    {id:v4(),name:"Vishakha", userName:"v245", contacts:[]}
]


// function to add new user to the initial state--> addUser
// function to check if user exist--> UserExist



const userDataSlice = createSlice({
    name:"userData",
    initialState:{userData:initialState,isLogin:false,logedinUserContent:{}},
    reducers:{
        
        addUser(state,action){
            state.userData.push(action.payload)
        },

        userExist(state,action){
            let check = false;
            state.userData.forEach((user)=>{
                if(user.userName===action.payload){
                    check=true
                }
            })
            state.isLogin = check
        },

        updateUserContent(state,action){
            state.logedinUserContent =state.userData.filter((user)=>(user.userName===action.payload))[0]
        },

        logOutUser(state,action){
            state.isLogin = false
        },
        

    }
})


export const userActions = userDataSlice.actions;

export default userDataSlice;
