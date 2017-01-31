/* global fetch */
import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function fetchJSON(endpoint, params) {
  return fetch(endpoint, params)
    .then(checkStatus)
    .then(parseJSON);
}

export function postJSON(endpoint, params) {
  return fetchJSON(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}

export function getJSON(endpoint) {
  return fetchJSON(endpoint);
}
