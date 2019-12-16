import React from 'react';

const App = ({ lakes }) => (
  <div>
    <ul>
      {lakes.map(lake => (
        <li key={lake.id}>
          Name: {lake.name} | TrailHead: {lake.trailhead}
        </li>
      ))}
    </ul>
  </div>
);

export default App;
