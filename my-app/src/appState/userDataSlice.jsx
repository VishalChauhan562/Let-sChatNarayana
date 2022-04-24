import { createSlice, current } from "@reduxjs/toolkit";




const initialState =[
    {name:"Vishal", userName:"vishal562", contacts:[{
        contactName:"Ayush",
        chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Ayush I am good"}]
    },{
        contactName:"Deepak",
        chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Deepak I am good"}]
    },{
        contactName:"Prashant",
        chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Prashant I am good"}]
    }]},
    {name:"Ayush", userName:"ayush562", contacts:[{
        contactName:"Vishal",
        chatStream:[{messageReciever:"Hi Ayush, how are you"},{messageSender:"Hi, Vishal I am good"}]
    },{
        contactName:"Deepak",
        chatStream:[{messageReciever:"Hi Ayush, how are you"},{messageSender:"Hi, Deepak I am good"}]
    },{
        contactName:"Prashant",
        chatStream:[{messageReciever:"Hi Ayush, how are you"},{messageSender:"Hi, Prashant I am good"}]
    }]},
    {name:"Deepak", userName:"deepak562", contacts:[{
        contactName:"Ayush",
        chatStream:[{messageReciever:"Hi Deepak, how are you"},{messageSender:"Hi, Ayush I am good"}]
    },{
        contactName:"Vishal",
        chatStream:[{messageReciever:"Hi Deepak, how are you"},{messageSender:"Hi, Vishal I am good"}]
    },{
        contactName:"Prashant",
        chatStream:[{messageReciever:"Hi Deepak, how are you"},{messageSender:"Hi, Prashant I am good"}]
    }]},
    {name:"Prashant", userName:"prashant562", contacts:[{
        contactName:"Ayush",
        chatStream:[{messageReciever:"Hi Prashant, how are you"},{messageSender:"Hi, Ayush I am good"}]
    },{
        contactName:"Deepak",
        chatStream:[{messageReciever:"Hi Prashant, how are you"},{messageSender:"Hi, Deepak I am good"}]
    },{
        contactName:"Vishal",
        chatStream:[{messageReciever:"Hi Prashant, how are you"},{messageSender:"Hi, Vishal I am good"}]
    }]}
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
        }

    }
})


export const userActions = userDataSlice.actions;

export default userDataSlice;
