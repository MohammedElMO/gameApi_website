import React from "react";
import type { GameQuery } from "../../App";
import useRequestedGames from "../hooks/useRequestedGame";
import CropImage from "../services/image-url";
import Emoji from "./Emoji";
import GameBadge from "./GameBadge";
import GameIcons from "./GameIcons";
import InfiniteScroll from "react-infinite-scroll-component";
import GameSkeleton from "../layout/gameSkeleton";
import Loader from "../layout/Loader";
interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    data,
    fetchNextPage,
    isLoading,
    isFetched,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useRequestedGames(gameQuery);
  const FetchedData =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;
  const skeleton = Array.from(
    { length: FetchedData },
    (value, index) => index + 1
  );
  return (
    <InfiniteScroll
      dataLength={FetchedData}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <h1 className="text-xl font-light text-white pl-3">Loading Games...</h1>
      }
    >
      <div className=" grid lg:grid-cols-3 w-screen place-items-start  xl:grid-cols-3 max-semi-md:grig-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 p-5 grid-rows-2 gap-3">
        {isLoading || isFetching ? (
          skeleton.map((s) => <GameSkeleton />)
        ) : (
          <>
            {data?.pages.map((page, indx) => (
              <React.Fragment key={indx}>
                <>
                  {page?.results.map((game) => (
                    <>
                      <article
                        key={game.id}
                        className="flex flex-col shadow-lg  items-start overflow-hidden bg-[#232223] hover:-translate-y-1.5 transition-all rounded-2xl font-pop cursor-pointer max-h-fit h-max "
                      >
                        <figure>
                          <img
                            className=" object-contain"
                            src={CropImage(game.background_image)}
                            alt="cyber gamer picture"
                          />
                        </figure>
                        <div className="w-full flex p-4 gap-2  font-semibold text-white flex-col px-4">
                          <div className="flex flex-row-reverse py-3 items-end justify-between">
                            <GameBadge metacritic={game.metacritic} />
                            <GameIcons
                              platforms={game.parent_platforms.map(
                                (plat) => plat.platform
                              )}
                            />
                          </div>
                          <h3 className="text-2xl max-sm:text-2xl max-md:text-3xl ">
                            {game.name}
                            <Emoji rating={game.rating_top} />
                          </h3>
                          <div className="bg-slate-700 p-2 rounded">
                            {game.rating}
                          </div>
                        </div>
                      </article>
                    </>
                  ))}
                </>
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default GamesGrid;
