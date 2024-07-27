import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Bitcoin = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    viewBox="0 -0.5 34 34"
    {...props}
  >
    <Path
      fill="#F7931A"
      fillRule="evenodd"
      d="M33.254 16.13c0 8.907-7.221 16.128-16.128 16.128-8.908 0-16.129-7.22-16.129-16.129C.997 7.221 8.218 0 17.125 0c8.908 0 16.129 7.221 16.129 16.13ZM21 10.136c2.244.77 3.885 1.924 3.563 4.07-.234 1.573-1.109 2.333-2.27 2.6 1.594.827 2.137 2.396 1.632 4.294-.959 2.73-3.238 2.96-6.269 2.39l-.736 2.935-1.777-.442.726-2.896c-.46-.114-.931-.236-1.416-.366l-.729 2.91-1.775-.441.735-2.942-3.579-.9.883-2.026s1.31.346 1.292.32c.503.124.727-.202.815-.42l1.994-7.967c.023-.376-.108-.85-.828-1.03.028-.019-1.29-.32-1.29-.32l.472-1.89 3.584.884.73-2.908 1.775.442-.714 2.85c.478.108.958.218 1.425.334l.708-2.832 1.777.441-.728 2.91Zm-4.251 4.851c1.21.321 3.844 1.02 4.303-.811.468-1.874-2.09-2.44-3.343-2.716-.142-.032-.268-.06-.37-.085l-.884 3.536c.084.02.183.047.294.076Zm-1.371 5.693c1.45.382 4.62 1.217 5.124-.8.517-2.064-2.557-2.75-4.057-3.086-.168-.037-.316-.07-.437-.1l-.976 3.896c.1.025.215.055.345.09Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Bitcoin;