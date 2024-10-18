#include <stdio.h>

int n,m;

int main(){

scanf("%i%i",&n,&m);
    float x[n][m];
    float sum=0;
    //x[0][0] x[0][1] x[0][2] x[0][3]
    //x[1][0] x[1][1] x[1][2] x[1][3]
    //x[2][0] x[2][1] x[2][2] x[2][3]

    for (int i=0; i<n;++i){
        for (int j=0; j<m; ++j){
            sum=sum+x[i][j];
        }
    }

    printf("%.0f\n",sum);

    //khai bao truc tiep
    float a[3][4]={2,34,5,6,1,3,7,7,1,4,6,7};

    for (int i=0; i<3;++i){
        for (int j=0; j<4; ++j){
           printf("%.0f ",a[i][j]);
        }
    }

}