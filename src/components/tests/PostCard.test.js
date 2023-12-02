import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import { PostCard } from "../PostCard";
import { screen } from "@testing-library/react";

describe("PostCard component", () => {
  const postTest = {id: "12", title: "Test title", content: "Content test", createdAt: Date.now(), author: "Teste"};
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();

  it("should render PostCard correctly", () => {
    renderWithProviders(
      <PostCard post={postTest} allowEdit = {true} onDelete = {onDeleteMock} onEdit = {onEditMock} />
    );

    expect(screen.getByText(postTest.title, {selector: "h2"})).toBeInTheDocument();
    expect(screen.getByRole("heading", { selector: "h3"})).toHaveTextContent(postTest.author);
    expect(screen.getByText(postTest.content)).toBeInTheDocument();
  });
});
