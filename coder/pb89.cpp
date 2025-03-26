#include <bits/stdc++.h>
using namespace std;

int coutT(int **arr,int m,int n) {
    int T = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (arr[i][j] == 0)
                T++;
        }
    }
    return T;
}

void nhapArr(int **arr,int m,int n) {
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> arr[i][j];
        }
    }
}

int main() {
    int m, n;
    cin >> m >> n;
    double half = (double)(m * n) / 2;
    int **arr = new int*[m];
    for (int i = 0; i < m; i++) {
        arr[i] = new int[n];
    }
    nhapArr(arr, m, n);
    if ((double)coutT(arr, m, n) >= half) cout << "Yes";
    else cout << "No";



    return 0;
}


/*
    Ma trận thưa

    Ma trận thưa là một ma trận có số phần tử 0 xuất hiện nhiều trong ma trận.
    Cụ thể, gọi T là tổng số các phần tử 0, ma trận A_{m,n} là ma trận thưa khi T ≥ (m * n) / 2.

    Yêu cầu: Lập trình kiểm tra xem ma trận A có phải là ma trận thưa hay không.

    Input:
    - Dòng đầu tiên chứa hai số nguyên dương m, n (1 ≤ m, n ≤ 500).
    - m dòng tiếp theo, mỗi dòng chứa n số a[i][j] (1 ≤ a[i][j] ≤ 10^6).

    Output:
    - In ra "Yes" nếu A là ma trận thưa, ngược lại in "No".

    Ví dụ:
    Input 1:
    3 3
    1 0 1
    0 1 0
    0 0 1

    Output 1:
    Yes

    Input 2:
    3 3
    1 1 1
    0 1 0
    0 0 1

    Output 2:
    No
*/
