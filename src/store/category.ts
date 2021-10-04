import { atom } from 'recoil';

export const categoryState = atom<string[]>({
  key: 'category',
  default: [],
});
