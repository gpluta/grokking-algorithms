const { format } = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
})

console.log(format(22.2))
