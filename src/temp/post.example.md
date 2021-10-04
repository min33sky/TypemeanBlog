---
title: gatsby 라우팅
slug: how-to-route-in-gatsby
author: MingtypE
date: 2021-03-02 00:00:00 +0900
categories: [Programming, React]
tags: [react, typescript, eslint]
---

# Routing?

웹 애플리케이션에서 routing은 필수 요소이다. 내가 주로 사용하는 react에서는 react-router라는 서드파티 모듈을 사용해서 라우팅을 하고 next에서는 자체적으로 router를 제공한다. gatsby는 @react/router라는 모듈을 사용해서 라우팅을 한다. 그렇다고 이걸 직접 사용하진 않고 gatsby 모듈에서 불러와서 사용을 해야 정상 작동을 한다.

## Gatsby에서 라우팅하는 방법

Gatsby는 react-router와 같이 라우트 컴포넌트를 이용하거나 라우팅할 수 있는 함수를 제공한다.

### Link 컴포넌트를 이용한 라우팅

```js
import { Link } from 'gatsby';

function Home() {
  return (
    <>
      <Link to="/pathname"></Link>
    </>
  );
}
```

### navigate 메서드를 이용한 라우팅

```js
import { navigate } from 'gatsby';

function Home() {
  const handleRoute = () => {
    navigate('/pathname');
  };

  return (
    <>
      <button onClick={handleRoute}>홈으로</button>
    </>
  );
}
```
