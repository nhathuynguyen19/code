#include <stdio.h>

int n;

int main(){

//nhap vao so nguyen n
scanf("%i",&n);
double MangNSoThuc[n];

//nhap n so thuc vao mang
for(int i=0;i<n;++i){
    scanf("%lf",&MangNSoThuc[i]);
}

//in mang so thuc vua nhap
printf("day so thuc vua nhap la: ");
for (int i=0;i<n;++i){
    printf("%.1lf ",MangNSoThuc[i]);
}

}