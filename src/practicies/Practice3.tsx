export const Practice3 = () => {
  // 返却値に型を与えておく
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };
  const onClickPractice = () => {
    // エラーを検知できる
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
