export default function formatNumbertoBRL(numberToFormat) {
  return (new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numberToFormat));
}
