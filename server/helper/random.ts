export const random = (
  number: number,
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
) =>
  [...Array(number)]
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('');
