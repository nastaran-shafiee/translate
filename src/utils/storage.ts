// utils/storage.ts

import type { TranslationState } from "../types";

const STORAGE_KEY = 'translation_data';

export const saveData = (data: TranslationState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getData = (): TranslationState | null => {
  const json = localStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : null;
};
