import React, { useState, useEffect } from 'react';
import { nodes, edges } from '../data';

const findMostConnectedUser = (graph) => {
  let maxConnections = 0;
  let mostConnectedUser = null;

  Object.keys(graph).forEach((node) => {
    const connections = graph[node].length;
    if (connections > maxConnections) {
      maxConnections = connections;
      mostConnectedUser = node;
    }
  });

  return mostConnectedUser;
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

const MostConnectedUser = () => {
  const [mostConnectedUser, setMostConnectedUser] = useState(null);

  useEffect(() => {
    const graph = buildGraph(edges);
    setMostConnectedUser(findMostConnectedUser(graph));
  }, []);

  return (
    <div className="my-4 p-4 bg-gray-800 rounded">
      <h2 className="text-2xl font-bold mb-2">Most Connected User</h2>
      <div className="mt-4">
        {mostConnectedUser ? (
          <p>The most connected user is: {mostConnectedUser}</p>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default MostConnectedUser;
