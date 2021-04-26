import { useDispatch as useReduxDispatch } from 'react-redux';

import store from 'state/store';


export const useDispatch = (): typeof store.dispatch => {
  return useReduxDispatch<typeof store.dispatch>();
};
