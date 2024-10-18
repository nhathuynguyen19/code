#include <iostream>
#include <windows.h>
using namespace std;

class Bill // lớp hoá đơn
{
private:
    int old_index;
    int new_index;

public:
    double cal_number();                                               // số nước
    double cal_money(double tax, int cost_per_num, double chenh_lech); // tính tiền nước
    void input();                                                      // nhập liệu
};

class Tax // lớp thuế
{
private:
    double tax;

public:
    double cal_tax_per_num(int primary_num);        // thuế mỗi số
    double cal_tax(int primary_num, double number); // thuế cho số nước
    void input();                                   // nhập liệu
};

class QuanLy
{
public:
    void input();
};

double Bill::cal_number() // số nước
{
    return new_index - old_index;
}

double Bill::cal_money(double tax, int cost_per_num, double chenh_lech) // tính tiền nước
{
    return (double)cost_per_num * (cal_number() + chenh_lech) + tax;
}

void Bill::input()
{
    cout << "Nhập số mới: ";
    cin >> new_index;
    cout << "Nhập số cũ: ";
    cin >> old_index;
}

double Tax::cal_tax_per_num(int primary_num) // tính thuế mỗi số
{
    return (double)tax / primary_num;
}

double Tax::cal_tax(int primary_num, double number) // tính thuế cho một phần của tổng số nước
{
    return (double)cal_tax_per_num(primary_num) * number;
}

void Tax::input()
{
    double tax1, tax2, tax3;
    cout << "Nhập thuế VAT: ";
    cin >> tax1;
    cout << "Nhập phí môi trường rừng: ";
    cin >> tax2;
    cout << "Nhập phí bảo vệ môi trường: ";
    cin >> tax3;
    tax = tax1 + tax2 + tax3;
}

void QuanLy::input()
{
    Bill bill_tong, bill_1, bill_2;
    Tax thue;
    int cost_per_num = 8733;
    int so_tong;
    int so_tong_2_bill;
    double num_bill_1, num_bill_2;

    cout << "Nhập hóa đơn tổng: " << endl;
    bill_tong.input();
    cout << endl;
    cout << "Nhập hóa đơn 1: " << endl;
    bill_1.input();
    cout << endl;
    cout << "Nhập hóa đơn 2: " << endl;
    bill_2.input();
    cout << endl;

    thue.input();
    cout << "____________________" << endl;
    so_tong = bill_tong.cal_number();
    num_bill_1 = bill_1.cal_number();
    num_bill_2 = bill_2.cal_number();
    so_tong_2_bill = num_bill_1 + num_bill_2;

    cout << endl;
    cout << "Số nước hóa đơn tổng: " << so_tong << endl;
    cout << "Tổng số nước hai hóa đơn: " << so_tong_2_bill << endl;
    if (so_tong - so_tong_2_bill != 0)
    {
        cout << "Chênh lệch: " << so_tong - so_tong_2_bill << endl;
    }
    cout << endl;
    if (so_tong == so_tong_2_bill)
    {
        double thue1 = thue.cal_tax(so_tong, num_bill_1);
        double thue2 = thue.cal_tax(so_tong, num_bill_2);
        double money1 = bill_1.cal_money(thue1, cost_per_num, 0);
        double money2 = bill_2.cal_money(thue2, cost_per_num, 0);

        cout << "Số nước hóa đơn 1: " << num_bill_1 << ", " << endl
             << "Thuế hóa đơn 1: " << thue1 << endl;
        cout << "Tiền nước hóa đơn 1: " << money1 << endl
             << endl;
        cout << "Số nước hóa đơn 2: " << num_bill_2 << ", " << endl
             << "Thuế hóa đơn 2: " << thue2 << endl;
        cout << "Tiền nước hóa đơn 2: " << money2 << endl;
    }
    else
    {
        double chenh_lech = so_tong - so_tong_2_bill;
        double chenh_lech_2 = chenh_lech / 2;

        double thue1 = thue.cal_tax(so_tong, num_bill_1 + chenh_lech_2);
        double thue2 = thue.cal_tax(so_tong, num_bill_2 + chenh_lech_2);
        double money1 = bill_1.cal_money(thue1, cost_per_num, chenh_lech_2);
        double money2 = bill_2.cal_money(thue2, cost_per_num, chenh_lech_2);

        cout << "Số nước hóa đơn 1: " << num_bill_1 << " + chênh lệch " << chenh_lech_2 << endl
             << "Thuế hóa đơn 1: " << thue1 << endl;
        cout << "Tiền nước hóa đơn 1: " << money1 << endl
             << endl;
        cout << "Số nước hóa đơn 2: " << num_bill_2 << " + chênh lệch " << chenh_lech_2 << endl
             << "Thuế hóa đơn 2: " << thue2 << endl;
        cout << "Tiền nước hóa đơn 2: " << money2 << endl;
    }
}

int main()
{
    SetConsoleOutputCP(CP_UTF8);
    QuanLy ql1;
    ql1.input();
    return 0;
}
