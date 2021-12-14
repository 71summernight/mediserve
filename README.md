# Mediserve
![https://user-images.githubusercontent.com/81367886/144597071-b6252429-d411-4349-80d6-59b99d9abbd2.jpeg]

## 프로젝트 소개
증상의뢰에서 처방까지 한번에 처리할 수 있는 App
- 기간 : 2021. 11. 01. ~ 2021. 11. 19.

## 인원 구성
- **Frontend**: 김용현, 김현진

## 프로젝트 선정이유

## 사용한 기술 스택
- **Frontend**: `HTML/CSS` `JSX` `React(CRA)` `Styled-components`
- **Common**: 버전관리 `Git & GitHub`, 소통 `Slack`,  일정관리 `Trello`

## 내가 구현한 부분
![Uploading 스크린샷 2021-12-09 오후 5.58.03.png…]()
> 공통사항
- MediaQuery를 통한 반응형 구현하였습니다.

> 메인페이지
- 피드 내용 더보기,  댓글 전체보기를 구현하였습니다.
- Toggle 기능을 이용하여 네브바에 프로필 컴포넌트가 연결되게 구현하였습니다.
- 댓글 등록/삭제 기능 구현을 구현하였습니다.

> Upload / 결제페이지 
- web-cam 라이브러리를 통하여 카메라 연결을 구현했습니다.
- Spinner 로딩 기능을 직접 구현하였습니다.
- Upload 페이지의 이미지 파일 미리보기를 구현하였습니다.

### 메인
- `/` - 메인 페이지 : 댓글 추가 및 삭제, 피드내용 더보기, 네브 바 마이 페이지 메뉴 토글 및 페이지 링크 기능 구현
- `/login` - 로그인 페이지(레이아웃x)
- `/mypage` - 카테고리 페이지 : 토글 기능을 이용한 카테고리 창 구현
- 하단 메뉴창

### Q&A
- `/qna` - 상담분야 선택 페이지 : 로컬 스토리지 이용하여 선택한 분야가 다른 컴포넌트로 전달 될 수 있도록 구현
- `/medical` - 진료과, 공개여부 선택 : 로컬 스토리지 이용하여 선택한 분야가 다른 컴포넌트로 전달 될 수 있도록 구현
- `/subject` - 진료과 선택 페이지 : 로컬 스토리지 이용하여 선택한 진료과목이 다음 의사리스트 상단에 뜰 수 있도록 구현
- `/detail` - 진료과별 의사 선택 페이지 : 의사 정보를 컴포넌트화 하여 해당 진료과의 의사리스트가 보여질 수 있도록 구현
- `/counsel` - Q&A 질문 페이지 : 로컬 스토리지 이용하여 의뢰 제목 및 내용 저장 및 의사 평점에 따라 별에 표시 될 수 있도록 구현
- `/answer` - Q&A 답변 페이지
- `/counselSubmit` - Q&A 질문 전송 완료 페이지 : 리덕스 이용하여 사용자 총 mds 포인트에서 해당하는 금액만큼 mds 포인트 차감
- `/counselMore` - Q&A 추가 질문 페이지

### 처방전
- `/prescription` - 처방전 사진 미리보내기 선택 페이지 
- `/checkqr` - 처방전 사진 등록 가이드
- `/snapshot` - 처방전/qr 촬영 : 웹캠 라이브러리 커스터마이징을 통한 촬영 기능 구현
- `/loading` - 접수중 화면 : spinner 기능 구현
- `/payment` - 결제확인 페이지 
- `/paymentfinish` - 결제완료 페이지 

### 검색
- `/find` - 약국 검색 페이지 : 약국 검색하면 해당 단어를 통해 검색 결과 보여주기, 받아온 데이터에서 입력 받은 텍스트가 포함되어 있는 내용만 보여질 수 있도록 기능 구현
- `/findHospital` - 병원 찾기

### 포스팅
- `/upload` - 포스팅 페이지 : 이미지 첨부 및 미리보기
- `/posting` - 포스팅 의뢰 : 로컬스토리지 이용하여 의뢰내용 저장할 수 있도록 우선적으로 구현
- `/postingResult` - 포스팅 의뢰 완료 : 리덕스를 이용한 사용자의 보유 mds 포인트 차감
- `/postingChat` - 포스팅 의뢰 대화창 : 소켓 기능으로 하려고 했으나 프로젝트에 적용시키는 부분에서 막혀서 미구현

### Feed
(공통 기능) 리덕스 이용한 팔로우, 팔로우 취소 기능, 버튼 컴포넌트화
- `/feed` - 일반인 피드
- `/feedex` - 의사 피드
