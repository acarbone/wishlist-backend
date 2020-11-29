const https = require('https');

export class WebPage {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async get(): Promise<string> {
    return new Promise(async (resolve, reject) => {

      let body = [];

      const req = await https.get(this.url, res => {
        res.on('data', chunk => body.push(chunk));
        res.on('end', () => {
          const data = Buffer.concat(body).toString();
          resolve(data);
        });
      });

      req.on('error', e => {
        reject(e);
      });

      req.end();
    });
  }
}
