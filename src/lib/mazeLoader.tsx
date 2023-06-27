"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    mazeUniversalSnippetApiKey: any;
  }
}

const MazeLoader = () => {
  useEffect(() => {
    (function (m: Window, a: Document, z: string, e: string) {
      var s, t;
      try {
        t = m.sessionStorage.getItem('maze-us');
      } catch (err) {}

      if (!t) {
        t = new Date().getTime().toString();
        try {
          m.sessionStorage.setItem('maze-us', t);
        } catch (err) {}
      }

      s = a.createElement('script');
      s.src = z + '?t=' + t + '&apiKey=' + e;
      s.async = true;
      a.getElementsByTagName('head')[0].appendChild(s);
      m.mazeUniversalSnippetApiKey = e;
    })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '03eb079c-4b8b-430b-87c8-98caedf5a9d7');
  }, []);

  return null;
};

export default MazeLoader;
