import React from 'react';

export const ChessProvider: React.FC = (props) => {

  return (
    <div>
      {props.children}
    </div>
  );
};