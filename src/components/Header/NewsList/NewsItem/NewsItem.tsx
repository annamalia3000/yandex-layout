/**
 * Компонент для отображения одной новости с иконкой, текстом и ссылкой.
 * @param {string} icon - Иконка новости.
 * @param {string} text - Текст новости.
 * @param {string} link - Ссылка на новость.
 */

type NewsItemProps = {
  icon: string;
  text: string;
  link: string;
};

export const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div className="news-item">
        <img src={icon} alt="news icon" />
        <a href={link}>{text}</a>
    </div>
  )
}
