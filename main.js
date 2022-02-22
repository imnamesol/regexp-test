// const str = `
// 010-1234-5678
// thesecon@gmail.com
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// // 63개가 아닌 경계에서 시작해서 f로 시작하고, 
// // 63개 문자가 1개 이상 오는 연속일치를 시키고
// // 63개 문자가 아닌 경계에서 끝 >> 소문자 f로 시작하는 영단어

// const h = `  the hello  world   !

// `

// console.log(
//   h.replace(/\s/g, '')
// ) // 공백을 빈 문자로 대체하여 출력 = 모든 공백 삭제

const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=@)/g)
)