import type { FC } from "react";
import { CustomIcon } from "./customIcon/index";
import type { IconProps } from "./types";

export const BusMarkerIcon: FC<IconProps> = (props) => (
  <CustomIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2c-4.42 0-8 .5-8 4v10a3 3 0 0 0 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h6a8 8 0 0 1-1-3.5a5.55 5.55 0 0 1 2.38-4.5H6V6h12v4a4.07 4.07 0 0 1 .5 0a5.34 5.34 0 0 1 1.5.22V6c0-3.5-3.58-4-8-4M7.5 14A1.5 1.5 0 1 1 6 15.5A1.5 1.5 0 0 1 7.5 14m11-2a3.54 3.54 0 0 0-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5a3.54 3.54 0 0 0-3.5-3.5m0 4.8a1.2 1.2 0 1 1 0-2.4a1.29 1.29 0 0 1 1.2 1.2a1.15 1.15 0 0 1-1.2 1.2"
      />
    </svg>
  </CustomIcon>
);
