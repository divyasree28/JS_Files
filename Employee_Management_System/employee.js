const Employee_info = [

];

let main = document.getElementById('main');
let add_popup = document.querySelector('.add_popup');
let add_emp = document.getElementById('add');
let submit = document.getElementById('submit');
let add_item = document.getElementById('add_item');


add_emp.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    add_popup.style.display = 'flex';
})

submit.addEventListener("click", (e) => {

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    Employee_info.push(
        {
            "name": fname + " " + lname,
            "address": document.getElementById('address').value,
            "email": document.getElementById('email').value,
            "mobile": document.getElementById('contact').value,
            "dob": document.getElementById('date').value
        }
    )
    //console.log(Employee_info);
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('date').value = '';
    add_popup.style.display = 'none';
    updateList();
})

function updateList() {
    let updated_item = Employee_info[Employee_info.length - 1];
    let empid = `Employee-${Employee_info.length}`;
    let li = document.createElement('li');
    li.style.listStyleType = 'none';
    li.id = `${empid}`;
    li.innerHTML = `<div class="list_design" onclick="display_item('${updated_item.name}')">
                            <p>${updated_item.name}</p>
                            <button class="list_btn" onclick="deleteEmployee('${empid}','${updated_item.name}')"><i class="bi bi-x-lg"></i></button>
                        </div>`
    add_item.appendChild(li);
}

function deleteEmployee(id, name) {
    let item = document.getElementById(id);
    item.remove();
    let del_item = Employee_info.findIndex((emp) => emp.name === name);
    Employee_info.splice(del_item, 1)
    console.log(Employee_info);
}


function display_item(item_name) {
    let item = Employee_info.find((emp) => emp.name === item_name);
    if (item) {
        document.getElementById('dname').textContent = item.name;
        document.getElementById('daddress').textContent = item.address;
        document.getElementById('demail').textContent = item.email;
        document.getElementById('dmobile').textContent = item.mobile;
        document.getElementById('ddate').textContent = item.dob;
        document.querySelector('img').src = "/images/sample_img1.png";
    }

}