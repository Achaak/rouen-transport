import type { FC } from "react";
import { CustomIcon } from "./customIcon/index";
import type { IconProps } from "./types";

export const TramIcon: FC<IconProps> = (props) => (
  <CustomIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 16.94V8.5c0-2.79-2.61-3.4-6-3.5l.75-1.5H17V2H7v1.5h4.75L11 5c-3.14.11-6 .73-6 3.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06m-7 1.56a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m5-4.5H7V9h10z"
      />
    </svg>
  </CustomIcon>
);
