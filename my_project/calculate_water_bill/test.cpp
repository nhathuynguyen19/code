#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QString>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Kết nối nút bấm với hàm xử lý khi bấm
    connect(ui->calculateButton, &QPushButton::clicked, this, &MainWindow::calculate);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::calculate()
{
    // Lấy dữ liệu từ các trường nhập liệu
    int new_index = ui->newIndexLineEdit->text().toInt();
    int old_index = ui->oldIndexLineEdit->text().toInt();
    double vat = ui->vatLineEdit->text().toDouble();
    double env_fee = ui->envFeeLineEdit->text().toDouble();
    
    // Tính toán logic dựa trên các giá trị nhập vào
    double num = new_index - old_index;
    double tax = vat + env_fee;
    double total_money = num * 8733 + tax;
    
    // Hiển thị kết quả
    ui->resultLabel->setText("Tiền nước: " + QString::number(total_money) + " VND");
}
