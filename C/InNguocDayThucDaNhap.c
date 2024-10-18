#include <stdio.h>
int n;
int main(){

//nhap n
scanf("%i",&n);
double MangThucN[n];

//nhap n so thuc vao mang
for (int i=0;i<n;++i){
    scanf("%lf",&MangThucN[i]);
}

//in mang nguoc mang vua nhap
printf("day nguoc mang vua nhap: ");
for(int i=n-1;i>=0;--i){
    printf("%.1lf ",MangThucN[i]);
}

}