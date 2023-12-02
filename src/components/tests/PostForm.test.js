import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import { PostForm } from "../PostForm";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("PostForm component", () => {
  const setStateMock = jest.fn();
  const handleSubmitMock = jest.fn();

  it("should render PostForm correcly when the user is empty", () => {  
    renderWithProviders(
      <PostForm 
        state = {{title: "", content: ""}}
        setState = {setStateMock}
        onSubmit = {handleSubmitMock}
        labels = {{title: "What's on your mind?"}}
      />
    );

    expect(screen.getByRole("link")).toHaveTextContent(/Login to create posts/); 
  });

  it("should render PostForm correcly when the user is not empty", () => {  
    renderWithProviders(
      <PostForm 
        state = {{title: "", content: ""}}
        setState = {setStateMock}
        onSubmit = {handleSubmitMock}
        labels = {{title: "What's on your mind?"}}
      />, {
        preloadedState: {
          username: {
            name: "Teste"
          },
          posts: [
          ],
        }
      }
    );

    expect(screen.getByRole("heading")).toHaveTextContent(/What's on your/);
    expect(screen.getByLabelText("Title")).toBeInTheDocument();  
    expect(screen.getByLabelText("Content")).toBeInTheDocument();

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("should button not to be disabled when input and textarea is not empty", async () => {
    renderWithProviders(
      <PostForm 
        state = {{title: "Title test", content: "Content test"}}
        setState = {setStateMock}
        onSubmit = {handleSubmitMock}
        labels = {{title: "What's on your mind?"}}
      />, {
        preloadedState: {
          username: {
            name: "Teste"
          },
          posts: [
          ],
        }
      }
    );

    const button = screen.getByRole("button");    

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });
});
