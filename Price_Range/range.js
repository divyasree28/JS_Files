function rangemin_changed(inputtype) {
    let min_range=document.querySelector('.min-range');
    let min=document.getElementById('min');
    if(inputtype=='slide') {min.value=min_range.value;}
    else {min_range.value=min.value;}
}

function rangemax_changed(inputtype) {
    let max_range=document.querySelector('.max-range');
    let max=document.querySelector('#max');
    if(inputtype=='slide') {max.value=max_range.value;}
    else {max_range.value=max.value;}
}