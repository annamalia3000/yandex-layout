/**
 * Компонент для отображения передач в эфире.
 */

type OnAirProps = {
    programs: {
        title: string;
        channel: string;
    }[];
}

export const OnAir: React.FC<OnAirProps> = ({programs}) => {
  return (
    <div className="on-air">
        {programs.map((program, index) => (
            <div key={index} className="tv-program-item">
                <img src="#" alt="icon on air" />
                <span>{program.title}</span>
                <span>{program.channel}</span>
            </div>
        ))}
    </div>
  )
}
