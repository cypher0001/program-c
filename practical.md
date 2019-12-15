
  
<center><img src="https://i.imgur.com/EZtECRw.png"></center>



<h3><b>Guru Nanak Dev Engineering College
    ESC-18104/18105 Programming for Problem Solving</b>
  
  
     
    Name- Gurkirat singh
    Branch-InformationTechnology
    Section - A2 
    Roll Number - 1921033
    


## 1:Write a program to check whether a no. is even/odd

```
//To check whether a no. is even/odd
#include<stdio.h>
int main()
{                     
 int a,b;
printf("enter the no.=");
scanf("%d",&a);
b=a%2;
if(b==0)
{
printf("entered no. is even\n");
}
else
{
printf("entered no. is odd\n");
}
return 0;

}
```
**OUTPUT:**
``` 
 enter the no.=5
 entered no. is odd

```
## 2:Write a program to print only even numbers table from given range:

```
 
#include<stdio.h>
  int main()
{
int a,b,c,d;
printf("enter the starting and ending no.");
scanf("%d %d",&a,&b);
for(c=a;c<=b;c++)
{
if(c%2==0)
{
for(d=1;d<=10;d++)
{
printf("\n %dX%d=%d",c,d,c*d);
}
}
}
return 0;
}
```
**OUTPUT:**
```
enter the starting and ending no.2
5

 2X1=2
 2X2=4
 2X3=6
 2X4=8
 2X5=10
 2X6=12
 2X7=14
 2X8=16
 2X9=18
 2X10=20
 4X1=4
 4X2=8
 4X3=12
 4X4=16
 4X5=20
 4X6=24
 4X7=28
 4X8=32
 4X9=36
 4X10=40
 ```

## 3:Write a program to find sum of two numbers
```

     
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
## 4:Sum and average of numbers
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
  ## 5:To find number is even or odd
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
Enter a number:4
The  number is even
```
***OR***
```
Enter a number:7
The number is odd
```
## 6:Write a program to add two matrices
```
   #include <stdio.h>

    int main()
    {
       int m, n, c, d, first[10][10], second[10][10], sum[10][10];

       printf("Enter the number of rows and columns of matrix\n");
       scanf("%d%d", &m, &n);
       printf("Enter the elements of first matrix\n");

       for (c = 0; c < m; c++)
          for (d = 0; d < n; d++)
             scanf("%d", &first[c][d]);

       printf("Enter the elements of second matrix\n");

       for (c = 0; c < m; c++)
          for (d = 0 ; d < n; d++)
             scanf("%d", &second[c][d]);

       printf("Sum of entered matrices:-\n");
       
       for (c = 0; c < m; c++) {
          for (d = 0 ; d < n; d++) {
             sum[c][d] = first[c][d] + second[c][d];
             printf("%d\t", sum[c][d]);
          }
          printf("\n");
       }

       return 0;
    }

```
**OUTPUT**:
```
Enter the number of rows and columns of matrix
2
2
Enter the elements of first matrix
11
12
13
13
Enter the elements of second matrix
11
12
13
13
Sum of entered matrices:-
22      24
26      26
ls

```
## 7:Write a program to print given structure of face
```
   
#include<stdio.h>
int main()
{
puts("  xxxxxxxx  ");
puts("  ( ^  ^ )  ");
puts("  ( 0  0 )  ");
puts("  \\  |  /   ");
puts("   \\ - /    ");
puts("    \\_/     ");
}
```
**OUTPUT**:
```
  xxxxxxxx  
  ( ^  ^ )  
  ( 0  0 )  
  \  |  /   
   \ - /    
    \_/     

```
## 8:Write a program to find factorial of a number with recursion
```
#include<stdio.h>
int rec(int);
int main()
{
int a,fact;
printf("enter any number");
scanf("%d",&a);
fact=rec(a);
printf("factorial value=%d\n",fact);
return 0;
}
int rec(int x)
{
int f;
if(x==1)
return(1);
else
f=x*rec(x-1);
return(f);
}
```
**OUTPUT**:
```
enter any number3
factorial value=6
```
## 9:Write a program to check whether a number is positive or negative
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
**OUTPUT**:
```
enter any number =6
the number is positive

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
 
 ##  11 .To represent a table of user input 
 
 ```
  // To represent a table of user input  number
 #include<stdio.h>
 int main()
 {
    int i,j,k;
  printf("Table of:");
  scanf("%d",&j);

   for(i=0;i<=10;i++)
   printf("%d x %d = %d\n",j,i,j*i);

return 0;
}
```
**OUTPUT**:
```Table of:15
15 x 0 = 0
15 x 1 = 15
15 x 2 = 30
15 x 3 = 45
15 x 4 = 60
15 x 5 = 75
15 x 6 = 90
15 x 7 = 105
15 x 8 = 120
15 x 9 = 135
15 x 10 = 150
```
## 12:To convert Fahrehnite to Celcius
```
//to convert fahrehnite to celcius
#include<stdio.h>
int main(){
float f,c;
printf("Enter temp in fahrehnite :");
scanf("%f",&f);
c=((f-32)*5)/9;
printf("The celcius value is:%f\n",c);

return 0;
}
```
**OUTPUT**:
```
Enter temp in fahrehnite :450
The celcius value is:232.222229
```
## 13: To show the table range 
```

#include<stdio.h>
int main()
{
 int a,b,n;
 printf("table of:");
 scanf("%d",&a);
 printf("\n enter the starting value of range:");
 scanf("%d",&b);
 printf("\n enter the last value of range:");
 scanf("%d",&n);
 for(b;b<=n;b++)
 printf("%d x %d = %d\n",a,b,a*b);
 return 0;
 }
```
**OUTPUT**:
```
table of:5

 enter the starting value of range:20

 enter the last value of range:30
5 x 20 = 100
5 x 21 = 105
5 x 22 = 110
5 x 23 = 115
5 x 24 = 120
5 x 25 = 125
5 x 26 = 130
5 x 27 = 135
5 x 28 = 140
5 x 29 = 145
5 x 30 = 150
```
## 14:Write a program to find factorial of a number without recursion
```
#include<stdio.h>
int main()
{
int c,n,fact=1;
printf("enter a number to calculate factorial ;\n");
scanf("%d",&n);
for(c=1;c<=n;c++)
fact=fact*c;
printf("factorial of %d=%d\n",n,fact);
return 0;
}
```
**OUTPUT**:
```
enter a number to calculate factorial ;
3
factorial of 3=6

```
## 15: To show result of operands
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
## 16:Write a program to print structe of calculator
```

#include<stdio.h>
int main()
{  
puts(" _______________");
puts("|               |");
puts("|_______________|");
puts("| 1 | 2 | 3 |   |");
puts("|___|___|___|   |");
puts("| 4 | 5 | 6 | + |");
puts("|___|___|___|___|");
puts("| 7 | 8 | 9 | - |");
puts("|___|___|___|___|");
puts("|     0     | * |");
puts("|___________|___|");
}
```
**OUTPUT**:
``` 
_______________
|               |
|_______________|
| 1 | 2 | 3 |   |
|___|___|___|   |
| 4 | 5 | 6 | + |
|___|___|___|___|
| 7 | 8 | 9 | - |
|___|___|___|___|
|     0     | * |
|___________|___|
```
## 17:To convert fahrehnite to celcius and kelvin
```
  // To covert  fahrenheit to celsius and kelvin
                 #include<stdio.h>
 int main()
 {
  float a,b,c;
  printf("Enter a fahrenheit value:");
  scanf("%f",&a);
b=((a-32.00)*5.00)/9.00;
 printf("celsius value is:%.2f\n",b);

 printf("kelvin value is:%.2f\n",c=b+273.15);
  return 0;} 
```
**OUTPUT**:
```
Enter a fahrenheit value:450
celsius value is:232.22
kelvin value is:505.37
```

## 18:Write a program to print values of an array
```
#include<stdio.h>
int main()
{
int n[10],i,j;
for(i=0;i<10;i++)
n[i]=i+100;


for(j=0;j<10;j++)
printf("element[%d]=%d\n",j,n[j]);

return 0;
}

 ```
 **OUTPUT**:
 ```
element[0]=100
element[1]=101
element[2]=102
element[3]=103
element[4]=104
element[5]=105
element[6]=106
element[7]=107
element[8]=108
element[9]=109

```
 
 ## 19:Write a program to swap two numbers
 ```
#include<stdio.h>
int swap(int a,int b);

int main()
{
int a,b;
printf("please enter 2 integer values a and b:\n");
scanf("%d %d",&a,&b);
swap(a,b);

}
int swap(int a,int b)
{
//b=a;

a=a+b;
//a=b;
b=a-b;
a=a-b;
printf("value of a is:%d\n",a);
printf("value of b is:%d\n",b);
}
```
**OUTPUT**:
```
please enter 2 integer values a and b:
5
6
value of a is:6
value of b is:5

```
 ## 20: Write a program to show stars pattern 
 ```
#include<stdio.h>
int main()
{
puts("*");
puts("**");
puts("****");
puts("*****");
}
```
**OUTPUT**:
```
Enter the value upto pattern is shown:8
* 
** 
*** 
**** 

```



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MzY0MDcwMDJdfQ==
-->
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY3NjI0NzgwM119
-->