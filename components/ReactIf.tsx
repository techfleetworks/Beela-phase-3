import React, { FC } from 'react';

/**
 * Wrapper component for conditionally rendering children
 * @param {() => boolean | boolean} condition - Renders children if condition is evaluated to true.
 */
const ReactIf: FC<{ condition: (() => boolean) | boolean | undefined | null | 0 | 1 }> = ({ children, condition }) => (<>{ (typeof condition === 'function' ? condition() : !!condition) ? children : undefined}</>);

export default ReactIf;
