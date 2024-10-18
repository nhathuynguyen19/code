#include <stdio.h>
#include <stdbool.h>
#include <math.h>

int n;
int temp;
bool DKTangDan;
double x;
int DemSoLanXuatHienCuax=0;
int DemSoNguyenAm=0;
int DemSoLanXuatHienCacPhanTuTrongDay;
bool PhanTuDaThongKe;

int main(){

    //1) Nhập từ bàn phím số nguyên n trong khoảng từ 5 đến 20
    printf("nhap n: ");
    scanf("%i",&n);
    double ArrayNSoThuc[n];


    //2) Nhập n số thực từ bàn phím
    printf("nhap n so thuc: ");
    for (int i=0;i<n;++i){
        scanf("%lf",&ArrayNSoThuc[i]);
    }

    //3) In ra màn hình danh sách các số vừa nhập (chỉ in 2 chữ số lẻ)
    printf("danh sach so vua nhap: ");
    for (int i=0;i<n;++i){
        printf("%.2lf ",ArrayNSoThuc[i]);
}

    //4) Cho biết dãy vừa nhập có phải tăng dần hay không
    printf("\nLa day tang dan: ");
    temp=ArrayNSoThuc[0];
    DKTangDan=1;
    for(int i=1;i<n;++i){
        if(ArrayNSoThuc[i]>temp){
            temp=ArrayNSoThuc[i];
        }
        else{
            DKTangDan=0;
            break;
        }
    }
    if(DKTangDan){
        printf("DUNG\n");
    }
    else{
        printf("KHONG\n");
    }

    //5) nhap so thuc x, in so lan xuat hien trong day vua nhap
    printf("nhap x: ");
    scanf("%lf",&x);
    printf("so lan xuat hien cua x trong day vua nhap la: ");
    for(int i=0;i<n;++i){
        if(x==ArrayNSoThuc[i]){
            DemSoLanXuatHienCuax++;
        }
    }
    printf("%i\n",DemSoLanXuatHienCuax);

    //6) Đếm xem trong dãy có bao nhiêu số nguyên âm và in ra màn hình
    printf("Cac so nguyen am trong day: ");
    for(int i=0;i<n;++i){
        if((ArrayNSoThuc[i]<0)&&(round(ArrayNSoThuc[i])==ArrayNSoThuc[i])){
            printf("%.0lf ",ArrayNSoThuc[i]);
            DemSoNguyenAm++;
        }
    }
    printf("\nCo %i so nguyen am trong day da nhap\n",DemSoNguyenAm);

    //7) Hãy thống kê số lần xuất hiện các giá trị của dãy
    printf("So lan xuat hien cua tung gia tri trong day: \n");

    for(int i=0;i<n;++i){
        DemSoLanXuatHienCacPhanTuTrongDay=0;
        PhanTuDaThongKe=0;
        for(int j=0;j<i;++j){
            if(ArrayNSoThuc[j]==ArrayNSoThuc[i]){
                PhanTuDaThongKe=1;
                break;
            }
        }

        if(!PhanTuDaThongKe){
            DemSoLanXuatHienCacPhanTuTrongDay=0;
            for(int j=i;j<n;++j){
                if(ArrayNSoThuc[j]==ArrayNSoThuc[i]){
                    DemSoLanXuatHienCacPhanTuTrongDay++;
                }
            }
            printf("%.2lf: %i\n",ArrayNSoThuc[i],DemSoLanXuatHienCacPhanTuTrongDay);
        }

        
    }

}