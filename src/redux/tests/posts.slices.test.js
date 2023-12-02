import reducer, { addOnePost, removeOnePost, updateOnePost } from "../slices/posts.slice";

describe("Posts slices", () => {
  it("should return the initial state", () => {
    const previousState = {posts: []};

    expect(reducer(undefined, { type: undefined })).toEqual(
      previousState
    )
  });

  it("should handle a post being added to an empy list", () => {
    const postTest = {id: "12", title: "Test title", content: "Content test", createdAt: Date.now(), author: "Teste"};
    const previousState = {posts: []};

    expect(reducer(previousState, addOnePost(postTest))).toEqual(
      {
        posts: [
          postTest
        ] 
      }
    )  
  });

  it("should handle a post being added to an existing list", () => {
    const createdAt = Date.now();
    const previousState = { 
      posts: [
        {id: "12", title: "Test title", content: "Content test", createdAt, author: "Teste"}
      ]
    }

    const newPost = {id: "13", title: "Test 2", content: "Content test 2", createdAt, author: "Teste 1"};

    expect(reducer(previousState, addOnePost(newPost))).toEqual(
      {
        posts: [
          {id: "12", title: "Test title", content: "Content test", createdAt, author: "Teste"},
          newPost
        ]
      }
    )
  });

  it("should handle a post being removed to an existing list", () => {
    const createdAt = Date.now();
    const previousState = { 
      posts: [
        {id: "12", title: "Test title", content: "Content test", createdAt, author: "Teste"}
      ]
    }

    expect(reducer(previousState, removeOnePost({id: "12", title: "Test title", content: "Content test", createdAt, author: "Teste"})))
      .toEqual({posts: []})
  });

  it("should handle a post being update", () => {
    const createdAt = Date.now();
    const previousState = { 
      posts: [
        {id: "12", title: "Test title", content: "Content test", createdAt, author: "Teste"}
      ]
    }

    expect(reducer(previousState, updateOnePost({id: "12", title: "Title updated", content: "Content updated", createdAt, author: "Teste"}))).toEqual(
      {
        posts: [
          {id: "12", title: "Title updated", content: "Content updated", createdAt, author: "Teste"}    
        ]
      }
    )

  });
});
