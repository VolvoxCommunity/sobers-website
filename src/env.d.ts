/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * Global type declarations for the application.
 */

interface Window {
  /** Google Analytics dataLayer */
  dataLayer: unknown[];
  /** Google Analytics gtag function */
  gtag?: (...args: unknown[]) => void;
  /** Flag indicating Google Analytics has been loaded */
  gaLoaded?: boolean;
  /** Function to show cookie preferences modal */
  showCookiePreferences?: () => void;
  /** Function to track GA events (respects consent) */
  trackGAEvent?: (eventName: string, params?: Record<string, string | number | boolean>) => void;
}
