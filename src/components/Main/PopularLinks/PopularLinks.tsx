/**
 * Компонент для отображения популярных ссылок.
 */
type PopularLinksProps = {
  links: {
    title: string;
    description: string;
    link: string;
  }[];
};

export const PopularLinks: React.FC<PopularLinksProps> = ({ links }) => {
  return (
    <div className="popular-links">
        {links.map((link, index) => (
            <div key={index} className="link">
                <a href={link.link}>{link.title}</a> - {link.description}
            </div>

        ))}
  </div>
  )
};
