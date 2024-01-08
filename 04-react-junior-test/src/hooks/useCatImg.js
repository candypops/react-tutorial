import { useState, useEffect } from 'react';

const CAT_IMAGE_URL = `https://cataas.com/cat/says/`;

export function useCatImg({ fact }) {
  const [imgURL, setImgURL] = useState();

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ").slice(0, 1).join(" ");

    setImgURL(`${CAT_IMAGE_URL}${firstWord}`);
  }, [fact]);
  return { imgURL };
}
