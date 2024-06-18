

export function findById<T>(array: T[], id: string): T | undefined {
  return array.find((item) => item.id === id);
}
