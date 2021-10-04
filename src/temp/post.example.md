---
title: Update #4
slug: update-4
author: MingtypE
date: 2021-03-02 00:00:00 +0900
categories: [Programming, React]
tags: [react, typescript, eslint]
---

# 업데이트 4

---

## 상태 관리 모듈 추가

블로그 기능을 추가하다 보니 중복 쿼리를 하는 경우가 계속 생겨서 상태 관리 모듈 추가를 결정했다.

## 추가 이유

중복 쿼리를 한다고 이 블로그 규모에서 성능에 지장이 있는 것은 아니지만 언젠간 필요할 것 같았다. 상태 관리 모듈은 현시점에서 선택권이 많이 생겼다. 과거에는 닥치고 **Redux**였지만 mobx, recoil, zustand, zotai등등 훌륭한 대체재가 많이 나왔다. **Facebook**에서 제공하는 **Context API**도 있지만 이건 상태관리 모듈이라 보기엔 애매하다. `useState`, `useReducer`가 상태관리를 하고 **Context API**는 의존성 주입 같은 역할을 한다고 볼 수 있다. 거기다 리랜더링도 신경써야해서 불편하다.

## Recoil

**Recoil** 역시 facebook에서 만든 상태관리 모듈이다. 아직 정식버전은 아니지만 블로그 상태관리에는 별 문제가 없을 것 같아서 선택했다.

## Gatsby와 Recoil

Recoil을 사용하기 위해선 Redux의 Provider와 같이 상위 컴포넌트에 래퍼 컴포넌트를 둬야한다. 근데 Gatsby에서는 기존 react와 달리 **index.js**가 존재하지 않아 당황스럽다.
해결 방법은 당연히 있다. 최상위 폴더에 `gatsby-browser.js` 파일이 있다. 이곳이 entry 파일 역할을 하므로 여기서 `css`나 `provider` 같은 처리를 해줄 수 있다.

```js
// gatsby-browser.js
import React from 'react';
import { RecoilRoot } from 'recoil';

export const wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
```

## 마무리

아직 블로그에 별게 없기때문에 무거운 redux보다 recoil을 괜찮은 선택이었다. devtools가 없는게 아쉽긴 하다.
