export const CurrencyFormatter = ({ amount, currency }) => {
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  
    return <span>{formattedAmount}</span>;
  };

