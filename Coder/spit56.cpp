#include <iostream>
#include <unordered_map>
using namespace std;

#define ll long long

void nhaparr(ll **&arr, ll n) {
    for (ll i = 0; i < n; i++) {
        ll *a = new ll[2];
        cin >> a[0] >> a[1];
        arr[i] = a;
    }
}

void xoaarr(ll **&arr, ll n) {
    for (ll i = 0; i < n; i++) {
        delete[] arr[i];
    }
    delete[] arr;
}

bool isParallel(ll a, ll b, ll c, ll d) {
    if (a == c && b != d) return true;
    return false;
}

pair<ll, ll> findParallel(ll **&arr, ll n) {
    pair<ll, ll> rs{-1, -1};
    unordered_map<ll, ll> m;

    for (ll i = 0; i < n; i++) {
        ll a = arr[i][0], b = arr[i][1];
        if (m.count(a))
            if (arr[m[a]][1] != b)
                return {m[a] + 1, i + 1};
        m[a] = i;
    }
    return rs;
}

int main() {
    ll n = 0;
    cin >> n;
    ll **arr = new ll *[n];
    nhaparr(arr, n);
    pair<ll, ll> a = findParallel(arr, n);
    if (a.first > a.second) swap(a.first, a.second);
    if (a.first == -1) cout << "NO";
    else cout << "YES" << endl << a.first << " " << a.second << endl;
    xoaarr(arr, n);
    return 0;
}