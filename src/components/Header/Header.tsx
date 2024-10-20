/**
 * Шапка страницы с новостями, курсами валют и рекламой
 */
import { NewsList } from "./NewsList/NewsList";
import { Advertisement } from "../Advertisement/Advertisement";
import { CurrencyRates } from "./CurrencyRates/CurrencyRates";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
      <NewsList news={[]}/>
      <CurrencyRates rates={[]} />
      </div>
      <div className="header-advertisemen">
      <Advertisement imgSrc={""} text={""} />
      </div>
    </header>
  );
};
