export function findById<T>(array: T[], id: string): T | undefined {
  // @ts-expect-error - temp fix
  return array.find((item) => item.id === id);
}
