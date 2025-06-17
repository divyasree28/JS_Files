let icons = {
    success: '<i class="bi bi-check2-circle"></i>',
    fail: '<i class="bi bi-exclamation-circle"></i>',
    info: '<i class="bi bi-info-circle"></i>',
    warn: '<i class="bi bi-exclamation-triangle"></i>'
};

function toastMsg(btntype, message) {
    let div1 = document.createElement('div');
    div1.classList.add("toast", `toast-${btntype}`)
    div1.innerHTML = ` <div style="display: flex;  padding: 2px 14px; gap: 8px;">
                <p>${icons[btntype]}</i></p>
                <p>${message}</p>
            </div>
            <div class="progress progress-${btntype}"></div>`
    let toastAlready = document.body.querySelector(".toast");
    if (toastAlready) {
        toastAlready.remove();
    }
    document.body.append(div1);
    setTimeout(() => {
        let toastAlready =document.body.querySelector(".toast");
        if (toastAlready) {
            toastAlready.remove();
        }
    },6000)
}

let success = document.getElementById('success');
let failed = document.getElementById('failed');
let info = document.getElementById('info');
let warn = document.getElementById('warn');

success.addEventListener("click", (e) => {
    e.preventDefault();
    toastMsg('success', 'Article submitted successfully.');
})

failed.addEventListener("click", (e) => {
    e.preventDefault();
    toastMsg('fail', 'Failed unexpected error');
})

info.addEventListener("click", (e) => {
    e.preventDefault();
    toastMsg('info', 'Do POTD and Earn Coins');
})

warn.addEventListener("click", (e) => {
    e.preventDefault();
    toastMsg('warn', '!warning! server error');
})