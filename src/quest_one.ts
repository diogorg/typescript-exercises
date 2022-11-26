const specials = [
  { num: 15, value: 'Visual Nuts' },
  { num: 5, value: 'Nuts' },
  { num: 3, value: 'Visual' },
];

export const output = (quantity: number): string[] => {
  const selected = [];
  for (let i = 1; i <= quantity; i++) {
    const hasSpecial = specials.find(
      specialElement => i % specialElement.num === 0,
    );
    const newString = hasSpecial ? hasSpecial.value : i.toString();
    selected.push(newString);
  }
  return selected;
};
export const printOutput = (quantity: number): void =>
  console.log(output(quantity).join(`\n`));
