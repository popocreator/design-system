import { atom } from 'recoil';

export interface Index {
  id: string;
  title: string;
  top: number;
}

export const contentsState = atom<Index[]>({
  key: 'contentsState',
  default: []
});
