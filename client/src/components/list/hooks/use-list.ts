import React from 'react';

import { Item } from '/index.d';

function useList() {
  return {
    items: [] as Item[],
  };
}

export default useList;
