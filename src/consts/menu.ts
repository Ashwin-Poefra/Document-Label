import { PATH } from 'consts';

interface IMenu {
  path: string;
  label: string;
  key: string;
}

export const MAIN_MENU: IMenu[] = [
  {
    path: PATH.HOME,
    label: 'Home',
    key: '',
  },
  {
    path: PATH.DOCUMENTS,
    label: 'Documents',
    key: 'documents',
  },
];
