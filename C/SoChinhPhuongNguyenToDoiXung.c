#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int n;
double SoCanBac2;
int SoCanBac2LamTron;
int DemSoChinhPhuong=0;
double temp;
bool DKSoNguyenTo;
bool DKSoDoiXung;

int main(){

    //nhap n
    scanf("%i",&n);
    int NSoNguyen[n];

    //nhap n so nguyen
    for (int i=0;i<n;++i){
        scanf("%i",&NSoNguyen[i]);
    }

    //in n so nguyen vua nhap
    printf("n so nguyen vua nhap: ");
    for (int i=0;i<n;++i){
        printf("%i ",NSoNguyen[i]);
    }

    //dem so chinh phuong
    for(int i=0;i<n;++i){
        temp=NSoNguyen[i];
        SoCanBac2= sqrt(temp);
        SoCanBac2LamTron=round(SoCanBac2);

            if(SoCanBac2==SoCanBac2LamTron){
                DemSoChinhPhuong++;
            }
    }

    //in so luong so chinh phuong
    printf("\nso luong so chinh phuong: %i",DemSoChinhPhuong);

    //xac dinh so nguyen to va in ra
    printf("\nso nguyen to trong day vua nhap la: ");
    for (int i=0;i<n;++i){
        DKSoNguyenTo=1;
        for (int j=2;j<NSoNguyen[i];++j){
            if (NSoNguyen[i]%j==0){
                DKSoNguyenTo=0;
                break;
            }
        }
        if(DKSoNguyenTo==1){
            printf("%i ",NSoNguyen[i]);
        }
    }
    
    //kiem tra so doi xung
    DKSoDoiXung=1;
    for (int i=0;i<n;++i){
        if(NSoNguyen[i]!=NSoNguyen[n-1-i]){
            DKSoDoiXung=0;
            break;
        }
        if(i==n-i){
            break;
        }
    }

    if(DKSoDoiXung){
        printf("\nday so vua nhap doi xung");
    }
    else{
        printf("\nday so vua nhap khong doi xung");
    }
}