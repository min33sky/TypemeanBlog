type TagsType = {
  node: {
    tags: string[];
  };
}[];

type TagsObj = {
  [key: string]: number;
};

/**
 * 태그 개수별로 정렬 된 배열을 리턴하는 함수
 * @param edges
 * @returns
 */
export function getNumberByTag(edges: TagsType) {
  //* 태그들만 배열로 따로 빼낸댜.
  const tagsObj: TagsObj = {};
  edges.forEach((edge) => {
    edge.node.tags.forEach((tag) => {
      //* 태그별로 개수 추가한 객체를  생성
      if (tagsObj[tag]) {
        tagsObj[tag] += 1;
      } else {
        tagsObj[tag] = 1;
      }
    });
  });

  const sortedTagsArray = Object.entries(tagsObj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .sort((a, b) => b[1] - a[1]);

  return sortedTagsArray;
}
