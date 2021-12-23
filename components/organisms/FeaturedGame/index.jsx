import GameItem from "../../molecules/GameItem";
// import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { getFeaturedGame } from "../../../services/player.js";

export default function FeaturedGame() {
  //state
  const [gameList, setGameList] = useState([]);

  //callback:
  const getFeatureGameList = useCallback(async () => {
    let data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4" data-aos="fade-up">
          {/* pake respon API: */}
          {gameList.map((game) => {
            return <GameItem key={game._id} title={game.name} category={game.category.name} thumbnail={`https://bwastoregg.herokuapp.com/uploads/${game.thumbnail}`} id={game._id} />;
          })}
        </div>
      </div>
    </section>
  );
}
