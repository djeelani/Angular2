export class User {
  name: string;
  street?: string;
  postcode?: string;
  authToken: string;

  constructor(name: string, authToken: string ) { this.name = name; this.authToken = authToken }
}
