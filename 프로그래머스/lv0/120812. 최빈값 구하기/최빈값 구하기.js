function solution(array) {
  const counts = array.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    number => counts.get(number) === maxCount
  );

  if (modes.length > 1) {
    return -1;
  }

  return modes[0];
}