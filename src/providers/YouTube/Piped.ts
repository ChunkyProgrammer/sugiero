import axios from 'axios';
import { BaseProvider, Suggestion } from '../base';

export type PipedSuggestResult = string[];

export class Piped extends BaseProvider {
  protected static defaultUrl: string = 'https://pipedapi.kavin.rocks';

  /**
     * Gets the URL to query the autosuggest service
     *
     * @static
     * @param {string} searchTerm
     * @return {string}
     */
  static getUrl(searchTerm: string): string {
    return `${this.baseUrl}/suggestions?query=${searchTerm}`;
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
    const suggestions = await res.data as PipedSuggestResult;

    return suggestions.map((suggestion) => ({
      term: suggestion,
      type: 'QUERY',
    }));
  }
}
