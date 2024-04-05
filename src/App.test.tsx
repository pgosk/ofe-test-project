// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Should render hello heading", async () => {
    render(<App />);

    expect(screen.queryByText("Vite + React")).toBeInTheDocument();
  });
});
