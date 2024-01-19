# react-gallery

## 설명

이 프로젝트는 **React**와 **Redux**를 활용하여 구현한 간단한 포토 갤러리 애플리케이션입니다. 사용자는 홈 페이지에서 무작위로 가져온 사진 목록을 감상할 수 있으며, 각 사진을 클릭하면 해당 사진의 상세 정보를 볼 수 있는 페이지로 이동합니다.

&nbsp;

## 목표

1. 사진 목록 표시: 홈 페이지에서는 API에서 가져온 무작위 사진 목록을 표시합니다.

2. 상세 정보 보기: 개별 사진을 선택하면 해당 사진의 상세 정보 페이지로 이동하여 사진의 세부 정보를 확인할 수 있습니다.

3. 페이지 간 이동: React Router를 사용하여 홈 페이지와 상세 정보 페이지 간을 쉽게 이동할 수 있습니다.

4. 상태 관리: Redux를 활용하여 전역 상태를 관리하고, 상태 업데이트는 효율적으로 이루어집니다.

5. 스타일링: styled-components를 사용하여 각 컴포넌트를 스타일링하여 갤러리를 시각적으로 매력적으로 만듭니다.

&nbsp;

## Tech Stacks

#### Environment

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

#### Development

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=61DAFB">

&nbsp;

## 화면 구성

|메인 페이지|상세정보 페이지|
|-------------------------|-------------------------|
|![image](https://github.com/kmseunh/react-memo/assets/105186724/3c406e84-a7e6-47f2-a170-c1daccc1b2e5)|![image](https://github.com/kmseunh/react-memo/assets/105186724/f6289aba-5a40-4407-851d-2e47b3bc614d)|

## 주요 기능

#### 포토 갤러리 표시

- Home 컴포넌트에서는 API를 통해 가져온 사진 목록을 갤러리 형식으로 표시합니다.
- PhotoList 및 PhotoCard 컴포넌트를 사용하여 사진 목록을 구성합니다.

#### 상세 정보 표시

- 개별 사진을 클릭하면 해당 사진의 상세 정보를 보여주는 페이지로 이동합니다.
- Detail 컴포넌트에서는 선택한 사진의 세부 정보를 표시합니다.

#### 페이지 간 이동

- React Router를 사용하여 페이지 간 이동을 지원합니다.
- Home 및 Detail 페이지로 이동할 수 있습니다.

#### 페이지 네비게이션

- Home 페이지에서는 여러 페이지로 나눠진 사진 목록을 표시하고, 이전 및 다음 페이지로 이동할 수 있는 버튼을 제공합니다.

&nbsp;

## Architecture

#### 디렉토리 구조

```
react-gallery
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ api.js
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ PhotoCard.jsx
│  │  └─ PhotoList.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Detail.jsx
│  │  └─ Home.jsx
│  └─ redux
│     ├─ photosSlice.js
│     └─ store.js
└─ vite.config.js
```

&nbsp;

## 사용한 API

📜 [Unsplash API](https://unsplash.com/ko)
