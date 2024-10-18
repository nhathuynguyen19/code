#include <stdio.h>

void swap(int*, int*);
void Add10(int*);
int num1, num2;
int* p, t;

int main(){
    //swap 2 number bang cach truyen dia chi cho ham
    num1 = 5;
    num2 = 10;
    swap(&num1, &num2);
    printf("num1 = %i\n", num1);
    printf("num2 = %i\n\n", num2);

    //truyen con tro cho ham, cong 10
    t = 3;
    p = &t;
    Add10(p);
    printf("p = %i", *p);

}

void Add10(int* p){
    *p = *p + 10;
}

void swap(int* n1, int* n2){
    int temp;
    temp = *n1;
    *n1 = *n2;
    *n2 = temp;
}