/**
 * Компонент для отображения блоков на главной страницею
 * @returns MainArticle
 */

type ArticleProps = {
    title: string;
  children: React.ReactNode;
};

export const Article: React.FC<ArticleProps> = ( {title, children} ) => {
  return (
    <div className="article">
        <h2 className="article-title">{title}</h2>
        <div className="article-content">{children}</div>
    </div>
  )
}
