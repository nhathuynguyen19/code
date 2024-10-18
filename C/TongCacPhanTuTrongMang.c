#include <stdio.h>

int n,m;
int temp;
int sum=0;

int main(){
    //khai bao mang hai chieu a
    int a[100][100];
    
    //nhap n,m
    printf("nhap n,m: ");
    scanf("%i%i",&n,&m);
    temp=n*m;

    //nhap n*m phan tu cua mang
    printf("nhap mang %i so: ",temp);
    for (int i=0;i<n;++i){
        for (int j=0;j<m;j++){
            scanf("%i",&a[i][j]);
            sum+=a[i][j];
        }
    }

    //in mang vua nhap
    printf("mang vua nhap:\n");
    for (int i=0;i<n;++i){
        for (int j=0;j<m;j++){
            printf("%i ",a[i][j]);
        }
        printf("\n");
    }

    //in tong mang
    printf("tong mang: %i",sum);
}