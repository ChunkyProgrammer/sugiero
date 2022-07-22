import { Google, GoogleSuggestResult } from '../SearchEngines/Google';

export type YouTubeSuggestResult = GoogleSuggestResult;

export class YouTube extends Google {
  /**
   * Gets the URL to query the autosuggest service
   *
   * @static
   * @param {string} searchTerm
   * @return {string}
   */
  static getUrl(searchTerm: string): string {
    return `${this.baseUrl}/complete/search?client=chrome&ds=yt&q=${searchTerm}`;
  }
}
