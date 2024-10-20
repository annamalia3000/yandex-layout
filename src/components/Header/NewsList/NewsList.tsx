/**
 * Компонент для отображения списка новостей.
 */
import { NewsItem } from "./NewsItem/NewsItem";

type NewsListProps = {
  news: {
    icon: string;
    text: string;
    link: string;
  }[];
};

export const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <>
      <div className="news-list">
      <h2>Новости</h2>
        {news.map((item, index) => (
          <NewsItem
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};
