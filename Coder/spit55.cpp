#include <iostream>
using namespace std;

string tachSoDau(string sdt) {
    return sdt.substr(0, 2);
}

int xacDinhPhi(string haiSoDau) {
    if (haiSoDau == "07" || haiSoDau == "08") return 6;
    if (haiSoDau == "04" || haiSoDau == "01") return 5;
    if (haiSoDau == "02" || haiSoDau == "03" || haiSoDau == "09") return 3;
    else return 8;
}

int tinhTienCuoc(int soTien, string sdt) {
    return (soTien / 100) * xacDinhPhi(tachSoDau(sdt));
}

int tienNhanDuoc(int soTien, string sdt) {
    return soTien - tinhTienCuoc(soTien, sdt);
}

int main() {
    string sdt = "";
    int sotien = 0;
    cin >> sdt >> sotien;
    cout << tienNhanDuoc(sotien, sdt) << endl;

    return 0;
}