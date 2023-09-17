import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

import { type Platform } from "../hooks/useRequestedGame";
interface Props {
  boxs: Platform[];
}

export const GameSkeleton = ({ boxs }: Props) => {
  return (
    <>
      <figure>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ bgcolor: "grey.800" }}
          width={400}
          height={200}
        >
          <Avatar />
        </Skeleton>
      </figure>
      <div className="w-full py-2 flex  gap-2  flex-col ">
        <h3 className="text-xl max-sm:text-2xl max-md:text-3xl px-3 ">
          <Skeleton
            variant="text"
            sx={{
              fontSize: "0.5rem",
              width: "80%",
              backgroundColor: "grey.700",
            }}
          />
        </h3>
        <div className="flex p-3 gap-2">
          {boxs.map((box) => (
            <Skeleton variant="circular" sx={{ backgroundColor: "grey.700" }}>
              <Avatar />
            </Skeleton>
          ))}
        </div>
        <div className="pl-2">
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1.5rem",
              width: "80%",
              backgroundColor: "grey.800",
            }}
            animation="wave"
          />
        </div>
      </div>
    </>
  );
};
