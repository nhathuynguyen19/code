#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
int n,dkn,dk1,dk2,dk3,dkII,dkT1,dkT2,dkT3;
scanf("%d",&n);
dkn=abs(n)<=pow(10,9);
if(dkn)
{
dk1=(n%2==0);

dk2=(n<0);
dk3=(n%3==0);

dkII=dk2&&dk3;

dkT1=(dk1==1&&dkII==1);
dkT2=(dk1==0&&dkII==0);
dkT3=dkT1||dkT2;
if(dkT3)
printf("No");
else
printf("Yes");
}
}