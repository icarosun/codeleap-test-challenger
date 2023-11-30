import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date;
  id: string;
}

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
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<Post>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updatePost(state, action: PayloadAction<Post>) {
      state.posts[action.payload.id] = {
        ...state.posts[action.payload.id],
        ...action.payload,
      }
    }
  }
});

export const { addPost, removePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer; 
