# :one: THE DAJU 소개

- 접시 컵 숟가락 젓가락 등에 정보를 제공해주고 판매하는 사이트입니다.
- 실제 사이트인 THE DAJU 사이트를 모티브로 제작하였습니다.
  <br/>
  <br/>

# :two: THE DAJU CONCAT

### THE DAJU 사이트를 실제로 볼 수 있습니다. :point_right: [THE DAJU 배포 링크](http://fethedaju.s3-website.ap-northeast-2.amazonaws.com/)<br/>

### THE DAJU 사이트를 한 눈에 볼 수 있습니다. :point_right: [THE DAJU YouTube 데모영상](https://www.youtube.com/watch?v=-OFUjqkxnTY&list=PLHbABm9_UpIukFrGGQ6Yi__c6gM5rCEP3)<br/>

### THE DAJU 사이트에 관련한 후기를 볼 수 있습니다. :point_right: [THE DAJU 후기 Velog](https://velog.io/@nohnohnohnoh/ToyProject%EB%8D%94%EB%8B%A4%EC%A3%BC-%ED%9B%84%EA%B8%B0)<br/>

### 자세한 THE DAJU 사이트를 볼 수 있습니다. :point_right: [THE DAJU 관련 Velog](https://velog.io/@nohnohnohnoh/series/ToyProject%EB%8D%94%EB%8B%A4%EC%A3%BC)

<br/>
<br/>

# :three: THE DAJU 실행방법

## :arrow_forward: 배포된 서버를 내리지 않았을 때

### 1. git clone을 진행한다.

```
git clone https://github.com/nohnohnohnoh/ToyProject_TheDaJu.git
```

### 2. clone한 파일을 열고 FrontEnd 파일로 이동한다.

```
cd FrontEnd
```

### 3. FrontEnd 파일로 이동했으면 npm install을 해주고 그 후, npm start를 해준다.

```
npm install
npm start
```

## :arrow_forward: 배포된 서버를 내렸을 때 혹은 서버 코드를 실행시키고 싶을 때

### 1. git clone을 진행한다.

```
git clone https://github.com/nohnohnohnoh/ToyProject_TheDaJu.git
```

### 2. 터미널 창을 두개로 나누고 FrontEnd BackEnd 둘 다 이동한다.

```
cd FrontEnd
cd BackEnd
```

### 3. 각 파일에서 npm intall을 해준다. 그 후, npm start를 해준다.

```
npm install
npm start
```

### :heavy_exclamation_mark: 주의 !

> BackEnd 파일에 .env 파일을 만든다.<br/>
> 아래를 복사해 붙여넣는다.

```
MONGOURI = mongodb+srv://admin:hUfzFYrqjhsGuIk4@cluster0.frt0u1q.mongodb.net/TOY_PROJECT?retryWrites=true&w=majority
SECRET_KEY = JWT_SECRET_KEY
```

 <img width="245" alt="스크린샷 2023-08-10 오후 5 20 06" src="https://github.com/nohnohnohnoh/ToyProject_TheDaJu/assets/97607572/7159df1c-43d5-4674-ad51-3315f3b88dd1">
<br/>
<br/>

# :four: THE DAJU 사용기술

### FE : JavaScript, TypeScript, React, Redux, React-Redux, <br/>Redux-toolkit, styled-component, AWS(S3)

### BE : Node, Express, Mongodb, Mongoose, AWS(EC2, S3)

<br/>

# :five: THE DAJU 사용 라이브러리

### FE : react-router, swiper, axios, redux-logger, redux-persis

### BE : nodemon, bcryptjs, cors, dotenv, jsonwebtoken

<br/>

# :exclamation: 개선사항

- 다양한 디바이스에서 더다주 사이트를 이용할 수 있게끔 반응협 웹 제작, S3에 관리한 이미지 cloudfront 적용.
- Cart, WishList 상품등록 과정 중에 유저를 생각하지 않은 중복 상품 등록을 유저별로 중복 상품이 등록되지 않도록 개선.
- Data 로딩 관련 부분에 Skeleton ui 추가, infinite scroll Data 로딩 관련 부분에서 Circle Loading Skeleton ui 추가.
