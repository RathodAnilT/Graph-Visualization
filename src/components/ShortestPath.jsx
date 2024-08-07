import React, { useState } from 'react';
import { nodes, edges } from '../data';

const findShortestPath = (start, end, graph) => {
  if (start === end) return [start];

  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (visited.has(node)) continue;

    for (const neighbor of graph[node] || []) {
      const newPath = [...path, neighbor];
      if (neighbor === end) return newPath;
      queue.push(newPath);
    }

    visited.add(node);
  }

  return null;
};

const buildGraph = (edges) => {
  const graph = {};
  edges.forEach(({ from, to }) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
    if (!graph[to]) graph[to] = [];
    graph[to].push(from);
  });
  return graph;
};

const ShortestPath = () => {
  const [startNode, setStartNode] = useState('');
  const [endNode, setEndNode] = useState('');
  const [path, setPath] = useState(null);

  const handleFindPath = () => {
    const graph = buildGraph(edges);
    const result = findShortestPath(startNode, endNode, graph);
    setPath(result);
  };

  return (
    <div className="my-4 p-4 bg-gray-800 rounded">
      <h2 className="text-2xl font-bold mb-2">Find Shortest Path</h2>
      <input
        type="text"
        placeholder="Start Node"
        value={startNode}
        onChange={(e) => setStartNode(e.target.value)}
        className="p-2 m-2 bg-gray-700 text-white rounded"
      />
      <input
        type="text"
        placeholder="End Node"
        value={endNode}
        onChange={(e) => setEndNode(e.target.value)}
        className="p-2 m-2 bg-gray-700 text-white rounded"
      />
      <button onClick={handleFindPath} className="p-2 bg-blue-500 rounded">
        Find Path
      </button>
      {path && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Shortest Path:</h3>
          <p>{path.join(' -> ')}</p>
        </div>
      )}
    </div>
  );
};

export default ShortestPath;
