import { WebResource } from "../resource";
import { WebPage } from "./WebPage";

export class MetaWebPage {
  webPage: WebPage;

  constructor(webPage: WebPage) {
    this.webPage = webPage;
  }

  toWebResource(): WebResource {
    return {
      id: 123,
      image: 'img',
      description: 'desc',
      expiredAt: new Date(),
      createdAt: new Date(),
      url: this.webPage.url,
      title: 'title'
    };
  }
}
