/**
 * Компонент для поисковой строки.
 */

export const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
        <img src="#" alt="Browser icon" />
        <input type="text" placeholder="Поиск" />
        <button>Найти</button>
    </div>
  )
}
