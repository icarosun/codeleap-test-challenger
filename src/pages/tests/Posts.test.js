import { renderWithProviders } from "../../utils/test-utils";
import '@testing-library/jest-dom'
import { PostsPage } from "../Posts";
import { screen } from "@testing-library/react";

describe("Post page", () => {
  it("should render the page correctly", () => {
    renderWithProviders(
     <PostsPage />
    );
    
    expect(screen.getByRole("heading")).toHaveTextContent(/CodeLeap Network/);
  });
});
