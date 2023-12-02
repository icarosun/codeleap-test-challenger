import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types";


interface PostState {
  posts: Post[];
}

const postInitialState: PostState = {
  posts: [], 
}

const postsSlice = createSlice({
  name: "posts",
  initialState: postInitialState,
  reducers: {
    addOnePost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    removeOnePost(state, action: PayloadAction<Post>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updateOnePost(state, action: PayloadAction<Post>) {
      const index = state.posts.findIndex(({id}) => id === action.payload.id);

      state.posts[index] = {
        ...state.posts[index],
        ...action.payload,
      }
    }
  }
});

export const { addOnePost, removeOnePost, updateOnePost } = postsSlice.actions;
export default postsSlice.reducer; 
