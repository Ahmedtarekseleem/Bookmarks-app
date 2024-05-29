

var BookmarkUrl = document.getElementById('BookmarkUrl')
var BookmarkName = document.getElementById('BookmarkName')
// var modal = document.getElementById('mode')
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".box-info");
let bookmarks = []
var objectIndex =0
let flag = false

if (localStorage.getItem('userdata') != null) {
    bookmarks = JSON.parse(localStorage.getItem('userdata'))
    // addProduct()
    DisplayUrl()

}

function addUrl() {
    if (Validation(BookmarkName) && Validation(BookmarkUrl)) {
        let url = {
            name: BookmarkName.value,
            url: BookmarkUrl.value
        }
        bookmarks.push(url)
        localStorage.setItem('userdata', JSON.stringify(bookmarks))
        // modal.classList.add('d-none')
        // mode.removeAttribute('id', 'exampleModalToggle');
        // modal.removeAttribute('id');
        DisplayUrl();
        cleaar();
        
        
    }
    else {
        // document.querySelector(".modal").addAttribute('id');
        // alert("hjs")
        // mode.setAttribute('id', 'exampleModalToggle');
        boxModal.classList.remove("d-none");
        // modal.add.remove('d-none')
        // document.getElementById('exampleModalToggle') = remove('d-none')
    }
}
function DisplayUrl() {
    let container = ""
    for (let i = 0; i < bookmarks.length; i++) {
        container +=
            `<tr>
                                <td>${i}</td>
                                <td>
                                
                                ${bookmarks[i].name}</td>
                                <td>

                                <a class="btn btn-visit" href="http://${bookmarks[i].url}" target="_blank" rel="noopener noreferrer"  ><i class="fa-solid fa-eye pe-2"></i>Vist</a>
                                </td>
                                <td>
                                <button class="btn btn-delete mb-1" onclick="deleteUrl(${i})"  ><i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
                                <button class="btn btn-success " onclick="updateUrl(${i})" >update</button>
                                </td>
                                </tr>
                                `
                                
                            }
                            document.getElementById('table').innerHTML = container
}
function cleaar() {
    BookmarkName.value = ""
    BookmarkUrl.value = ""
    BookmarkName.classList.remove('is-invalid', 'is-valid')
    BookmarkUrl.classList.remove('is-invalid', 'is-valid')
    
    

}

function deleteUrl(index) {
    bookmarks.splice(index, 1)
    localStorage.setItem('userdata', JSON.stringify(bookmarks))
    DisplayUrl()
    
    
}
function updateUrl(index){
    objectIndex =index
    BookmarkName.value=bookmarks[index].name
    BookmarkUrl.value=bookmarks[index].url
    // bt-a.classList.add('d-none')
    // bt-a.classList.add('d-none')
    // document.getElementById('btn-update').classList.remove('d-none')
}
function updatendex(){
    bookmarks[objectIndex].name=BookmarkName.value
    bookmarks[objectIndex].url=BookmarkUrl.value
    localStorage.setItem('userdata', JSON.stringify(bookmarks))
    DisplayUrl();
    cleaar();
    
}

function Validation(ele) {

    var Regex = {

        BookmarkName: /^\w{3,}(\s+\w+)*$/,
        BookmarkUrl: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,
    };

    if (Regex[ele.id].test(ele.value)) {
        ele.classList.add('is-valid');
        ele.classList.remove('is-invalid');
        // ele.nextElementSibling.classList.replace('d-block', 'd-none');
        return true
    }
    else {
        ele.classList.add('is-invalid');
        ele.classList.remove('is-valid');
        // ele.nextElementSibling.classList.replace('d-none', 'd-block');
        return false
    }
}

// function validateinput(inp) {
//     var validates = {
//         BookmarkName: /^\w{3,}(\s+\w+)*$/,
//         BookmarkUrl: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,

//     }


//     if (validates[inp.id].test(inp.value)) {
//         inp.classList.replace('is-invalid', 'is-valid')
//         flag = true
//         return true;
//     }
//     else {
//         inp.classList.add('is-invalid')
//         flag = false
//         return false;
//     }


// }
function closeModal() {
    boxModal.classList.add("d-none");
}



closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeModal();
    }
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("box-info")) {
        closeModal();
    }
});


function mydark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

new DataTable('#example', {
    layout: {
        topStart: {
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
        }
    }
});