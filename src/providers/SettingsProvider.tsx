import React, { createContext, useEffect, useState } from 'react';

export interface Settings {
  isDarkTheme: boolean;

  darkTheme: boolean;
  useSystemTheme: boolean;
  allowPause: boolean;
  defaultUsername: string;
}

const InitialSettings: Settings = {
  isDarkTheme: false,

  darkTheme: false,
  useSystemTheme: true,
  allowPause: true,
  defaultUsername: 'online player',

};

const colourSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const findExistingSettings = (): Settings => {
  const settings = { ...InitialSettings };

  const darkTheme = localStorage.getItem('react-chess.darkTheme');
  darkTheme && (settings.darkTheme = darkTheme === 'true');
  const useSystemTheme = localStorage.getItem('react-chess.useSystemTheme');
  useSystemTheme && (settings.useSystemTheme = useSystemTheme === 'true');
  const allowPause = localStorage.getItem('react-chess.allowPause');
  allowPause && (settings.allowPause = allowPause === 'true');

  const username = localStorage.getItem('react-chess.defaultUsername');
  username && (settings.defaultUsername = username);

  return settings;
};

const saveSettings = (settings: Settings) => {
  for (const [key, value] of Object.entries(settings)) {
    localStorage.setItem(`react-chess.${key}`, value);
  }
  return;
};


type UpdateSettings = React.Dispatch<React.SetStateAction<Settings>>;

export const SettingsContext = createContext<Settings & { updateSettings: UpdateSettings }>({ ...InitialSettings, updateSettings: () => undefined });

export const SettingsProvider: React.FC = (props) => {
  const [settings, setSettings] = useState<Settings>(InitialSettings);

  const [systemDarkMode, setSystemDarkMode] = useState(false);

  const updateBrowserTheme = (event: MediaQueryListEvent) => {
    setSystemDarkMode(event.matches);
  };

  useEffect(() => {
    setSettings(findExistingSettings());

    colourSchemeMediaQuery.addEventListener('change', updateBrowserTheme);

    return () => {
      saveSettings(settings);
      colourSchemeMediaQuery.removeEventListener('change', updateBrowserTheme);
    };
  }, []);

  useEffect(() => {
    if (settings.useSystemTheme) {
      if (systemDarkMode !== settings.isDarkTheme)
        setSettings(s => {
          const state = { ...s };
          state.isDarkTheme = systemDarkMode;
          return state;
        });
    } else {
      if (settings.darkTheme !== settings.isDarkTheme)
        setSettings(s => {
          const state = { ...s };
          state.isDarkTheme = settings.darkTheme;
          return state;
        });
    }

    saveSettings(settings);
  }, [settings.darkTheme, settings.useSystemTheme, systemDarkMode]);

  return (
    <SettingsContext.Provider value={{ ...settings, updateSettings: setSettings }}>
      {props.children}
    </SettingsContext.Provider>
  );
};