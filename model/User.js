const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { //컬럼명
        type:String, //타입
        maxlength:50 //조건
    },
    email:{
        type:String,
        trim:true, //공백제거
        unique:1 //유니크지정
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0 //기본값 설정
    },
    image:String,
    token:{
        type:String //유효성 체크시 사용할 토큰
    },
    tokenExp:{ //토큰의 유효기간
        type:Number
    }

})

//유저 모델 생성 ('명칭', 스키마 변수명)
const User = mongoose.model('User',userSchema)

//다른 파일에서도 사용 가능하도록 모듈화
module.exports = {User}