#include <stdio.h>

int l1,r1,l2,r2;

int main(){
scanf("%i%i%i%i",&l1,&r1,&l2,&r2);

//dieu kien
 if(r1==l2){
    printf("%i %i",r1,l2);
 }
 else if(r1>l2){
    printf("%i %i",l2,r1);
 }
 //l2=l1 r1!=r2
 //r1=r2 l1!=l2
 //r1=r2 l1=l2

 
 else{
    printf("-1");
 }
}