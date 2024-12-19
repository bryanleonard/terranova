const formatCurrency = Intl.NumberFormat("en-US",  {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});

export default formatCurrency;