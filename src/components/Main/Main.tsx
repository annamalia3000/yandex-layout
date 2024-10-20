/**
 *Компонент для отображения основного раздела с погодой, телепрограммой и рекламой
 */
import { SearchBar } from "./SearchBar/SearchBar";
import { Article } from "./MainArticle/MainArticle";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget";
import { PopularLinks } from "./PopularLinks/PopularLinks";
import { TelevisionProgram } from "./TelevisionProgram/TelevisionProgram";
import { Advertisement } from "../Advertisement/Advertisement";
import { Map } from "./Map/Map";
import { OnAir } from "./OnAir/OnAir";

export const Main: React.FC = () => {
  return (
    <main className="main">
      <SearchBar />
      <div className="main-advertisement">
        <Advertisement imgSrc={""} />
      </div>
      <div className="article-container">
        <div className="article-column">
          <Article title="Погода">
            <WeatherWidget imgSrc={""} text={""} />
          </Article>
          <Article title="Посещяемое">
            <PopularLinks links={[]} />
          </Article>
        </div>
        <div className="article-column">
          <Article title="Карта Германии">
            <Map link={""} text={""} />
          </Article>
          <Article title="Телепрограмма">
            <TelevisionProgram programs={[]} />
          </Article>
        </div>
        <div className="article-column">
          <Article title="Эфир">
            <OnAir programs={[]} />
          </Article>
        </div>
      </div>
    </main>
  );
};
