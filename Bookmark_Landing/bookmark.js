let bookmarks = [];
function addBookmark(url) {
    let content = document.getElementById('content');
    let div1 = document.createElement('div');
    const bId = 'bookmark-' + bookmarks.length;
    div1.className = 'display';
    div1.innerHTML = `<a href="${url}" id="${bId}">${url}</a>
                <div class="btn-display">
                    <button type="button" style="background-color: rgb(102, 102, 223); " id="edit" onclick="edit_Bookmark('${bId}')">Edit</button>
                    <button type="button" style="background-color: rgb(204, 59, 59);" id="delete" onclick="delete_Bookmark('${bId}')">Delete</button>
                </div>`
    bookmarks.push({ id: bId, url: url });
    content.appendChild(div1);
}

function deleteAllBookMarks() {
    let display = document.querySelectorAll('.display');
    display.forEach((d) => d.remove());
    bookmarks = [];
}

function edit_Bookmark(bid) {
    let bookmark = bookmarks.find(b => b.id === bid);
    if (bookmark) {
        let newUrl = prompt("Edit URL:", bookmark.url);
        if (newUrl) {
            bookmark.url = newUrl;
            let link = document.getElementById(bid);
            link.href = newUrl;
            link.textContent = newUrl;
        }
    }
}

function delete_Bookmark(bid) {
    let bookmarkIndex = bookmarks.find((e) => e.id == bid);
    if (bookmarkIndex !== -1) {
        bookmarks.splice(bookmarkIndex, 1);
        let link = document.getElementById(bid);
        if (link) {
            link.closest('.display').remove();
        }
    }
}

let add = document.getElementById('add');
add.addEventListener("click", (e) => {
    e.preventDefault();
    let url = document.getElementById('urltext');
    console.log(url);
    addBookmark(url.value);
    url.value = '';
})

let deleteall = document.getElementById('deleteall');
deleteall.addEventListener("click", (e) => {
    e.preventDefault();
    deleteAllBookMarks();
})