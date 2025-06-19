let ename=document.getElementById('name');
let amount=document.getElementById('price');
let category=document.getElementById('category');
let prodate=document.getElementById('prodate');
let submit=document.getElementById('submit');
let expense_table=document.getElementById('expense_table');
let edit_name=document.getElementById('edit_name');
let edit_price=document.getElementById('edit_price');
let edit_category=document.getElementById('edit_category');
let edit_prodate=document.getElementById('edit_prodate');
let edit_btn=document.getElementById('edit_btn');
let expenses=[],currentEditId=0,total_expense=0;

function addExpenses() {
    let expense_arr=[ename.value,amount.value,category.value,prodate.value];
    //console.log(arr);
    total_expense+=Number(amount.value);
    let row_id=`row-${expenses.length}`;
    let row=document.createElement('tr');
    expense_arr.forEach((exp)=>{
        let tdata=document.createElement('td');
        tdata.textContent=exp;
        row.appendChild(tdata);
    })
    let tdata=document.createElement('td');
    tdata.innerHTML=`<button class="edit" onclick="edit_Expense('${row_id}')">Edit</button> <button class="delete" onclick="delete_Expense('${row_id}')">Delete</button>`
    row.appendChild(tdata);
    row.id=`${row_id}`;
    expense_table.appendChild(row);
    expenses.push({row_id:row_id,expense:expense_arr});
    //console.log("expense");
    ename.value='';amount.value='',category.value='',prodate.value='';
    updateExpense();
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    addExpenses();
})

function edit_Expense(id) {
    currentEditId=id;
    let edata=expenses.find((e)=>e.row_id===id);
    console.log(edata.expense[1]);
    total_expense-=Number(edata.expense[1]);
    document.body.style.backgroundColor= "#9EA9B1";
    document.getElementById('form1').style.display='none';
    document.getElementById('popup').style.display='block';
    [edit_name, edit_price, edit_category, edit_prodate].forEach((input, idx) => {
        input.value = edata.expense[idx];
      });
}

edit_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let updated_arr=[edit_name.value,edit_price.value,edit_category.value,edit_prodate.value];
    total_expense+=Number(edit_price.value);
    let edata=expenses.find((e)=>e.row_id===currentEditId);
    if(edata) {edata.expense=updated_arr;}
    let edit_row=document.getElementById(currentEditId);
    updated_arr.forEach((e,idx)=>{
        edit_row.cells[idx].textContent=e;
    });
    console.log(edit_row);
    document.getElementById('popup').style.display = 'none';
    document.getElementById('form1').style.display = 'block';
    document.body.style.backgroundColor = '';
    currentEditId = null;
    ename.value='';amount.value='',category.value='',prodate.value='';
   updateExpense();
})


function delete_Expense(id) {
    let row=document.getElementById(id);
    let edata=expenses.find((e)=>e.row_id===id);
    total_expense-=Number(edata.expense[1]);
    expenses.splice(edata,1);
    row.remove();
    console.log(expenses);
    updateExpense();
}


function filterTable() {
    let rows=document.querySelectorAll('tr');
   
    let selected=document.getElementById('filter_category');
    
    if(selected.value!=='All') {
        rows.forEach((r,idx)=>{
        
            if(idx>=1 && r.cells[2].textContent!==selected.value) {
                console.log(r.cells[2].textContent);
                r.style.display='none';
            }
            else{
                r.style.display="";
            }
        })
    }
    else {
        rows.forEach((r)=>r.style.display="");
    }
}

function updateExpense() {
    document.getElementById('total').textContent=`Total: $${total_expense}`;
}