#include <iostream>
using namespace std;

// kiem tra number co phai la so nguyen to hay khong
bool isPrime(int number) {
    if (number < 2) return false;
    for (int i = 2; i * i <= number; i++)
        if (number % i == 0) return false;
    return true;
}

int main() {
    int n, count = 0, number;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> number;
        if (isPrime(number)) count++;
    }
    cout << count << endl;
}