---
title: Gatsby에서 recoil 사용을 위한 설정하기
slug: how-to-use-recoil-in-gatsby
author: MingtypE
date: 2021-03-02 00:00:00 +0900
categories: [Programming, React]
tags: [react, typescript, eslint]
---

# Gatsby에서 Recoil 설정하기

---

## RecoilRoot을 상단에 위치시키기

상태 관리를 위해서는 redux의 Provider처럼 recoil도 RecoilRoot가 필요하다. gatsby는 일반 react의 index.js와 같이 RecoilRoot를 적용할 부분이 보이질 않는다. 검색을 해보니 gatsby-browser.js에 RecoilRoot를 리턴하는 `wrapPageElement` 함수를 export하면 해결된다고 나온다. 그리고 실행되는 것을 확인했다.

## Build시 에러

빌드를 하니 상태 관리를 하려면 RecoilRoot를 상위에 두세요란 에러가 뜬다. 개발 모드일땐 전혀 문제가 없었다. 삽질 좀 하다가 gatsby와 redux의 결합에 관한 공식 예시를 보고 해결책을 찾았다. 해결책은 다음과 같다.

```js
// wrap-with-recoilroot.tsx
import React from 'react';
import { RecoilRoot } from 'recoil';

export default ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};
```

```js
// gatsby-browser.js
import wrapWithRecoilRoot from './wrap-with-recoilroot';

export const wrapRootElement = wrapWithRecoilRoot;
```

```js
// gatsby-ssr.js
import wrapWithRecoilRoot from './wrap-with-recoilroot';

export const wrapRootElement = wrapWithRecoilRoot;
```
