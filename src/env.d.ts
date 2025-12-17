/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * Global type declarations for the application.
 */

interface Window {
  /** Google Analytics dataLayer */
  dataLayer: unknown[];
  /** Flag indicating Google Analytics has been loaded */
  gaLoaded?: boolean;
  /** Function to show cookie preferences modal */
  showCookiePreferences?: () => void;
}
