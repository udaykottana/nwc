import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  apiError: false,
  formStatus: "",
  isReduxUpdated: false,
  access: {},
  refresh: {},
  verifyEmailToken: "",
  _id: "",
  formInfo: {
    email: "",
    password: "",
    checkbox: false,

    // phone: "",
  },
  form1:{},
  form2:{},
  form3:{},
  user: {},
  defaultLanguage: "en",
  selectedLanguage: {
    description: {
      greeting: "Welcome ",
      aboutNWC:
        "This is an optimized system for energy monitoring in the Cloud, monitoring the availability of all building facilities.",
      login: "Login",
      smalldesc: "Monitor energy data and cut the energy costs.",
      placeholder1: "User name",
      placeholder2: "Password",
      remember: "Remember me",
      forgetsPassword: "Forgot password?",
      alertText:
        "Login failed - Incorrect username or password Please try again.",
      signinButton: "Sign in",
    },
  },
};

const siteSlice = createSlice({
  name: "siteInfo",
  initialState,
  reducers: {
    updateVerifyEmailToken: (state, action) => {
      state.verifyEmailToken = action.payload;
    },
    updateForm1:(state,action)=>{
        console.log("action",action.payload)
        state.form1=action.payload
    }
}
})

export const {
  
  updateForm1,
} = siteSlice.actions;
export default siteSlice.reducer;

