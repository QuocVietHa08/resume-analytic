import React from 'react';
import { NextSeo } from 'next-seo';
import TreePruningComponent from '@/components/pages/tree-pruning';

const TreePruning = () => {
  return (
    <>
      <NextSeo
        title="Expert Tree Pruning Services in Singapore | KungFu Helper"
        description="Maintain the health and appearance of your trees with our expert tree pruning services. KungFu Helper's arborists ensure proper trimming techniques for optimal growth and aesthetics."
      />
      <TreePruningComponent />
    </>
  );
};

export default TreePruning;
