import { WebPage } from "../../../src/resource/parser/WebPage";

describe("WebPage", () => {
  test("WebPage retrieves content from given URL", async () => {
    let webpage: WebPage = new WebPage('https://www.google.com');
    let content = await webpage.get();

    expect(typeof content).toBe('string');
    expect(content).toContain('<!doctype html>');
  });
});
