#include <stdio.h>

int n,m;

long long int DeQuy5(int m,int n){
    if(m==0||m==n){
        return 1;
    }
    if(0<m&&m<n){
        return DeQuy5(m-1,n-1)+DeQuy5(m,n-1);
    }
}

int main(){

//nhap m, n nguyen khong am nam trong khoang 0-20
scanf("%i%i",&n,&m);

//in ket qua goi ham
printf("%lli",DeQuy5(m,n));

return 0;
}