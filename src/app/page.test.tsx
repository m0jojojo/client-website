import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page (Phase 0 placeholder)", () => {
  it("shows the brand heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "The Block Bagru" }),
    ).toBeInTheDocument();
  });

  it("links to WhatsApp with the client's number", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
      "href",
      expect.stringContaining("918813835525"),
    );
  });
});
