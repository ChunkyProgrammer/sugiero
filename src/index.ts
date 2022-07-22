import { Suggestion } from './providers/base';
import { Brave } from './providers/SearchEngines/Brave';
import { DuckDuckGo } from './providers/SearchEngines/DuckDuckGo';
import { Google } from './providers/SearchEngines/Google';
import { Qwant } from './providers/SearchEngines/Qwant';
import { Startpage } from './providers/SearchEngines/Startpage';
import { Swisscows } from './providers/SearchEngines/Swisscows';
import { Yahoo } from './providers/SearchEngines/Yahoo';
import { YouTube } from './providers/YouTube/YouTube';

export type SearchProviderType = 'Brave' | 'DuckDuckGo' | 'Google' | 'Invidious' | 'Piped' | 'Qwant' | 'Startpage' | 'Swisscows' | 'Yahoo' | 'YouTube';

/**
 * Gets search suggestions for a partial search
 *
 * @export
 * @param {string} partialSearch The term to search suggestions for
 * @param {SearchProviderType} searchProvider
 * @return {Promise<Suggestion[]>} The suggested searches
 */
export async function getSuggestions(partialSearch: string, searchProvider: SearchProviderType = 'Google', baseUrl: string = ''): Promise<Suggestion[]> {
  switch (searchProvider) {
    case 'Brave':
      Brave.setBaseUrl(baseUrl);
      return Brave.getSuggestions(partialSearch);
    case 'DuckDuckGo':
      DuckDuckGo.setBaseUrl(baseUrl);
      return DuckDuckGo.getSuggestions(partialSearch);
    case 'Qwant':
      Qwant.setBaseUrl(baseUrl);
      return Qwant.getSuggestions(partialSearch);
    case 'Startpage':
      Startpage.setBaseUrl(baseUrl);
      return Startpage.getSuggestions(partialSearch);
    case 'Swisscows':
      Swisscows.setBaseUrl(baseUrl);
      return Swisscows.getSuggestions(partialSearch);
    case 'Yahoo':
      Yahoo.setBaseUrl(baseUrl);
      return Yahoo.getSuggestions(partialSearch);
    case 'YouTube':
      YouTube.setBaseUrl(baseUrl);
      return YouTube.getSuggestions(partialSearch);
    default:
      Google.setBaseUrl(baseUrl);
      return Google.getSuggestions(partialSearch);
  }
}
