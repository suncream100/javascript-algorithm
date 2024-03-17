// 원소들의 곱과 합
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let [sumNum, multiplyNum] = [0, 0];
  num_list.forEach((num, i) => {
    sumNum += num;
    i === 0 ? multiplyNum += num : multiplyNum *= num;
  });
  return multiplyNum < Math.pow(sumNum, 2) ? 1 : 0;
}

console.log(solution([3,4,5,2,1]));
console.log(solution([5,7,8,3]));