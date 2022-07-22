/* eslint-disable @typescript-eslint/no-unused-vars */
export type SuggestionType = 'QUERY' | 'NAVIGATION';

export interface Suggestion {
  term: string,
  type: SuggestionType
}

export class BaseProvider {
  protected static baseUrl = '';

  protected static defaultUrl = '';

  static setBaseUrl(url: string) {
    if (url !== '')
      this.baseUrl = url;
    else
      this.baseUrl = this.defaultUrl;
  }

  static getUrl(searchTerm: string) : string { return this.baseUrl + searchTerm; }

  static getSuggestions(partialSearch: string) : Promise<Suggestion[]> {
    throw new Error(`Get suggestions not defined: ${partialSearch} `);
  }
}
