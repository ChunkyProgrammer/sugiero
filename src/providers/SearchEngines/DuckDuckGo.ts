import axios from 'axios';
import { BaseProvider, Suggestion } from '../base';

export type DuckDuckGoSuggestResult = {
  'phrase': string
}[];

export class DuckDuckGo extends BaseProvider {
  protected static defaultUrl: string = 'https://duckduckgo.com';

  /**
   * Gets the URL to query the autosuggest service
   *
   * @static
   * @param {string} searchTerm
   * @return {string}
   */
  static getUrl(searchTerm: string): string {
    return `${this.baseUrl}/ac/?q=${searchTerm}&kl=wt-wt`;
  }

  /**
   * Gets search suggestions for a partial search
   *
   * @static
   * @param {string} partialSearch The term to search suggestions for
   * @return {Promise<Suggestion[]>} The suggested searches
   */
  static async getSuggestions(partialSearch: string): Promise<Suggestion[]> {
    const url = this.getUrl(partialSearch);

    const res = await axios(url);
    const suggestions = await res.data as DuckDuckGoSuggestResult;

    return suggestions.map((suggestion) => ({
      term: suggestion.phrase,
      type: 'QUERY',
    }));
  }
}
