import React from 'react';
import { NextSeo } from 'next-seo';
import TreePruningComponent  from '@/components/pages/tree-pruning';

const TreePruning = () => {
  return (
    <>
      <NextSeo title='Tree Pruning' />
      <TreePruningComponent />
    </>
  )
}

export default TreePruning