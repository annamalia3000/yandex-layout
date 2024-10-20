/**
 * Компонент для отображения рекламного блока.
 */

type AdvertisementProps = {
  imgSrc: string;
  text?: string;
};

export const Advertisement: React.FC<AdvertisementProps> = ({ imgSrc, text }) => {
  return (
    <div className="advertisement">
      <img src={imgSrc} alt="Advertisement" />
      {text && <span>{text}</span>}
    </div>
  )
}
