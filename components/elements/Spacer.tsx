import React from 'react';

export enum SpacerTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

type SpacerProps = {
  style?: React.CSSProperties | undefined;
  size?: number;
  type?: 'horizontal' | 'vertical';
};

const Spacer = ({
  style = undefined,
  size = 10,
  type = SpacerTypes.HORIZONTAL,
  ...rest
}: SpacerProps): JSX.Element => (
  <div
    style={type === SpacerTypes.HORIZONTAL ?
      { width: size || 10, height: '100%' }
      : { height: size || 10, width: '100%' }
    }
    {...rest}
  />
);

export default Spacer;
