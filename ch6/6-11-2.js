import fs from "fs";

const fileName = process.argv[2];
const orders = openFile(fileName);
const isReady = process.argv.includes("-r");
console.log(countsOrders(isReady));

function openFile(name) {
  if (!name) {
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  const rawData = fs.readFileSync(fileName);
  return JSON.parse(rawData);
}

function countsOrders(onlyCountReady = false) {
  if (onlyCountReady) {
    return orders.filter((order) => order.status === "ready").length;
  } else {
    return orders.length;
  }
}
