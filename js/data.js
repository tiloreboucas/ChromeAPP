var now = new Date();  

mydate = new Date(); 
myday = mydate.getDay(); 
mymonth = mydate.getMonth(); 
myweekday= mydate.getDate(); 
weekday= myweekday; 
myyear= mydate.getFullYear(); 
year = myyear

if(myday == 0) 
day = " Domingo, " 

else if(myday == 1) 
day = " Segunda, " 

else if(myday == 2) 
day = " Terça, " 

else if(myday == 3) 
day = " Quarta, " 

else if(myday == 4) 
day = " Quinta, " 

else if(myday == 5) 
day = " Sexta, " 

else if(myday == 6) 
day = " Sábado, " 

if(mymonth == 0) 
month = " de Janeiro de " 

else if(mymonth ==1) 
month = " de Fevereiro de " 

else if(mymonth ==2) 
month = " de Março de " 

else if(mymonth ==3) 
month = " de Abril de " 

else if(mymonth ==4) 
month = " de Maio de "

else if(mymonth ==5) 
month = " de Junho de " 

else if(mymonth ==6) 
month = " de Julho de " 

else if(mymonth ==7) 
month = " de Agosto de " 

else if(mymonth ==8) 
month = " de Setembro de " 

else if(mymonth ==9) 
month = " de Outubro de " 

else if(mymonth ==10) 
month = " de Novembro de " 

else if(mymonth ==11) 
month = " de Dezembro de " 

document.querySelector('.data').innerHTML = day + myweekday + month + year; 
