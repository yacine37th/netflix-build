import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import LinkImg from "./LinkImg";

function Row({ title, fetchURL, ofTv = false }) {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const res = await axios.get(fetchURL);
      console.log(res.data)
      setMovie(res.data.results[[]]);
    })();
  }, []);

  const movies_brows ={
    "page": 1,
    "results": [
        {
            "backdrop_path": "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
            "first_air_date": "2022-11-23",
            "genre_ids": [
                10765,
                9648,
                35
            ],
            "id": 119051,
            "name": "Wednesday",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Wednesday",
            "overview": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
            "popularity": 1152.509,
            "poster_path": "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            "vote_average": 8.7,
            "vote_count": 6361
        },
        {
            "backdrop_path": "/r8CYgYLotlG0kHwZT5V64Hacc5J.jpg",
            "first_air_date": "2023-01-27",
            "genre_ids": [
                80,
                9648
            ],
            "id": 215333,
            "name": "The Snow Girl",
            "origin_country": [
                "ES"
            ],
            "original_language": "es",
            "original_name": "La chica de nieve",
            "overview": "When a little girl goes missing during a parade in Málaga, a young newspaper journalist becomes fiercely determined to help Amaya's parents find her.",
            "popularity": 889.354,
            "poster_path": "/iPPFBfCxcxIHH6JdavjyOIXMj1O.jpg",
            "vote_average": 7.2,
            "vote_count": 73
        },
        {
            "backdrop_path": "/2ZNFu0hkSVtAI6LRWGIlCPNd1Tj.jpg",
            "first_air_date": "2018-09-09",
            "genre_ids": [
                9648,
                80,
                18
            ],
            "id": 78191,
            "name": "You",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "You",
            "overview": "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
            "popularity": 784.43,
            "poster_path": "/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
            "vote_average": 8.1,
            "vote_count": 2416
        },
        {
            "backdrop_path": "/iq5L971DFW1SwLJdvl7OpPI1QeZ.jpg",
            "first_air_date": "2021-06-17",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "id": 114868,
            "name": "Record of Ragnarok",
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "終末のワルキューレ",
            "overview": "Before eradicating humankind from the world, the gods give them one last chance to prove themselves worthy of survival. Let the Ragnarok battles begin.",
            "popularity": 711.981,
            "poster_path": "/kTs2WNZOukpWdNhoRlH94pSJ3xf.jpg",
            "vote_average": 8.6,
            "vote_count": 1266
        },
        {
            "backdrop_path": "/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg",
            "first_air_date": "2016-01-25",
            "genre_ids": [
                80,
                10765
            ],
            "id": 63174,
            "name": "Lucifer",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Lucifer",
            "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
            "popularity": 520.938,
            "poster_path": "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
            "vote_average": 8.5,
            "vote_count": 13176
        },
        {
            "backdrop_path": "/hoVuI69nygLQBJ4FqgRKnukDeKt.jpg",
            "first_air_date": "2022-12-25",
            "genre_ids": [
                10759,
                10765
            ],
            "id": 106541,
            "name": "The Witcher: Blood Origin",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The Witcher: Blood Origin",
            "overview": "More than a thousand years before the world of The Witcher, seven outcasts in the elven world unite in a blood quest against an unstoppable power.",
            "popularity": 388.675,
            "poster_path": "/vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg",
            "vote_average": 7,
            "vote_count": 442
        },
        {
            "backdrop_path": "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
            "first_air_date": "2016-07-15",
            "genre_ids": [
                18,
                10765,
                9648
            ],
            "id": 66732,
            "name": "Stranger Things",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Stranger Things",
            "overview": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            "popularity": 316.491,
            "poster_path": "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            "vote_average": 8.6,
            "vote_count": 15097
        },
        {
            "backdrop_path": "/tI4A1Md9J5QHARl60TsMpekSsvg.jpg",
            "first_air_date": "2023-01-19",
            "genre_ids": [
                16,
                9648
            ],
            "id": 203704,
            "name": "Junji Ito Maniac: Japanese Tales of the Macabre",
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "伊藤潤二『マニアック』",
            "overview": "From the mind of horror manga maestro Junji Ito comes a spine-tingling selection of some of his most bizarre, disturbing and terrifying tales.",
            "popularity": 299.263,
            "poster_path": "/eE3vyu2F8upsQujhS8IP7QiG8Hm.jpg",
            "vote_average": 7.2,
            "vote_count": 35
        },
        {
            "backdrop_path": "/jTCCmhp7UzgHlSC18nRDxQVdsnX.jpg",
            "first_air_date": "2023-01-20",
            "genre_ids": [
                18,
                10765,
                9648,
                10759
            ],
            "id": 214078,
            "name": "Shahmaran",
            "origin_country": [
                "TR"
            ],
            "original_language": "tr",
            "original_name": "Şahmaran",
            "overview": "In this fantasy drama series, a lonely young woman finds her soul mate and discovers they are both part of an ancient legend.",
            "popularity": 260.539,
            "poster_path": "/2nzbkxI6AKVw5kfLXAIvsf0xEKF.jpg",
            "vote_average": 7.8,
            "vote_count": 33
        },
        {
            "backdrop_path": "/8Xs20y8gFR0W9u8Yy9NKdpZtSu7.jpg",
            "first_air_date": "2022-01-28",
            "genre_ids": [
                10759,
                18,
                10765
            ],
            "id": 99966,
            "name": "All of Us Are Dead",
            "origin_country": [
                "KR"
            ],
            "original_language": "ko",
            "original_name": "지금 우리 학교는",
            "overview": "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.",
            "popularity": 241.065,
            "poster_path": "/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
            "vote_average": 8.4,
            "vote_count": 2977
        },
        {
            "backdrop_path": "/23WUgvjfnQFNwSPSSG9CdGFnauN.jpg",
            "first_air_date": "2023-01-19",
            "genre_ids": [
                35
            ],
            "id": 135959,
            "name": "That '90s Show",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "That '90s Show",
            "overview": "Hello, Wisconsin! It's 1995 and Leia Forman, daughter of Eric and Donna, is visiting her grandparents for the summer where she bonds with a new generation of Point Place kids under the watchful eye of Kitty and the stern glare of Red. Sex, drugs and rock 'n roll never dies, it just changes clothes.",
            "popularity": 234.668,
            "poster_path": "/nZcufEuqZqNYMx6mNjlh2rmjDqx.jpg",
            "vote_average": 7.1,
            "vote_count": 60
        },
        {
            "backdrop_path": "/hVMoqvXs5j9ffun56tZ5YhliSD9.jpg",
            "first_air_date": "2021-02-24",
            "genre_ids": [
                35,
                18
            ],
            "id": 117581,
            "name": "Ginny & Georgia",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Ginny & Georgia",
            "overview": "Angsty and awkward fifteen year old Ginny Miller often feels more mature than her thirty year old mother, the irresistible and dynamic Georgia Miller. After years on the run, Georgia desperately wants to put down roots in picturesque New England and give her family something they've never had... a normal life. But it's not all carpool and Kombucha as Georgia's past threatens her and her family's new way of life... and Georgia will do anything to protect her family.",
            "popularity": 229.704,
            "poster_path": "/j1yqOSVVskSYpYreNT0VeD1S3Dq.jpg",
            "vote_average": 8.1,
            "vote_count": 1196
        },
        {
            "backdrop_path": "/uCqXSfHymdbDMsFx8t0u0OPSuve.jpg",
            "first_air_date": "2015-10-10",
            "genre_ids": [
                10759,
                18,
                10768
            ],
            "id": 63333,
            "name": "The Last Kingdom",
            "origin_country": [
                "GB"
            ],
            "original_language": "en",
            "original_name": "The Last Kingdom",
            "overview": "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
            "popularity": 227.488,
            "poster_path": "/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
            "vote_average": 8.3,
            "vote_count": 1355
        },
        {
            "backdrop_path": "/1rVq1Qe8x5YoO3rB6mRWVEiCJRW.jpg",
            "first_air_date": "2023-01-04",
            "genre_ids": [
                18
            ],
            "id": 103416,
            "name": "The Lying Life of Adults",
            "origin_country": [
                "IT"
            ],
            "original_language": "it",
            "original_name": "La vita bugiarda degli adulti",
            "overview": "Young Giovanna navigates her passage from childhood into adolescence as she experiences the different sides of Naples during the 1990s. A girl in search of her true reflection in a divided Naples: the Naples of the heights, which assumes a mask of refinement, and the Naples of the depths, a place of excess and vulgarity.",
            "popularity": 225.883,
            "poster_path": "/cDy24NY2QIXYUxRzelvhkWGbkPH.jpg",
            "vote_average": 7.5,
            "vote_count": 58
        },
        {
            "backdrop_path": "/seMRyWVwIVBWbC9xaMzDMZJ8fUH.jpg",
            "first_air_date": "2022-10-09",
            "genre_ids": [
                16,
                10759,
                18
            ],
            "id": 131041,
            "name": "BLUELOCK",
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "ブルーロック",
            "overview": "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win. The Japan Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match...and to do so, they've gathered 300 of Japan's best and brightest youth players. Who will emerge to lead the team...and will they be able to out-muscle and out-ego everyone who stands in their way?",
            "popularity": 221.405,
            "poster_path": "/tP16wAT98CLwnQ14iWTMZZwfLBr.jpg",
            "vote_average": 8.5,
            "vote_count": 27
        },
        {
            "backdrop_path": "/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg",
            "first_air_date": "2020-12-10",
            "genre_ids": [
                18,
                9648,
                10759,
                10765
            ],
            "id": 110316,
            "name": "Alice in Borderland",
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "今際の国のアリス",
            "overview": "With his two friends, a video-game-obsessed young man finds himself in a strange version of Tokyo where they must compete in dangerous games to win.",
            "popularity": 210.484,
            "poster_path": "/uFXEoVPENgKJrkxFWlOhNMDwlEk.jpg",
            "vote_average": 8.2,
            "vote_count": 1367
        },
        {
            "backdrop_path": "/s1xnjbOIQtwGObPnydTebp74G2c.jpg",
            "first_air_date": "2022-11-17",
            "genre_ids": [
                9648,
                18
            ],
            "id": 90669,
            "name": "1899",
            "origin_country": [
                "DE"
            ],
            "original_language": "de",
            "original_name": "1899",
            "overview": "Passengers on an immigrant ship traveling to the new continent get caught in a mysterious riddle when they find a second vessel adrift on the open sea.",
            "popularity": 206.936,
            "poster_path": "/gZleGu1MQVBArH2dlpZ9CGi0hhy.jpg",
            "vote_average": 7.7,
            "vote_count": 820
        },
        {
            "backdrop_path": "/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg",
            "first_air_date": "2018-05-02",
            "genre_ids": [
                10759,
                18,
                35
            ],
            "id": 77169,
            "name": "Cobra Kai",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Cobra Kai",
            "overview": "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",
            "popularity": 200.941,
            "poster_path": "/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
            "vote_average": 8.2,
            "vote_count": 5479
        },
        {
            "backdrop_path": "/tl0mg7lOnS6tP8ngH0QwgMLQdpV.jpg",
            "first_air_date": "2018-10-05",
            "genre_ids": [
                80,
                9648,
                18
            ],
            "id": 76669,
            "name": "Elite",
            "origin_country": [
                "ES"
            ],
            "original_language": "es",
            "original_name": "Élite",
            "overview": "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.",
            "popularity": 196.408,
            "poster_path": "/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
            "vote_average": 8.1,
            "vote_count": 8647
        },
        {
            "backdrop_path": "/hc2ZskN65AthhTp1DirOhEwHkDu.jpg",
            "first_air_date": "2022-09-21",
            "genre_ids": [
                80,
                18
            ],
            "id": 113988,
            "name": "Dahmer – Monster: The Jeffrey Dahmer Story",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Dahmer – Monster: The Jeffrey Dahmer Story",
            "overview": "This series examines the gruesome and horrific true crimes of Jeffrey Dahmer and the systemic failures that enabled one of America’s most notorious serial killers to continue his murderous spree in plain sight for over a decade.",
            "popularity": 190.515,
            "poster_path": "/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
            "vote_average": 8.1,
            "vote_count": 1953
        }
    ],
    "total_pages": 83,
    "total_results": 1650
}
  // const url = "https://image.tmdb.org/t/p/original/";
  console.log(movies?.name);
  console.log(movies)

  return (
    <div className="row">
      <div className="container">
        <h2>{title}</h2>
        <h1>
          {/* helpppp + {movies?.title || movies?.name || movies?.original_title} */}
        </h1>
        <div className="movies">

        {movies_brows.results.map((movie) => (
          <LinkImg movie={movie} />
        ))}
        </div>
       
        {/* {movie?.map((movies) => {
          <img
          key={movies.id}
            src={`${url}${
              movies.poster_path
              //   isLargROW ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movie.name}
          />;
        })} */}
      </div>
    </div>
  );
}

export default Row;
