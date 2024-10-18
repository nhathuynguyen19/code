#include <stdio.h>
#include <math.h>


int n,*an,stnlamtron,dem=0;;
double sotunhien,dk,canbac2;
int main()
{
    scanf("%i",&n);
    int an[n];
    for(int i=0; i<n; i++)
    {
        scanf("%i", &an[i]);
        canbac2=sqrt(an[i]);
        stnlamtron= ceil(canbac2);
    
        if( canbac2 == stnlamtron )
            dem++;
    }
    printf("%i",dem);
}