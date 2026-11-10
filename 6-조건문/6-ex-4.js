// 1) 변수 id, pw에 값 넣기
const id = 'admin'
const pw = '1234'
// 2) if: 아이디와 비밀번호가 둘 다 맞으면 (&&) → '로그인 성공'
if (id == 'admin' && pw == '1234') {
    console.log('로그인 성공');


} else if (id == 'admin') {
    console.log('비밀번호 오류')
} else {
    console.log('없는 아이디')
}
// 3) else if: 아이디만 맞으면 → '비밀번호 오류'
// 4) else → '없는 아이디'