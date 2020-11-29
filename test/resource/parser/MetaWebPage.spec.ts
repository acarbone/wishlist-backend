import { MetaWebPage } from "../../../src/resource/parser/MetaWebPage";
import { WebPage } from "../../../src/resource/parser/WebPage";

describe("Meta Web Page", () => {
  test("MetaWebPage knows how to retrieve meta info from given webpage content", async () => {
    let metaWebPage: MetaWebPage = new MetaWebPage(
      new WebPage('https://www.apple.com/it/iphone-12/')
    );
    let resource = metaWebPage.toWebResource();
    expect(resource.url).toBe('https://www.apple.com/it/iphone-12/');
  });
});
