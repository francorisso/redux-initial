import Immutable from 'immutable';
import config from '../../config';
import * as commentsApi from '../../api/comments';

const NAMESPACE = `${config.packageName}/namespace`;

export const SOME = `${NAMESPACE}/SOME`;

const initState = Immutable.Map({
  some: '',
});
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SOME:
      return state.set('some', action.some);

    default:
      return state;
  }
}

export const some = some => ({
  type: SOME,
  some,
});
