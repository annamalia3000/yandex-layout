/**
 * Компонент для отображения погоды.
 */
type WeatherWidgetProps = {
  imgSrc: string;
  text: string;
};

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ imgSrc, text }) => {
  return (
    <div className="weather-widget">
        <img src={imgSrc} alt="weather demonstration" />
        <span>{text}</span>
    </div>
  )
}
