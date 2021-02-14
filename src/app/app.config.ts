import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

/**
 * Enumeration of all supported languages.
 */
export enum Languages {
  DE = 'de',
  EN = 'en',
}

/**
 * Loader used for loading translation files via http.
 */
export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<unknown> {
    return from(import(`../assets/i18n/${lang}.json`));
  }
}
