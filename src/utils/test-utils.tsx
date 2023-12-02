import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";
import { PreloadedState } from "redux";
import { AppStore, RootState, setupStore } from "../redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <MemoryRouter><Provider store = {store}>{children}</Provider></MemoryRouter>
  }
  
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions}) }
}

