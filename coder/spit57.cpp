#include <iostream>
#include <vector>
using namespace std;

int sum(vector<int> arr, int start, int end) {
    int sum = 0;
    for (int i = start; i <= end; i++) {
        sum += arr[i];
    }
    return sum;
}

pair<int, bool> bestSum(vector<int> arr, int n) {
    bool dk = false;
    int maxSum = arr[0];
    int crsum = 0;
    for (int i = 0; i < n; i++) {
        crsum += arr[i];
        maxSum = max(maxSum, crsum);
        if (crsum < 0) crsum = 0;
        if (arr[i] > 0) dk = true;
    }
    return {maxSum, dk};
}

void nhaparr(vector<int> &arr, int n) {
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
}

int main() {
    int n = 0;
    cin >> n;
    vector<int> arr(n);
    nhaparr(arr, n);
    pair<int, bool> a = bestSum(arr, n);
    if (a.second) cout << a.first;
    else cout << "Nah bro is cooked";
    return 0;
}