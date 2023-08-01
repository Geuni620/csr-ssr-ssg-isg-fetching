- server port 8000
- next는 npm run build 후 사용
- vite는 npm run build && npm run preview
- [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)

<br>

- ssr: 최신 데이터를 가져옴

<br>

- ssg: build 할 때 시간을 기준으로 데이터를 가져옴

<br>

- isg:

  - revalidate타임 10초로 지정해 준 후 npm run build && npm start
  - 처음 보여진 시간이 22:00이라고 가정해봤을 때 10초 후 다시 새탭을 열어서 localhost:3006으로 들어가면 동일한 시간(22:00)이 보임
    - 이때 re-generate가 실행됨
  - re-generate가 끝났을 때의 시간이 나옴 (22:10이 나오는게 아니라 22:15가 나올 수도 있고 20이 나올 수도 있음, 왜냐하면 re-generate된 후의 시간이 뜨기 때문, re-generate가 10초 걸릴지 30초 걸릴지 알 수 없음, 어쨌든 re-generate 되고 난 후의 시간이 뜸)

<br>

- csr
  - 정적사이트이고, `<div id="root"/>`를 받은 후 js가 실행되기 때문에 항상 최신 데이터를 받아올 수 있음
