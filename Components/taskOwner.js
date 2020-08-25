
let reset = document.querySelector('.reset')

function testJS() {
    let b = document.getElementById("myForm").getElementsByTagName("input")[0].value || document.getElementById("myForm").getElementsByTagName("textarea")[0].value,
        url = 'file:///D:/practice/TaskManager/tasks.html?title=&text=&task=' + encodeURIComponent(b);

    document.location.href = url
}

function loadContents() {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    document.getElementById('tasks').innerHTML = data.title + ' ' + data.text;
    document.getElementById('task').innerHTML =  data.task;
}

reset.addEventListener('click', () => {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('question').value = '';
})


