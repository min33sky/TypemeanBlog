export function getCategory(catogories: { node: { category: string } }[]): string[] {
  const result = new Set<string>();
  result.add('All');

  catogories.forEach((item) => {
    result.add(item.node.category);
  });

  return [...result].sort((a, b) => a.localeCompare(b));
}
