export type SupportMatrix = Record<string, Browser>;

export interface Browser {
  // Browser (e.g. IE, Chrome)
  browser: string;
  // Browser version number (e.g. 74)
  browser_version?: string;
  // Operating system (e.g. Windows)
  os: string;
  // Operating system version (e.g. 10)
  os_version: string;
  // Mobile device. E.g. "iPhone 4s
  device?: string;
  mobile?: boolean;
  desktop?: boolean;
  legacy?: boolean;
  latest?: boolean;
}

/**
 * Export supported browsers
 */
export const browsers: SupportMatrix = {
  // Latest Desktop
  "Chrome-74.0": {
    browser: "Chrome",
    browser_version: "74",
    os: "Windows",
    os_version: "10",
    desktop: true,
    latest: true,
  },
  "Firefox-66.0": {
    browser: "Firefox",
    browser_version: "66.0",
    os: "Windows",
    os_version: "10",
    desktop: true,
    latest: true,
  },
  "Safari-12.1": {
    browser: "Safari",
    browser_version: "12.0",
    os: "OS X",
    os_version: "Mojave",
    desktop: true,
    latest: true,
  },
  "Edge-18": {
    browser: "Edge",
    browser_version: "18",
    os: "Windows",
    os_version: "10",
    desktop: true,
    latest: true,
  },

  // Legacy Desktop
  "IE-11.0": {
    browser: "IE",
    browser_version: "11",
    os: "Windows",
    os_version: "10",
    desktop: true,
    legacy: true,
  },
  "Chrome-40.0": {
    browser: "Chrome",
    browser_version: "40",
    os: "Windows",
    os_version: "10",
    desktop: true,
    legacy: true,
  },
  "Safari-9.1": {
    browser: "Safari",
    browser_version: "9.1",
    os: "OS X",
    os_version: "El Capitan",
    desktop: true,
    legacy: true,
  },
  "Firefox-48.0": {
    browser: "Firefox",
    browser_version: "48",
    os: "Windows",
    os_version: "10",
    desktop: true,
    legacy: true,
  },

  // Legacy Mobile
  "Android-4": {
    browser: "android",
    os: "android",
    os_version: "4.0",
    device: "Google Nexus",
    mobile: true,
    legacy: true,
  },
  "ios-5.1": {
    browser: "iPhone",
    os: "ios",
    os_version: "5.1",
    device: "iPhone 4S",
    mobile: true,
    legacy: true,
  },
};
