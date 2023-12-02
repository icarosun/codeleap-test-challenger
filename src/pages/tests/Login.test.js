import React from "react";
import { debug, screen, render, waitFor } from "@testing-library/react";
import { LoginPage } from "../Login";
import { renderWithProviders } from "../../utils/test-utils";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

describe("Login Page", () => {
  it("render the Login Page", () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to CodeLeap network!/);
    expect(screen.getByLabelText("Please enter your username")).toBeInTheDocument();

    expect(screen.getByLabelText(/Please enter your username/)).toBeInTheDocument();

    const enterButton = screen.getByRole("button");
    expect(enterButton).toBeDisabled();
  });

  it("button should be visible when the input has a value different empty", async () => {
    renderWithProviders(<LoginPage />)

    const input = screen.getByLabelText(/Please enter your username/)

    await waitFor(() => {
      userEvent.type(input, "John Doe");
    });

    const enterButton = screen.getByRole("button");
    expect(enterButton).not.toBeDisabled();
  });
});
