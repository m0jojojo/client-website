import { describe, expect, it } from "vitest";
import { siteConfig, toWhatsappNumber, whatsappLink } from "./site";

describe("siteConfig", () => {
  it("has the client's real contact number", () => {
    expect(siteConfig.contact.phone).toBe("8813835525");
  });

  it("leaves GSTIN empty until provided", () => {
    expect(siteConfig.contact.gstin).toBe("");
  });
});

describe("whatsappLink", () => {
  it("prefixes the India country code to a 10-digit number", () => {
    expect(whatsappLink()).toBe("https://wa.me/918813835525");
  });

  it("url-encodes the optional message", () => {
    expect(whatsappLink("Hi there & hello")).toBe(
      "https://wa.me/918813835525?text=Hi%20there%20%26%20hello",
    );
  });
});

describe("toWhatsappNumber", () => {
  it("strips formatting characters", () => {
    expect(toWhatsappNumber("+91 88138-35525")).toBe("918813835525");
  });

  it("keeps numbers that already include a country code", () => {
    expect(toWhatsappNumber("918813835525")).toBe("918813835525");
  });
});
