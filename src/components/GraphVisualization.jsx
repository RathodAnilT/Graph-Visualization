import React, { useEffect, useRef } from 'react';
import { Network, DataSet } from 'vis-network/standalone';
import { nodes, edges } from '../data';

const GraphVisualization = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const data = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges),
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        font: {
          size: 16,
          color: '#ffffff',
        },
        color: '#007bff',
      },
      edges: {
        width: 2,
        color: '#cccccc',
      },
      layout: {
        improvedLayout: true,
      },
      interaction: {
        hover: true,
      },
    };

    const network = new Network(containerRef.current, data, options);

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div className="my-4 p-4 bg-gray-800 rounded">
      <h2 className="text-2xl font-bold mb-2">Graph Visualization</h2>
      <div ref={containerRef} className="h-64"></div>
    </div>
  );
};

export default GraphVisualization;
