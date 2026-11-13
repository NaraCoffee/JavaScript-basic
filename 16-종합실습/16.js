const students = [
  { name: '김민수', kor: 85, eng: 92, math: 78 },
  { name: '이지은', kor: 95, eng: 88, math: 91 },
  { name: '박서준', kor: 62, eng: 70, math: 55 },
  { name: '최유나', kor: 78, eng: 65, math: 88 },
  { name: '정하늘', kor: 90, eng: 95, math: 97 },
];

const getTotal = s => s.kor + s.eng + s.math;
const getAverage = s => (getTotal(s) / 3).toFixed(1);

function getGrade(avg) {
  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  return 'F';
}

students.forEach(s => {
  const avg = getAverage(s);
  console.log(`${s.name} | 총점 ${getTotal(s)} | 평균 ${avg} | ${getGrade(avg)}`);
});

const good = students.filter(s => getAverage(s) >= 80).map(s => s.name);
console.log(`80점 이상:`, good);

const topMath = students.reduce((max, s) => (s.math > max.math ? s : max));
console.log(`수학 최고점: ${topMath.name} (${topMath.math}점)`);
