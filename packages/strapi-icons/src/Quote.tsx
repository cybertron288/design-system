import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#32324D"
      d="M10.479 6.329c-1.206.642-2.267 1.655-2.992 2.788-.758 1.185-1.161 2.521-.951 3.715l.03.175.173-.04a4.1 4.1 0 0 1 1.713.01c.62.137 1.21.425 1.607.923.538.683.805 1.527.805 2.516 0 1.133-.358 2.022-1.089 2.674-.737.658-1.674.992-2.811.992-2.573 0-4.432-2.067-4.825-5.3C1.523 9.74 5.075 5.72 8.757 3.914l1.722 2.415Zm7.16 6.503.03.175.173-.04a4.076 4.076 0 0 1 1.707.01c.618.137 1.21.425 1.613.924.538.683.804 1.527.804 2.515 0 1.133-.358 2.022-1.088 2.674-.737.658-1.675.992-2.812.992-2.572 0-4.417-2.067-4.811-5.3-.616-5.043 2.923-9.062 6.605-10.868l1.721 2.415c-1.205.642-2.266 1.655-2.991 2.788-.759 1.185-1.162 2.521-.952 3.715Z"
    />
  </svg>
);
export default SvgQuote;