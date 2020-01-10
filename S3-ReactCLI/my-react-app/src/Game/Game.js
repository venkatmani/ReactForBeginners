// import React, { useState } from 'react';

// const game = () => {
//   const [gameState, setGameState] = useState({
//     games: [
//       { name: 'Formula1', type: '4-Wheels' },
//       { name: 'MotoGP', type: '2-Wheels' }
//     ]
//   });
//   return (
//     <div>
//       <button onClick={changeGameName}>I took another step</button>
//     </div>
//   );
//   const changeGameName = () => {
//     setGameState({
//       games: [
//         { name: 'Formula2', type: '4-Wheels' },
//         { name: 'Cricket', type: '2-Wheels' }
//       ]
//     });
//   };
//   console.log(gameState.games.name);
// };

// // const game = props => {
// //   const [gameState, newGameState] = useState({
// //     games: [{ name: props.name }]
// //   });

// export default game;

import React, { useState } from 'react';

function Demo1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default Demo1;
