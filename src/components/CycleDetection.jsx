import React, { useState } from 'react';
import { edges } from '../data';

const hasCycle = (graph) => {
  const visited = new Set();
  const recStack = new Set();

  const dfs = (node) => {
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    recStack.add(node);

    for (const neighbor of graph[node] || []) {
      if (dfs(neighbor)) return true;
    }

    recStack.delete(node);
    return false;
  };

  return Object.keys(graph).some((node) => dfs(node));
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

const CycleDetection = () => {
  const [hasCycleState, setHasCycleState] = useState(false);

  const handleDetectCycle = () => {
    const graph = buildGraph(edges);
    setHasCycleState(hasCycle(graph));
  };

  return (
    <div className="my-4 p-4 bg-gray-800 rounded">
      <h2 className="text-2xl font-bold mb-2">Detect Cycles</h2>
      <button onClick={handleDetectCycle} className="p-2 bg-blue-500 rounded">
        Detect Cycles
      </button>
      <div className="mt-4">
        {hasCycleState ? (
          <p>Graph contains a cycle.</p>
        ) : (
          <p>Graph does not contain any cycle.</p>
        )}
      </div>
    </div>
  );
};

export default CycleDetection;
