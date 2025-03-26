#include <bits/stdc++.h>
using namespace std;

void nhapXau(string *&arr, int n) {
    for (int i = 0; i < n; i++) {
        getline(cin, arr[i]);
    }
}

void xuatXau(string *arr, int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << endl;
    }
}

int khacBiet(string a, string b, int c) {
    int dem = 0;
    for (int i = 0; i < c; i++) {
        if (a[i] != b[i]) {
            dem++;
        }
    }
    return dem;
}

int main() {
    int c, n;
    cin >> c >> n;
    cin.ignore();
    string *arr = new string[n];
    nhapXau(arr, n);

    unordered_map<string, int> maxDiff;
    for (int i = 0; i < n - 1; i++) {
        maxDiff[arr[i]] = 0;
        for (int j = i + 1; j < n; j++) {
            int diff = khacBiet(arr[i], arr[j], c);
            maxDiff[arr[i]] = max(maxDiff[arr[i]], diff);
            maxDiff[arr[j]] = max(maxDiff[arr[j]], diff);
        }
    }

    for (int i = 0; i < n; i++) {
        string s = arr[i];
        cout << maxDiff[s] << endl;
    }

    delete[] arr;
    return 0;
}