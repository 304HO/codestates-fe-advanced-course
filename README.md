
# codestates-fe-advanced-course

### 배포링크 http://codestates-fe-advanced-course.s3-website.ap-northeast-2.amazonaws.com


### GIF 파일

<details>
    <summary>게시물 리스트와 게시물 상세 페이지</summary>

![게시물 리스트와 게시물 상세 페이지](https://user-images.githubusercontent.com/91649767/182864078-e407b99f-a3a5-4cb7-8f09-50102a298d5f.gif)
</details>

<details>
    <summary>페이지 네이션</summary>
  
![Aug-04-2022 22-50-28](https://user-images.githubusercontent.com/91649767/182863911-0c628c97-1ea2-4e53-aa1f-92ddd2b686a6.gif)
</details>




### 프로젝트 실행 방법

```
git clone https://github.com/304HO/codestates-fe-advanced-course.git
cd codestates-fe-advanced-course 
npm install
npm start
```

### 사용한 스택 목록 
* JavaScript
* REACT
* CSS


### 구현한 기능 목록
* 페이지네이션

### 구현 방법 혹은 구현하면서 어려웠던 점 과 이에대한 개선방안
* 처음에는 단순하게 데이터를 받아와 뿌려준다고 생각해서 Maingpage에서 title을 눌렀을때 아래로 상세페이지가 열리는 방식으로 구현을 하니 detailpage에 노출되는 데이터를 받아와 가공하는데 어려움이 있었고, 페이지가 첫 마운트 될때 필요한 모든데이터를 받아와야 해서 client쪽에서 부담을 받는 문제가 있었습니다. 이에 대한 해결방안으로 mainpage와 detailpage로 페이지를 나누고 detailpage에 필요한 데이터는 페이지로 detailpage로 진입(mainpage에서 title을 click했을때) 할때 받아와 렌더링 해주는 방법으로 client의 부담을 덜수 있었습니다.

### 레이아웃

<details>
    <summary>Wireframe</summary>

  ![image](https://user-images.githubusercontent.com/91649767/182869690-ebc047b5-64ec-44a1-8b76-8627bba075f5.png)
  ![image](https://user-images.githubusercontent.com/91649767/182869827-c834782d-f7fa-48c8-8ffb-bc94df0de106.png)
</details>
