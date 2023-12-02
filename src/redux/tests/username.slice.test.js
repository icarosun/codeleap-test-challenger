import reducer, { setUserName } from "../slices/username.slice";

describe("Username slice", () => {
  const previousState = {name: ""};

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined})).toEqual({
      name: ""
    })
  });

  it("should change name when a name is empty", () => {
    expect(reducer(previousState, setUserName("Test"))).toEqual({
      name: "Test"
    })
  });
});
