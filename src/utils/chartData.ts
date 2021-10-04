/**
 * 차트에 넣을 데이터를 반환하는 함수
 * @param tagsArray
 * @returns
 */
export default function chartData(tagsArray: [string, number][]) {
  const filtered = tagsArray.slice(0, 6);

  const result = filtered.map((item) => ({
    id: item[0],
    label: item[0],
    value: item[1],
  }));

  return result;
}
