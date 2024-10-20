/**
 * Компонент для отображения расписания.
 */
type MapProps = {
    link: string,
    text: string
}
export const Map: React.FC<MapProps> = ({link, text}) => {
    return (
      <div className="schedule">
          <a href={link}>{text}</a>
      </div>
    )
  }
  