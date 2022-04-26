import { userActions } from "./userDataSlice.jsx";

// creating fetch function via redux Middleware


// when fetchAppData called it return a fucntion which take dispatch as a callback
// it call the call back when the data is successfully fetched from the API

export const fetchAppData = () => {
  

  return async (dispatch) => { 

    const fetchData = async () => {
      const response = await fetch("https://chat-app562.herokuapp.com/tasks");
  
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const appData = await fetchData();

      dispatch(userActions.addAppData(appData));

    } catch (error) {
      console.log(error);
    }
  };
};
