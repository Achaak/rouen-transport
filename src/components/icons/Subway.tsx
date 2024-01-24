import type { FC } from "react";
import { CustomIcon } from "./customIcon/index";
import type { IconProps } from "./types";

export const SubwayIcon: FC<IconProps> = (props) => (
  <CustomIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8.5 15a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 9h10v5H7zm8.5 6a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m2.5.88V9c0-2.62-2.68-3-6-3c-3 0-6 .37-6 3v6.88a2.62 2.62 0 0 0 2.62 2.62L7.5 19.62V20h1.67l1.5-1.5h2.83L15 20h1.5v-.38l-1.13-1.12c1.45 0 2.63-1.17 2.63-2.62M17.8 2.8C20.47 3.84 22 6.05 22 8.86V22H2V8.86C2 6.05 3.53 3.84 6.2 2.8C8 2.09 10.14 2 12 2c1.86 0 4 .09 5.8.8"
      />
    </svg>
  </CustomIcon>
);
