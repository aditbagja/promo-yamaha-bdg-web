export type SortOrder = 'asc' | 'desc';

export function sortByKey<T>(
  data: T[],
  key: keyof T,
  order: SortOrder = 'asc'
): T[] {
  return [...data].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return order === 'asc' ? valA - valB : valB - valA;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return order === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return 0;
  });
}
