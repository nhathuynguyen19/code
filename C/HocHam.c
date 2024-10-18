#include <stdio.h>

int a,n;
int temp=1;

//tao ham a^n
int BaCoMayHam(int a , int n){
    for (int i=0;i<n;++i){
        temp*=a;
    }
return temp;
}

int main(){

    //nhap a va n
    printf("nhap a: ");
    scanf("%i",&a);
    printf("nhap so mu n: ");
    scanf("%i",&n);

    //in gia tri ham tra lai
    printf("%i^%i=%i", a,n,BaCoMayHam(a,n));
}