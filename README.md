# 채용달력 구현

## :: 프로젝트 소개

- 구직자가 달력을 통해 구인 중인 날짜별로 기업목록과 채용 내용을 확인 할 수 있는 `채용달력`입니다.
- 현재 날짜가 반영되어 기능을 확인 하실 수 있도록 url 데이터에서 날짜를 수정하여 mock데이터를 만들어 사용하였습니다.


## :: 개발 기간

- 2022/2/19 ~ 2022/2/22 (4일)

## :: Languages and Tools

<div aligin=center>
  
  [![](https://img.shields.io/badge/ES6-F7DF1E?logo=javascript&logoColor=white&logoWidth=20)]()
  [![](https://img.shields.io/badge/typescript-%23007ACC.svg?&logo=typescript&logoColor=white&logoWidth=20)]()
  [![](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&logoWidth=20)]()
  [![](https://img.shields.io/badge/Hooks-61DAFB?logo=react&logoColor=white&logoWidth=20)]()
  [![](https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white&logoWidth=20)]()
  [![](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&logoWidth=20)]()
  [![](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&logoWidth=20)]()
</div>

## :: 데모 영상


https://user-images.githubusercontent.com/61774575/155065575-37ba2df4-6c94-4845-8291-306660bbea16.mp4


## :: 구현 기능

### 1. 상단 연/월 네비게이터

- [x] 사용자는 채용 달력의 상단에서 연/월을 확인할 수 있다.
- [x] 사용자는 채용 달력의 상단의 이전 버튼(ex: <)를 누르면 이전 월로 이동할 수 있다.
- [x] 사용자는 채용 달력의 상단의 이후 버튼(ex: >)를 누르면 이후 월로 이동할 수 있다.
- [x] 사용자는 처음 화면에 들어왔을 때 오늘이 포함된 연/월의 채용 달력을 볼 수 있다.

### 2. 채용 달력 구현

- [x] 사용자는 해당 월의 달력을 확인할 수 있다.
- [x] `추가구현` 사용자는 이전, 이후 월의 날짜, 오늘의 날짜를 해당 날짜 박스의 배경색으로 구분할 수 있다.
- [x] 사용자는 달력에 월이 다르더라도, 해당 월이 포함된 주는 모두 볼 수 있다.
- [x] 사용자는 달력에 있는 날짜에서 시작 또는 마감하는 채용 공고를 기업명과 함께 확인할 수 있다.
- [x] 사용자가 보는 기업명은 '시' -> '끝' 순서, 가나다 순으로 정렬되어있다.

### 3. 기업명 선택 시 모달 구현

- [x] 사용자는 기업명을 선택(클릭)하면 채용 공고에 대한 상세 정보 모달을 볼 수 있다.
- [x] 사용자는 모달의 상단을 통해 기업 이미지, 기업명, 시작 날짜~마감 날짜, 마감일과 현재와의 일 수 차이를 알 수 있다.
- [x] `추가구현` 사용자는 채용공고 마감 시간을 기준으로 마감 시간과 현재와의 시, 분 차이를 알 수 있다.
- [x] 사용자는 모달의 하단을 통해 html 형태로 채용 공고의 내용을 볼 수 있다.

## :: 향후 보완사항

- 기능의 정확한 테스트를 위해 jest를 이용해 테스트코드를 추가할 예정입니다.
- 사용자가 달력의 '월'을 수정할 때마다, 해당 월의 주차를 기준으로 백엔드에 데이터를 요청할 수 있도록 수정하는 것이 효율적일 것 같습니다.
