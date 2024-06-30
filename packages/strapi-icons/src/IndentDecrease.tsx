import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIndentDecrease = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#IndentDecrease_svg__a)">
      <path
        fill="#32324D"
        d="M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8ZM1 12l4.9-4.2v8.4L1 12Z"
      />
    </g>
    <defs>
      <clipPath id="IndentDecrease_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIndentDecrease;