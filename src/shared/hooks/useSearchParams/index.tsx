'use client';
import { useRef, useState, useEffect } from 'react';

type SearchParams = {
  [key: string]: string | number | boolean | null | undefined;
};
type Callback = (prev: SearchParams) => SearchParams;

export function useSearchParams(): [
  SearchParams,
  (fn: Callback | SearchParams) => void,
] {
  if (typeof window === 'undefined') return [{}, () => {}];

  const stateRef = useRef({});
  const [state, setState] = useState(parse(window.location.search));

  function setSearchParams(fn: Callback | SearchParams): void {
    setState((prev) => {
      const state = typeof fn === 'function' ? fn(prev) : fn;
      stateRef.current = state;
      return state;
    });
  }

  useEffect(() => {
    window.history.pushState(null, '', stringify(stateRef.current));
  }, [stateRef.current]);

  return [state, setSearchParams];
}

function parse(str: string): SearchParams {
  if (!str) return {};
  const obj: SearchParams = {};
  const pairs = str.split('?')[1].split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    const key = decodeURIComponent(pair[0]);
    const value = decodeURIComponent(pair[1]);
    try {
      obj[key] = JSON.parse(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}

function stringify(obj: SearchParams): string {
  const str: string[] = [];
  for (const p in obj)
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str.push(
        encodeURIComponent(p) + '=' + encodeURIComponent(obj[p] as string),
      );
    }

  return str.length > 0 ? '?' + str.join('&') : '';
}
