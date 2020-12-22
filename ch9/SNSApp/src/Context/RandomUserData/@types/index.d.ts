interface IUserProfile {
  name: string;
  phot: string;
}

interface IFeed extends IUserProfile {
  images: Array<string>;
  description: string;
}