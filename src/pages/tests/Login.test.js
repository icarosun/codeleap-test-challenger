import React from "react";
import { screen, render } from "@testing-library/react";
import { LoginPage } from "../Login";

describe("Login Page", () => {
  it("render the Login Page", () => {
    render(<LoginPage />);

    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to CodeLeap network!/);

    expect(screen.getByRole("input")).toBeInTheDocument();

    const enterButton = screen.getByTitle("button", { name: "Enter"});
    expect(enterButton).toBeDisabled();
  })
});
