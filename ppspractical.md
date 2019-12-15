![enter image description here](https://lh3.googleusercontent.com/vVnH6BXe-LhJsPfOsgew6B8F71aXmb7rVa7Z6HBNYyRpZ_pcReGF2OtL8iwd2MX3qC6zUX5Axfwm)
## ***Submitted By :***
##### ame : Kunwar        
##### ***Roll No. : 1921058***
##### ***Branch : Information Tecnology(I.T)***
##### ***Section  : I.T. A2***


# My C programes
## 1:To find sum of two numbers
```

     // to find sum of two numbers
     #include<stdio.h>
int main()
{                                                                                      
 int a;
 int b;
 int c ;
 printf("Enter two numbers to get sum:");
 scanf("%d  %d",&a,&b);
 printf(" \nThe result is :%d + %d= %d\n",a,b,c=a+b);
    return 0;
 }
```
**OUTPUT**:
```
Enter two numbers to get sum:45 55
 
The result is :45 + 55= 100
```
## 2:To print hello world

```
//To print  hello world
#include<stdio.h>
int main()
{                     
 printf("\nHello world\n");
}
```
**OUTPUT:**
``` 
 Hello world
```
## 3:to print face
```
/ / To print face
#include<stdio.h>
int a();
int b();
int c();
int d();
int main()
{
a();
b();
c();
d();
}
int a()
{
puts(" GURU NANAK DEV ENGINEERING COLLEGE");
}
int b()
{
puts("DEPARTMENT OF INFORMATION TECHNOLOGY")
}
int c()
{
puts("___________________________");
puts("|    xxxxxxxxxxxxxxx      |");
puts("|    (   ^     ^   )      |");
puts("|    (   0     0   )      |");
puts("|     \\     |     /       |");
puts("|      \\    =    /        |");
puts("|       \\_______/         |");
puts("|            |            |");
puts("|____________|____________|");
}
int d()
{
puts("       KUNWAR ARORA");
}
}
```
**OUTPUT:**
```
 GURU NANAK DEV ENGINEERING COLLEGE
DEPARTMENT OF INFORMATION TECHNOLOGY
___________________________
|    xxxxxxxxxxxxxxx      |
|      (   ^     ^   )      |
|      (   0     0   )      |
|       \     |     /       |
|        \    =    /        |
|         \_______/         |
|              |            |
|____________|____________|
       KUNWAR ARORA
```
## 4:To fill your information

```
  / /   To fill your information
#include<stdio.h>

  void info();
  int main()
  {
     info();
  }

   void info()
  {  char a[20];
     int roll,age;
     long int ph;
   printf("\nEnter your information:\n");
   printf("Name = ");
    scanf("%s",a);
  printf("\nRoll no=");
scanf("%d",&roll);
printf("\nAge = ");
 scanf("%d",&age);
 printf("\nPhone no.= ");
 scanf("%ld",&ph);

printf("\nThe name is %s\nYour roll no is %d\nMy phone number is %ld\n My age is %d\n",a,roll,ph,age);

}
```
**OUTPUT:**
```
Enter your information:
Name = kunwar

Roll no=1921058

Age = 18

Phone no.= 9988988833

The name is kunwar
Your roll no is 1921058
My phone number is 9988988833
 My age is 18
 ```
## 5:To show area,perimeter,volume of square
```
   
 / / Area,premiter,volume of square
  #include<stdio.h>
void square();
int main()
{     
 square();
 return 0;
}                                    
void square()
{
 int side;
 printf("Enter the side of square:");
 scanf("%d",&side);

 printf("\nPerimeter of square:%d",4*side);
 printf("\nArea of square:%d",side*side);
 printf("\nVolume of square:%d\n",side*side*side);
}
```
**OUTPUT**:
```
Enter the side of square:4

Perimeter of square:16
Area of square:16
Volume of square:64
```
## 6:To print a table
```
#include<stdio.h>
int main()
{
int a,b,c,d;
printf("enter the starting no. and ending no. ");
scanf("%d %d",&a,&b);
for(c=a;c<=b;c++)
{
for(d=1;d<=10;d++)
{
printf("\n %d x %d=%d",c,d,c*d);
}
}
return 0;
}
```
**OUTPUT:**
```
enter the starting no. and ending no. 8 9

 8 x 1=8
 8 x 2=16
 8 x 3=24
 8 x 4=32
 8 x 5=40
 8 x 6=48
 8 x 7=56
 8 x 8=64
 8 x 9=72
 8 x 10=80
 9 x 1=9
 9 x 2=18
 9 x 3=27
 9 x 4=36
 9 x 5=45
 9 x 6=54
 9 x 7=63
 9 x 8=72
 9 x 9=81
 9 x 10=90
 ```
## 7:Sum and average of numbers
```
 // sum and average of number
#include<stdio.h>
  int main()
 {                                 
     int a,b,c,d,e,sum,avg;
                                                               
   printf("Enter five numbers:");
   scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
    sum = a+b+c+d+e;
   printf("The sum is:%d\n",sum);
   avg = sum/5;
   printf("The average is:%d\n",avg);
  }
``` 
**OUTPUT**:
```
Enter five numbers:1 2 3 4 5 
The sum is:15
The average is:3
```
## 8:To convert fahrenheit to centigrade
```
#include<stdio.h>
int main()
{
float  c,f;
printf("Enter The Fahrenheit Value ");
scanf("%f",&f);
c=(f-32)*5/9;
printf("Temprature in Centigrade=%f",c);
return 0;
}
```
**OUTPUT:**
```
Enter The Fahrenheit Value 97

Temprature in Centigrade=36.111111
```
 ## 9:To find number is even or odd
  ```
       #include<stdio.h>
int main()
 {                                
    int a;   
   printf("Enter a number:");
   scanf("%d",&a);
 if(a%2==0)
  printf("The  number is even\n");
 else
   printf("The number is odd\n");
 }
```
**OUTPUT**:
```
Enter a number:6
The  number is even
```
***OR***
```
Enter a number:9
The number is odd
```
## 10:To find area and volume of rectangle
```
//find area and volume of rectangle
#include<stdio.h>
int main()
{
 int l,b,h;
 printf("Enter length of rectangle:");
 scanf("%d",&l);
 printf("\nEnter breadth of rectangle:");
 scanf("%d",&b);
 printf("\nEnter height of rectangle:");
 scanf("%d",&h);
 printf("\nThe area of rectangle is:%d",l*b);
 printf("\nThe volume is :%d\n",l*b*h);
 return 0;
 }
 ```
 **OUTPUT**:
 ```
 Enter length of rectangle:4 

Enter breadth of rectangle:3 

Enter height of rectangle:4

The area of rectangle is:12
The volume is :48
```

## 11: To show result of operands
```
//To show results using operands(+,-,*,%,/)
#include<stdio.h>
int main()
{
float a,b;
 char c;
printf("enter first  number:");
scanf("%f",&a);
printf("enter operator[+ - % / *]:");
scanf(" %c",&c);
printf("enter second number:");
scanf("%f",&b);
int d,r;
d=(int) a;
r=(int) b;
switch(c)
{
case '+': printf("The result is:%.2f\n",a+b); break;
case '-':printf("The result is:%.2f\n",a-b); break;
case '*':printf("The result is:%.2f\n",a*b); break;
case '%':printf("The result is:%d\n",d%r); break;
case '/':printf("The result is:%.2f\n",a/b); break;
default : printf("Enter correct operator ");
}
return 0;
}
```

**OUTPUT**:
```
enter first  number:20
enter operator[+ - % / *]: *
enter second number:10
The result is:200.00
```

## 12:Sum of two constants
```
#include<stdio.h>
int main()                                                                       
{
   int a=100,b=120,c;
   c = a+b;
   printf("\na=100\na=120\nSum of a and b is :%d",c);
   return 0;
}
```
**OUTPUT:**
```
a=100
b=120
Sum of a and b is :220
```
## 13:To check wheather no is positive or not
```
#include<stdio.h>
int main()
{
int a;
printf("enter any number =");
scanf("%d",&a);
if(a>0)
{
printf("the number is positive\n");
}
else
{
printf("the number is negative\n");
}
return 0;
}
```
**OUTPUT:**
```
enter any number =16

the number is positive
```
## 14:To print calculator
```
#include<stdio.h>
void main()
{
puts("\n\
_________________\n\
| 1 | 2 | 3 |   |\n\
|___|___|___|   |\n\
| 4 | 5 | 6 | + |\n\
|___|___|___|___|\n\
| 7 | 8 | 9 | - |\n\
|___|___|___|___|\n\
|     0     | * |\n\
|___________|___|\n");
}
```
**OUTPUT:**
```
_________________
| 1 | 2 | 3 |   |
|___|___|___|   |
| 4 | 5 | 6 | + |
|___|___|___|___|
| 7 | 8 | 9 | - |
|___|___|___|___|
|     0     | * |
|___________|___|
```
## 15:To show stars pattern
```
 // TO show stars using loop 
#include<stdio.h>
int main()
{ int i,j,k;
 printf("Enter the no. to show pattern:");
 scanf("%d",&k);
 
  for(i=k;i>=1;i--)
 {
  for(j=i;j>=1;j--)
 {
  printf("* ");
 }
 printf("\n");
 }
 return 0;
 }
 ```
 **OUTPUT**:
 ```
 Enter the no. to show pattern:8
* * * * * * * * 
* * * * * * * 
* * * * * * 
* * * * * 
* * * * 
* * * 
* * 
*
```
 ## 16:To show stars pattern 
 ```
 //to show star pattern for n numbers
#include<stdio.h>
int main()
{
 int i,j,k;
 printf("Enter the value upto pattern is shown:");
 scanf("%d",&k);

 for(i=1;i<=k;i++)
{
  for(j=1;j<=i;j++)
{
  printf("* ");
 }
 printf("\n");
 }
 return 0;
}
```
**OUTPUT**:
```
Enter the value upto pattern is shown:8
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
```
 ## 17:To show factorial result
 ```
 //To show factorial of user input
#include<stdio.h>
int main()
{
 int a,result=1;
 printf("Enter the factorial of:");
 scanf("%d",&a);
 for(int i=a;i>=1;i--)
{
printf("%d X ",i);
result=result*i;
}
printf("= %d\n",result);
return 0;
}
```
**OUTPUT**:
```
Enter the factorial of:5
5 X 4 X 3 X 2 X 1 X = 120
```
## 18:To show puts value upto n number using loop
```
// to show punishment using loop
 #include<stdio.h>
 int main()
 {
 int i,a;
 printf("Enter the number upto punishment is shown:");
 scanf("%d",&a);
  for(i=1;i<=a;i++)
puts("RISKING IS BETTER THEN REGRATTING ");
return 0;
}
```
**OUTPUT**:
```
Enter the number upto punishment is shown:10
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
RISKING IS BETTER THEN REGRATTING
```
## 19:To show the size of int,float,char,double,long,short
```
 // size of int, float, char, double, long, short
#include<stdio.h>
int main()
{                                   
 printf("Integer:%d\n",sizeof(int));
 printf("float:%d\n",sizeof(float));
 printf("character:%d\n",sizeof(char));
 printf("double:%d\n",sizeof(double));
 printf("short:%d\n",sizeof(short));
 printf("long:%d\n",sizeof(long));
 }
```
**OUTPUT**:
```
Integer:4
float:4
character:1
double:8
short:2
long:8
```
## 20:Matrix multipication
 ```
#include<stdio.h>
int main()
{
int sum=0,m,n,p,q,c,d,k;
int first[10][10], second[10][10], multiply[10][10];
// for matrix 1
printf("Enter the number of rows and column of first matrix:\n");
scanf("%d %d",&m,&n);
printf("Enter elements of first matrix:\n");

for(c=0;c<m;c++)
 for(d=0;d<n;d++)
  scanf("%d",&first[c][d]);
// for second matrix
printf("Enter the number of rows and columns of second matrix:\n");
scanf("%d %d",&p,&q);

if(n!=p){
printf("matrix multipication cannot be possible !!!!\n");}

else{
printf("Enter the elements of second matrix:\n");
for(c=0;c<p;c++)
 for(d=0;d<q;d++)
  scanf("%d",&second[c][d]);

for(c=0;c<m;c++)
{
 for(d=0;d<q;d++)
{
  for(k=0;k<p;k++)
{                             
  sum = sum + first[c][k] * second[k][d];
  }
   multiply[c][d] = sum;
 sum =0;
}
}

  printf("product of the matrix:\n");
  
  for(c=0;c<m;c++)
{
  for(d=0;d<q;d++)
   printf("%d\t",multiply[c][d]);
   printf("\n");
}
}                             
 return 0;
 }
 ```
 **OUTPUT**:
 ```
 Enter the number of rows and column of first matrix:
2 2
Enter elements of first matrix:
3 4
5 6
Enter the number of rows and columns of second matrix:
2 2
Enter the elements of second matrix:
1 2
3 4
product of the matrix:
15      22
23      34
```






 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE3MjkwNTU4MSwxODMwMzc3MjE4LDc4MT
QzMDgzLC0xMTUzNjY3NDI3LDE3NTU3NTYyMzgsODM5MTA0ODUs
NTcyNzQ2ODAzLDE2ODg3MzMwMjUsLTExNTgzOTQ4MDEsLTE3OT
cyNTcyNDUsLTUxNjczOTY0OCwtMzYyMjc4NzQyLC0xOTY2Njg4
MDgzLDE0MzM4MDA5MjgsNzAzNzQ5OTI5XX0=
-->
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk3ODg1MjY3MiwtMTgzNjQwNzAwMl19
-->