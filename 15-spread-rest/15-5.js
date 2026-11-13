const defaultConfig = {
  theme: "light",
  language: "ko",
  debug: false
};

const userConfig = {
  theme: "dark",
  debug: true
};
// 1) 상수 finalConfig 만들기
//    → ...defaultConfig를 먼저, ...userConfig를 나중에 펼치기 (나중 것이 덮어씀)
const finalConfig = {
  ...defaultConfig,
  ...userConfig
};

// 2) finalConfig 출력
console.log(finalConfig);
// 출력 결과:
// {
//   theme: "dark",
//   language: "ko",
//   debug: true
// }
