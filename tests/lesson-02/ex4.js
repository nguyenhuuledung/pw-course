const chieuCao= 172;
let canNangLyTuong= chieuCao%100 * 9 / 10;
let canNangToiDa= chieuCao%100;
let canNangToiThieu= chieuCao%100 * 8 / 10;
console.log("Cân cân nặng lý tưởng: " + canNangLyTuong + "; " + "Cân nặng tối đa: " + canNangToiDa + "; " + "Cân nặng tối thiểu: " + canNangToiThieu + ".") 