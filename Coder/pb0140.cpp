#include <iostream>
#include <string>
using namespace std;

// Ham loai bo khoang trang dau va cuoi chuoi
string trim(string st) {
    int left = 0, right = st.length() - 1;
    while (st[left] == ' ') left++;
    while (st[right] == ' ') right--;
    return st.substr(left, right - left + 1);
}

// Tra ve mang chua ho va ten
string *getHoTen(string st) {
    if (st.length() < 2) {
        string *arr = new string[2];
        arr[0] = "";
        arr[1] = st;
        return arr;
    }
    int left = st.length() - 1, right = st.length() - 1;
    while (st[left] != ' ') left--;
    string *arr = new string[2];
    arr[0] = st.substr(0, left);
    arr[1] = st.substr(left + 1, right - left);
    return arr;
}

// Rut gon ho thanh chu cai dau
string rutGonHo(string ho) {
    string st = string(1, ho[0]);
    for (long unsigned int i = 0; i < ho.length() - 1; i++)
        if (ho[i] == ' ') {
            for (long unsigned int j = i + 1; j < ho.length(); j++) {
                if (ho[j] != ' ') {
                    st += ho[j];
                    i = j;
                    break;
                }
            }
        }
    return st;
}

// Chuyen chuoi thanh chu thuong
string myToLower(string st) {
    for (long unsigned int i = 0; i < st.length(); i++)
        if (st[i] >= 'A' && st[i] <= 'Z')
            st[i] += 32;
    return st;
}

int main() {
    freopen("test.txt", "r", stdin);
    string st;
    getline(cin, st);
    string *arr = getHoTen(trim(st));
    cout << myToLower(rutGonHo(arr[0]) + arr[1]) << "@husc.edu.vn" << endl;
    delete[] arr;
    return 0;
}