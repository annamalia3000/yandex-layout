/**
 * Компонент для отображения телевизионной программыю
 */

type TelevisionProgramProps = {
    programs: {
        time: string;
        title: string;
       channel: string;
    }[];
}

export const TelevisionProgram: React.FC<TelevisionProgramProps> = ({programs}) => {
  return (
    <div className="tv-programs">
        {programs.map((program, index) => (
            <div key={index} className="tv-program-item">
                <span>{program.time}</span>
                <span>{program.title}</span>
                <span>{program.channel}</span>
            </div>
        ))}
    </div>
  )
}
