# 집밥코인 — 식재료 관리·레시피 서비스

등록한 식재료와 소비기한을 관리하고 레시피를 확인하는 웹 서비스의 프론트엔드 저장소입니다.
멋쟁이사자처럼 대학 연합 해커톤에서 팀으로 개발했습니다.

## 김태인 담당 작업

React·Axios로 식재료 등록과 레시피 상세 화면을 개발했습니다.

| 작업 | 구현 내용 | 본인 PR |
| --- | --- | --- |
| 식재료 등록 | 식재료명 누락·소비기한 검사, 남은 일수 계산과 등록 확인 화면 표시, 성공 응답 후 냉장고 화면 이동, 실패·요청 오류 안내 | [#41](https://github.com/24-1-LikePotato/Zipbap-Coin-FE/pull/41) |
| 레시피 상세 | API의 재료·조리 순서·영양 정보 연결, 문자열을 목록으로 표시, 리뷰를 반영한 재료 목록 접기·펼치기와 화살표 표현 | [#36](https://github.com/24-1-LikePotato/Zipbap-Coin-FE/pull/36) |

등록 버튼을 누른 사실과 서버가 등록을 완료한 결과를 구분해, 성공 응답을 확인한 뒤에만 다음 화면으로 이동하도록 했습니다.
레시피 화면은 서버에서 받은 정보를 표시하는 프론트엔드 연동 작업입니다. 이 저장소의 팀 전체 기능이나 백엔드 API를 모두 단독 개발한 것은 아닙니다.

## 코드에서 볼 부분

- [식재료 입력](src/pages/AddIngredientOne.jsx): 입력 검사, 남은 소비기한 계산
- [등록 확인](src/pages/AddIngredientTwo.jsx): 확인 화면, 등록 요청과 응답에 따른 이동·오류 안내
- [레시피 상세](src/pages/Recipe.jsx): API 응답을 재료·조리 순서·영양 컴포넌트에 전달
- [재료 목록](src/components/Recipe/RecipeIngredients.jsx) · [조리 순서](src/components/Recipe/RecipeOrder.jsx)

## 기술

JavaScript, React, styled-components, Axios, React Router를 사용했습니다.
Create React App 기반 프로젝트이며 스크립트와 의존성은 [package.json](package.json)에 있습니다.

## 실행

저장소 루트에서 실행합니다.

```bash
npm install
npm start
```

- 개발 화면: http://localhost:3000
- 빌드: `npm run build`
- 테스트 러너: `npm test`

식재료 등록과 레시피 조회에는 백엔드 연결과 사용자 인증 상태가 필요합니다.
현재 API 주소·공통 요청 처리는 [ApiClient.js](src/apis/ApiClient.js)에 있습니다.
프론트엔드를 실행하는 것만으로 백엔드 데이터가 준비되지는 않습니다. 문서 정리 과정에서 외부 API의 현재 운영 여부나 서비스 실행 결과를 새로 확인하지는 않았습니다.

## 프로젝트 범위

담당 화면 구현과 API 연동, 팀원의 코드 리뷰 반영을 중심으로 한 해커톤 프로젝트입니다.
배포 주소가 계속 운영되거나 모든 오류 상황에 대한 처리가 완성되어 있다고 보장하지 않습니다.
