import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Username {
  name: string;
}

const UsernameInitialState: Username = {
  name: "",
}

const usernameSlice = createSlice({
  name: "username",
  initialState: UsernameInitialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.name = action.payload;
    }
  }
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
