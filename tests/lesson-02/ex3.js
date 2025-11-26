const number = 1;

switch (true) {
    case number > 0:
        console.log("Giá trị bạn nhập là số dương");
        break;

    case number < 0:
        console.log("Giá trị bạn nhập là số âm");
        break;

    default:
        console.log("Giá trị bạn nhập là số 0");
}
