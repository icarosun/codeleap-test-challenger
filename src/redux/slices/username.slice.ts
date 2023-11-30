import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

const UsernameInitialState: User = {
  name: "",
}

const usernameSlice = createSlice({
  name: "username",
  initialState: UsernameInitialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    }
  }
});

export const { setUserName } = usernameSlice.actions;
export default usernameSlice.reducer;
