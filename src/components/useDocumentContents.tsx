import React, { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { contentsState, Index } from '@src/store';

export default function useDocumentContents(tabId: string) {
  const setContents = useSetRecoilState(contentsState);
  const contentsByTab = useCallback(() => {
    const contents: Index[] = [];
    const headingList = document.querySelectorAll(
      `#${tabId} h1, #${tabId} h2, #${tabId} h3, #${tabId} h4`
    );
    headingList.forEach((h, i) => {
      h.id = `hc-${i}-${h.tagName}`;
      contents.push({
        id: h.id,
        title: h.innerHTML,
        top: h.getBoundingClientRect().top
      });
    });
    return contents;
  }, [tabId]);

  useEffect(() => {
    setContents(contentsByTab());
  }, []);
}
