export function numberWithPoint(number: number | string): string {
  const [whole, fraction] = number.toString().split('.');

  if (fraction) {
    const onlyNumber = /^\d+$/.test(fraction);
    const _fraction = onlyNumber
      ? fraction.padEnd(2, '0').slice(0, 2)
      : fraction;
    return `${whole.replace(/(.)(?=(\d{3})+$)/g, '$1.')}.${_fraction}`;
  }

  return `${whole.replace(/(.)(?=(\d{3})+$)/g, '$1.')}`;
}

export function getRandomId() {
  return Math.floor(Math.random() * 1000000);
}
