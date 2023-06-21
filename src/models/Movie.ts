export default class {
  id: number;
  title: string;
  openingText: string;
  releaseDate: string;

  constructor({ id, title, openingText = '', releaseDate = '' } : { id: number, title: string, openingText: string, releaseDate: string }) {
    this.id = id;
    this.title = title;
    this.openingText = openingText;
    this.releaseDate = releaseDate;
  }
}