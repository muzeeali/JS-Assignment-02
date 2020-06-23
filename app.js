// CHAPTER # 21-25


// TASK #1


var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.slice(0)+lastname.slice(0);
document.write("Hey! "+fullname+" Welcome to our web...");


// TASK #2

var mobilemodel=prompt("Enter your Mobile model :");
var length=mobilemodel.length;
document.write("<br>My favorite phone is : "+mobilemodel);
document.write("<br>Length of string: "+length);



// TASK #3

var str="Pakistani";
document.write("<br>String: "+str);
document.write("<br>Index of 'n': "+ str.indexOf("n"))


// TASK #4

var str="Hello World";
document.write("<br>String: "+str);
document.write("<br>Index of  'l': "+ str.lastIndexOf("l"))


// TASK #5

var str="Pakistani";
document.write("<br>String: "+str);
document.write("<br>Charcter at index 3: "+ str.slice(3,4))

// TASK #6


var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.concat(lastname);
document.write("<br>Hey! "+fullname+" Welcome to our web...");


// TASK #7


var first='Hyderabad';
var second='Islam';
var replace=first.split('Hyder').join(second);
document.write("<br>City :"+first);
document.write("<br>After replacement: "+replace);


// TASK #8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep='and';
var repn='&'
var newm=message.split(rep).join(repn);
document.write("<br>Old Message: "+message)
document.write("<br>New Message: "+newm)

// TASK #9

var str='472';
var num=Number(str);
document.write("<br>Value: "+str)
document.write("<br>Type: "+typeof(str))
document.write("<br>Value: "+num)
document.write("<br>Type: "+typeof(num))

// TASK #10

var user=prompt("Enter value: ");
document.write("<br>User Value: "+user);
document.write("<br>Upper case: "+ user.toUpperCase())


// TASK #11

var useri=prompt("Enter value: ");
document.write("<br>User Value: "+useri);
var flet=useri.slice(0,1);
document.write("<br>Title case: "+ useri.split(flet).join(flet.toUpperCase()));


// TASK #12

var num = 35.36 ;
var str=num.toString();
var str1=str.replace('.','')
document.write("<br>Number: "+num);
document.write("<br>Result: "+ str1)


// TASK #13

var useri=prompt("Enter value: ");
if(useri.match('@')||useri.match(',')||useri.match('.')||useri.match('!'))
alert("Please enter a valid user name");

// TASK #14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var useri=prompt("Hey! Welcome to Zee bakery... What do you want to order: ");
var usero=useri.toLowerCase();
if(usero=="cake")
{
    document.write("<br>"+ useri+" is Available at index 0 in our Bakery")
}
else if(usero=="apple pie")
{
    document.write("<br>"+ useri+" is Available at index 1 in our Bakery")
}
else if(usero=="cookie")
{
    document.write("<br>"+ useri+" is Available at index 2 in our Bakery")
}else if(usero=="chips")
{
    document.write("<br>"+ useri+" is Available at index 3 in our Bakery")
}else if(usero=="patties")
{
    document.write("<br>"+ useri+" is Available at index 4 in our Bakery")
}
else 
{
    document.write("<br> We are Sorry!!! "+ useri+" is notavailable in our Bakery")
}


// TASK #15


var userp=prompt("Enter your password: ");
var userf=userp.slice(0,1);
var cond=/^[0-9a-zA-Z]+$/;
var cond2=/^[0-9]+$/;
document.write("<br>Entered Password: "+userp);
if(userp.match(cond)){
if(userf.match(cond2)){
    document.write("<br> Password cannot begin with number")
    document.write("<br> Please enter a valid password")
 }

else if(userp.length<6)
{
    document.write("<br> Password cannot be less than 6 characters")
    document.write("<br> Please enter a valid password")
}
else{
    document.write("<br>Your password is updated Successfully!!!")
}
}
else{
    document.write("<br> Special characters are not allowed")
    document.write("<br> Please enter a valid password")
}


// TASK #16


var university = "University of Karachi";
var newuni = university.split("");
for(var i=0;i<newuni.length;i++)
{
    document.write("<br>"+newuni[i])
}


// TASK #17

var useri=prompt("Enter value: ");
var stlast=useri.charAt(useri.length-1)
document.write("<br>User input: "+useri)
document.write("<br>Last charcter of input: "+stlast)


// TASK #18

var para="the quick brown fox jumps over the lazy dog"
document.write("<br>Text: "+para)
var split=para.split(" ")
var count =0;
for(var i=0;i<split.length;i++){
    if(split[i]=='the')
    count++;
}
document.write("<br>There are "+count+" occurance of word 'the'")


// CHAPTER # 26-30  


// TASK #1


var number=+prompt("Enter a positive number");
document.write("<br>Number: "+number);
document.write("<br>Round of value: "+Math.round(number));
document.write("<br>Round of value: "+Math.floor(number));
document.write("<br>Round of value: "+Math.ceil(number));

// TASK #2


var number=+prompt("Enter a negative number");
document.write("<br>Number: "+number);
document.write("<br>Round of value: "+Math.round(number));
document.write("<br>Round of value: "+Math.floor(number));
document.write("<br>Round of value: "+Math.ceil(number));

// TASK #3


var number=+prompt("Enter a number");
var absl= Math.abs(number);
document.write("<br>The absolute value of "+number+" is: "+absl);

// TASK #4


var num= Math.random()*6;
var dice=Math.ceil(num)
document.write("<br>Random dice value:  "+dice);

// TASK #5



var num= Math.random()*2;
var dice=Math.ceil(num)
if(dice===1)
{
    document.write("<br>"+dice);
    document.write("<br>Random coin value: Tails ");
}
else if(dice===2)
{
    document.write("<br>"+dice);
    document.write("<br>Random coin value: Heads ");
}


// TASK #6


var num= Math.random()*100;
var dice=Math.ceil(num)
document.write("<br>Random number between 1 and 100:  "+dice);


// TASK #7


var number=prompt("Enter your weight: ");
var absl= parseFloat(number);
document.write("<br>Your weight is  "+number);


// TASK #8


var number=+prompt("Enter a number between 1 and 10: ");
var num= Math.random()*10;
var roun=Math.ceil(num)
if(number===roun){
    alert("Congratulations!!!")
}
else{
    alert("Try Again!!!")
}



// CHAPTER # 31-34


// TASK #1


document.write(new Date());

// TASK #2

var date= new Date();
var mon= date.getMonth();
var month = ["Januray", "Feburary", "March", "April", "May","June","July","August","September","October","November","December"];
document.write("<br>Current Month: "+month[mon]);

// TASK #3

var date= new Date();
var mon= date.getDay();
var month = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
document.write("<br>Today is: "+month[mon]);



// TASK #4

var date= new Date();
var mon= date.getDay();
if(mon==0||mon==6){
    document.write("<br>It,s is Fun day");
}



// TASK #5

var date= new Date();
var mon= date.getDate();
if(mon<=15){
    document.write("<br>First fifteen days of the month");
}
else {
    document.write("<br>Last days of the month");
}


// TASK #6

var date= new Date();
var mon= date.getTime();
document.write("<br>Current date: "+date);
document.write("<br>Elapsed milliseconds since january 1,1970: "+mon);
document.write("<br>Elapsed minuites since january 1,1970: "+mon/(1000*60));


// TASK #7

var date= new Date();
var mon= date.getHours();
if(mon<=12){
    document.write("<br>Its AM");
}
else {
    document.write("<br>Its PM");
}


// TASK #8


var laterDate=new Date();
laterDate.setMonth(11);
laterDate.setDate(31);
document.write("<br>Later date: "+laterDate);

// TASK #9


var laterDate=new Date();
laterDate.setMonth(3);
laterDate.setDate(24);
var mon= laterDate.getTime();
var currentDate=new Date();
var currentDay=currentDate.getTime();
var newd=currentDay-laterDate;
document.write("<br>"+newd/(1000*60*60*24)+" Days have passed since 1st Ramadan, 2020 ");


// TASK #10


var laterDate=new Date();
laterDate.setFullYear(2015,0,1)
var mon= laterDate.getTime();
var currentDate=new Date();
var currentDay=currentDate.getTime();
var newd=currentDay-laterDate;
document.write("<br>On reference date: "+currentDate)
document.write("<br>"+newd+" Seconds had passed since beginning of 2015 ");


// TASK #11


var laterDate=new Date();
laterDate.setHours(laterDate.getHours()-1)
var currentDate=new Date();
document.write("<br>Current date: "+currentDate)
document.write("<br>1 hour ago, it was: "+laterDate);


// TASK #12

var laterDate=new Date();
laterDate.setFullYear(laterDate.getFullYear()-100)
var currentDate=new Date();
document.write("<br>Current date: "+currentDate)
document.write("<br>100 Years Back, it was: "+laterDate);

// TASK #13

var age=+prompt("Enter your age")
var laterDate=new Date();
laterDate.setFullYear(laterDate.getFullYear()-age)
document.write("<br>Your age is: "+age)
document.write("<br>Your birth year is: "+laterDate.getFullYear());


// TASK #14
var cn="Zeeshan";
var date= new Date();
var mon= date.getMonth();
var month = ["Januray", "Feburary", "March", "April", "May","June","July","August","September","October","November","December"];
var cmonth=month[mon]
var noUnit=210;
var cpUnit=20;
var payDue=noUnit*cpUnit;
var latePay=350;
var payLate=payDue+latePay;
document.write("<br><h1>K-Electric Bill</h1>");
document.write("<br>Customer Name: "+ cn);
document.write("<br>Month: "+cmonth);
document.write("<br>Number of Units: "+noUnit);
document.write("<br>Charges per unit: "+cpUnit+"<br>");
document.write("<br>Net Amount Payable (within Due Date): "+payDue);
document.write("<br>Late payment surcharges: "+latePay);
document.write("<br>Gross Amount Payable (after Due Date): "+payLate);




// CHAPTER # 35-38


// TASK #1

function date(){
    document.write(new Date());
}
date();


// TASK #2

function greet()
{var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.slice(0)+lastname.slice(0);
document.write("<br>Hey! "+fullname+" Welcome to our web...");}
greet();


// TASK #3

function sum( a,b)
{
    return a+b;
}
var firstnum=+prompt("Enter first number");
var lastnum=+prompt("Enter Second number");
var s=sum(firstnum,lastnum);
document.write("<br>Sum = "+s)


// TASK #4

function cal( a,o,b)
{
    if(o=='+')
    return a+b;
   else if(o=='-')
    return a-b;
    else if(o=='*')
    return a*b;
    else if(o=='/')
    return a/b;
    else if(o=='%')
    return a%b;
    
    
}
var firstnum=+prompt("Enter first number");
var op=prompt("Enter operator");
var lastnum=+prompt("Enter Second number");
var s=cal(firstnum,op,lastnum);
document.write(firstnum+" "+op+" "+lastnum+" = "+s)


// TASK #5

function sqr( a)
{
    return a*a;
}
var num=+prompt("Enter a number");
var s=sqr(num);
document.write("<br>Square of "+num+" = "+s)


// TASK #6

function fact( a)
{ 
    var b=1
    for (var i=1;i<=a;i++)
    {
    b=b*i
    }
    return b ;
}
var num=+prompt("Enter a number");
var s=fact(num);
document.write("<br>Factorial of "+num+" = "+s)


// TASK #7

function count( a,b)
{
for(var i=a;i<=b;i++)
    document.write("<br>"+i)   
}
var firstnum=+prompt("Enter start number");
var lastnum=+prompt("Enter end number");
count(firstnum,lastnum);


// TASK #8

function hypt( a,b)
{
var hyp=(a*a)+(b*b)
var fhyp;
document.write("<br>Hypotenuse = "+hyp)
function sqr(){
    fhyp= hyp*hyp
   
}
sqr();
return fhyp 
}
var firstnum=+prompt("Enter base");
var lastnum=+prompt("Enter perpendicular");
var ans=hypt(firstnum,lastnum);
document.write("<br>Hypotenuse Square = "+ans)


// TASK #9

function area(a,b){
    return a*b
}
var width=+prompt("Enter Width ")
var height=+prompt("Enter Height ")
var ans=area(width,height)
document.write("<br>Area by variables = "+ans)
document.write("<br>Area by value = "+area(2,3))


// TASK #10

function palin(arr)
{
 var arrLow=arr.toLowerCase();
var arrSplit=arrLow.split('');
var rev=arrSplit.reverse();
var revv=rev.join('')
if(revv===arrLow)
document.write(arr+" is palindrome")
else{
document.write(arr+" is not palindrome")
}}
var str=prompt("Enter a word")
palin(str)



// TASK #11

function conv(arr)
{
    return arr.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});
}
var str='the quick brown fox'
document.write(conv(str))



// TASK #12

function longestW(arr)
{
var longw=str.split(' ').sort(function(a,b){return b.length-a.length;});
return longw[0]
}
var str='Web Development Tutorial'
document.write(longestW(str))


// TASK #13

function findword(arr,word)
{
arr+='';
word+='';
word = word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
return (arr.match(new RegExp(word,'gi'))||[]).length
}
var str=prompt("Enter Word")
var ocr=prompt("Enter Charcter")

document.write(findword(str,ocr))


// TASK #14

function calcCircumference(radius){
    var pi=3.145
    var circum=2*pi*radius;
    document.write("<br>The circumference is "+circum)
}
function calcArea(radius){
    var pi=3.145
    var area=pi*radius*radius;
    document.write("<br>The area is "+area)
}
var rad=+prompt ("Enter Radius")
calcCircumference(rad);
calcArea(rad)