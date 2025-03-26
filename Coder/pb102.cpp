#include <bits/stdc++.h>
using namespace std;

bool isNguyenAm(char c) {
    if (c == 65 || c == 65 + 32)
        return true;
    if (c == 69 || c == 69 + 32)
        return true;
    if (c == 73 || c == 73 + 32)
        return true;
    if (c == 79 || c == 79 + 32)
        return true;
    if (c == 85 || c == 85 + 32)
        return true;
    if (c == 89 || c == 89 + 32)
        return true;
    return false;
}

int countNguyenAm(string st) {
    int count = 0;
    for (char x : st)
        if (isNguyenAm(x))
            count++;
    return count;
}

void nhap() {
    int i = 0;
    string st;
    while (getline(cin, st)) {
        cout << countNguyenAm(st) << endl;
        i++;
    }
}

int main() {
    nhap();
    return 0;
}
