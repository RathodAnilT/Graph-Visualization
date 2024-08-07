import React from 'react';
import GraphVisualization from './components/GraphVisualization';
import ShortestPath from './components/ShortestPath';
import CycleDetection from './components/CycleDetection';
import MostConnectedUser from './components/MostConnectedUser';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Social Network Graph Analysis</h1>
      <GraphVisualization />
      <ShortestPath />
      <CycleDetection />
      <MostConnectedUser />
    </div>
  );
};

export default App;
