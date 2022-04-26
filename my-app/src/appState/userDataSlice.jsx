import { createSlice} from "@reduxjs/toolkit";


// useful Data model, in case backend fail 

// const users = [{
//     contactName:"Jon", contactUserName : "jon562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Jon I am good"}]
// },{
//     contactName:"Krishna", contactUserName : "krishna562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Krishan I am good"}]
// },{
//     contactName:"Abdul", contactUserName : "abdul562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Abdul I am good"}]
// },{
//     contactName:"Swami", contactUserName : "swami562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Swami I am good"}]
// },{
//     contactName:"Albert", contactUserName : "albert562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Albert I am good"}]
// },{
//     contactName:"Faisal", contactUserName : "fasal562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Faisal I am good"}]
// },{
//     contactName:"Sachin", contactUserName : "sachin562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Sachin I am good"}]
// }]


// const logedInUser = {id:v4(), name:"Vishal", userName:"vishal562", contacts:[{
//     contactName:"Ayush", contactUserName : "ayush562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Ayush I am good"},{messageReciever:"Can you pass me the books?"},{messageReciever:"It's urgent"},{messageReciever:"living for Jaipur"},{messageReciever:"Will come after 5 days"},{messageSender:"Sure coming to your place in no time."}]
// },{
//     contactName:"Deepak", contactUserName : "deepak562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Deepak I am good"}]
// },{
//     contactName:"Prashant", contactUserName : "prashant562",
//     chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Prashant I am good"}]
// }]}
// function to add new user to the initial state--> addUser
// function to check if user exist--> UserExist
// const initiActiveChat = logedInUser.contacts[0].chatStream


const userDataSlice = createSlice({
    name:"userData",
    initialState:{users:[],logedinUserContent:{},activeContact:"",activeChat:[],modelActive:false},
    reducers:{     
        
        // function to fetch API and update initial state of the app
        addAppData(state,action){
            state.users = action.payload.data[0].users
            state.logedinUserContent = action.payload.data[0].logedInUser
        },

        // function to set the active contact on which user clicked from User section
        setActiveContact(state,action){
            state.activeContact = action.payload
            state.logedinUserContent.contacts.forEach((contact)=>{
                if(contact.contactUserName===action.payload){
                  state.activeChat = contact.chatStream
                }
              })
        },

        // function to add message to the chat stream of the particular contact 
        //to which user send  the message
        sendMessage(state,action){
            state.logedinUserContent.contacts.forEach((contact)=>{
                if(contact.contactUserName===state.activeContact){
                    contact.chatStream.push({messageSender:action.payload})
                }
            })

            state.activeChat =state.logedinUserContent.contacts.filter((contact)=>contact.contactUserName===state.activeContact)[0].chatStream
        },


        // function to add new contact from the user data who are having the app
        // to the user contacts list

        addContact(state,action){
            state.logedinUserContent.contacts.push(action.payload)
            state.users = state.users.filter((contact)=>contact.contactUserName!==action.payload.contactUserName)
        },

        // function to display or remove when user click on add button in user section
        setModelActive(state){
            state.modelActive = !state.modelActive
        }

    }
})


export const userActions = userDataSlice.actions;

export default userDataSlice;
