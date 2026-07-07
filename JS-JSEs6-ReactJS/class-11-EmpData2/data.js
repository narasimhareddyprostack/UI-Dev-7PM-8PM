let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priya",esal:65000},
    {eid:104,ename:"Modi",esal:75000},
    {eid:105,ename:"Amith",esal:85000}
]

function display_Employees(){
  let rows="";
  for (const emp of employees) {
    rows+=`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
               </tr>`;
  }
   document.getElementsByTagName('tbody')[0].innerHTML=rows;
   //document.getElementsByTagName('tbody')[0].innerHTML="GE"
   
}