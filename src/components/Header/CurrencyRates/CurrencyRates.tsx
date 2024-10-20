/**
 * Компонент для отображения курсов валют.
 */

type CurrencyRatesProps = {
  rates: {
    currency: string;
    rate: number;
  }[];
};

export const CurrencyRates: React.FC<CurrencyRatesProps> = ({ rates }) => {
  return (
    <>
    <div className="currency-rates">
    <h2>Курс валют</h2>
        {rates.map((rate) => (
            <div key={rate.currency} className="currency-rate">
                <span>{rate.currency}</span>
                <span>{rate.rate}</span>
            </div>
        ))}
    </div>
    </>
    
  )
}
