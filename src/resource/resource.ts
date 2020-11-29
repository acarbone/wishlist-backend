export interface Resource {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
  expiredAt: Date;
  createdAt: Date;
  //save(): Resource;
};

export class WebResource implements Resource {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
  expiredAt: Date;
  createdAt: Date;
}
