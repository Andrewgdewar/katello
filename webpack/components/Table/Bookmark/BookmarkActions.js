import { API_OPERATIONS, APIActions, get, post } from 'foremanReact/redux/API';
import bookmarkKey from './BookmarkConstants';


export const getBookmarks = key =>
  get({
    type: API_OPERATIONS.GET,
    key: bookmarkKey(key),
    url: '/api/v2/bookmarks',
    params: { search: `controller=${key}` },
  });

export const updateBookmarks = (key, params) =>
  post({
    type: API_OPERATIONS.POST,
    key: bookmarkKey(key),
    url: '/api/v2/bookmarks',
    params: { ...params, search: `controller=${key}` },
  });

export const deleteBookmarks = key =>
  APIActions.delete({
    type: API_OPERATIONS.DELETE,
    key: bookmarkKey(key),
    url: '/api/v2/bookmarks',
    params: { search: `controller=${key}` },
  });
