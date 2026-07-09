let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priya",esal:65000},
    {eid:104,ename:"Modi",esal:75000},
    {eid:105,ename:"Amith",esal:85000}
]
//Iterate array and display employee data in the form of HTML  Table

function dispaly_empData(){

    document.getElementsByTagName('tbody')[0].innerHTML="GE"
}
dispaly_empData()