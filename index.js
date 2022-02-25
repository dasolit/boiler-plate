//express 모듈 가져오기
const express = require('express')

//express 기능을 이용해서 새로운 app 생성
const app = express()

//실행될 프로젝트의 포트번호
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://qwer:qwer1234@boilerplate.vermj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))


//프로젝트의 루트경로, 응답 , 요청 정보를 파라미터로 받음
app.get('/', (req, res) => {
  //응답으로 'Hello World!'출력
  res.send('Hello World!')
})

//앱을 포트번호로 연결하고 콘솔창에 아래 로그를 출력함
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})