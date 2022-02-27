//express 모듈 가져오기
const express = require('express')

//express 기능을 이용해서 새로운 app 생성
const app = express()

//실행될 프로젝트의 포트번호
const port = 3000

//유저 모델 가져오기
const {User} = require("./model/User")
//바디파서 가져오기
//바디파서 옵션
//application/x-www-form/urlencoded 형식으로 온 데이터를 분석
app.use(express.urlencoded({extended:true}));
//json형식으로 온 데이터를 분석
app.use(express.json());

//몽구스 모듈 가져오기
const mongoose = require('mongoose')
//몽구스를 이용하여 몽고디비 연결 then연결되면 코드실행, catch 에러시 코드실행

//몽고디비 키값 가져오기
const config = require('./config/key')
mongoose.connect(config.mongoURI)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))


//프로젝트의 루트경로, 응답 , 요청 정보를 파라미터로 받음
app.get('/', (req, res) => {
  //응답으로 'Hello World!'출력
  res.send('Hello World! 안녕하세요')
})

//회원가입용 라우터 만들기
app.post('/register',(req,res) => {
  //회원가입 할때 필요한 정보 가져오기

  //DB에 저장
  //바디 파서를 이용해서 req.body에 온 정보를 이용함.
  const user = new User(req.body)

  //회원 정보 라우터 user.save는 몽고디비 
  //유저정보가 안에 들어있음 정상값일 경우 res 200 리턴
  user.save((err,userInfo) =>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })
})

//앱을 포트번호로 연결하고 콘솔창에 아래 로그를 출력함
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})