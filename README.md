# Country GOGO
- 안녕하세요, EliceAI트랙 16팀 **명탐정 코더**의 서비스 **Country GOGO**입니다!🎉
- **Country GOGO**는 설문을 통해 얻은 사용자의 성향을 바탕으로 국가별 행복지수 데이터를 분석하고,<br/>자신의 성향에 맞는 국가 및 도시를 추천하는 서비스입니다.


## 프로젝트 구성 안내

### 0. 프로젝트 Notion
  - https://detectivecoder.notion.site/1d701a9be74b4cc2b00bb8152e647188

### 1. 프로젝트 소개
  - 활용한 data set(Kaggle)
    - 세계행복지수(https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021)
    - 도시별 기온(https://www.kaggle.com/datasets/sudalairajkumar/daily-temperature-of-major-cities)
    - 빅맥지수(https://www.kaggle.com/code/jeongbinpark/visualization-big-mac-index/notebook)
    
  - 기술 스택
    - JavaScript
    - Express
    - React
    - MongoDB
    - AWS S3
    - Pandas
    - Numpy
    
  - 시각화 라이브러리
    - Recharts
    - React-Simple-Maps
  
  - 배포
    - Nginx
    - PM2
    
  - 웹서비스에 대한 자세한 개요
    - 행복지수, 경제적 생산, 사회적 지원, 기대수명, 삶의 자유도, 부패의 결여, 관대함, 온도 등 데이터를 활용하여 사용자의 성향에 맞춘 국가를 선정 및 제공.

### 2. 프로젝트 목표
  - 프로젝트 아이디어 동기
    - 서비스 이용자의 간단한 설문 결과를 바탕으로 데이터분석 결과를 얻을 수 있고 지인들과 재미를 나누는 요소를 추가한 서비스 기획.

  - 데이터를 통해 탐색하려는 문제
    - 사용자에 맞춰 데이터셋을 필터링하고 알고 싶어하는 결과를 반환

### 3. 프로젝트 기능 설명

  - 주요 기능
    - 행복지수를 구성하는 요소들이 포함된 설문을 진행 후 사용자와 맞는 국가 및 도시를 알려주고 시각화된 결과를 확인
    - 시각화된 결과를 확인하기 전 별점 및 한줄평 작성 기능

  - 프로젝트만의 차별점
    - 불편한 로그인 없이 간단한 설문으로 결과를 확인할 수 있는 서비스를 기획
    - 별점 및 한줄평을 통해 사용자의 평가를 즉각 수용, 메인페이지에 공개하여 팀원들의 책임감 증가

### 4. 프로젝트 구성도
  🌏 **메인 페이지** 
  ![image](https://user-images.githubusercontent.com/89979344/178297874-11aa17a5-1543-401f-a6e4-f0f52072eccd.png)
  🌏 **설문 조사 페이지**
  ![설문조사](https://user-images.githubusercontent.com/89979344/178298250-a69365b5-f7d1-4f58-b2fb-388ea29710a6.gif)
  🌏 **방명록 기능**
  ![방명록기능-2차](https://user-images.githubusercontent.com/89979344/178299183-7b9f0c5b-35d0-443d-aa20-9e53c47db03f.gif)
  🌏 **결과 페이지**
   ![image](https://user-images.githubusercontent.com/89979344/178299907-9ec3c244-a3a3-4dca-89de-50f921d1d1ae.png)
  🌏 **전체 국가 순위 페이지** 
   ![국가순위](https://user-images.githubusercontent.com/89979344/178300420-55d0e5c9-1471-40ef-9482-cc9360d51928.gif)


### 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 김경빈 | 백엔드 개발 |
| 김나연 | 프론트엔드 개발 |
| 박예솔 | 프론트엔드 개발 / 팀장 |
| 양권민 | 백엔드 개발 / 데이터분석|
| 이태성 | 백엔드 개발 |
| 정시욱 | 프론트엔드 개발 |

1. 팀장

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - ver.1.0.0
