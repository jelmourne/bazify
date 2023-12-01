function transformPercentage(rating: number) {
  const percentage = Math.round((rating / 5) * 100);
  return percentage;
}

export { transformPercentage };
