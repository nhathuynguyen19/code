#include <stdio.h>

// Hàm sử dụng mảng 2 chiều
void myFunction(int B[4][N + 1]) {
    // Thực hiện các thao tác với mảng ở đây
    // Ví dụ: in giá trị của mảng
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < N + 1; ++j) {
            printf("%d ", B[i][j]);
        }
        printf("\n");
    }
}

int main() {
    // Khai báo mảng 2 chiều
    int N = 5;  // Đặt giá trị cho N (ví dụ)

    int B[4][N + 1];

    // Gọi hàm và truyền mảng vào đó
    myFunction(B);

    return 0;
}