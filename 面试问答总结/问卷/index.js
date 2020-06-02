let regChar = '^[A-Za-z\u4e00-\u9fa5/\s]+$'
//中英文校验
let testChar = new RegExp(regChar);
let parent = document.getElementById('question');
parent.addEventListener('input', function () {
    var arr = document.getElementsByClassName('questionVal');
    for (const key in arr) {
        if (arr[key].value !== '' && arr[key].value !== undefined)
            arr[key].value.search(testChar) == -1 ? alert('当前输入不规范') : console.log('正常');
    }
})
let regNum = '^[0-9]*$'
//数字价格校验
let testNum = new RegExp(regNum);
let checkPrice = document.getElementById('price');
let checkSel = document.getElementById('checkSel');
checkPrice.onkeyup = function () {
    let flag = checkPrice.value
    if (checkSel.checked == true) 
        (alert('请取消下方选项再填写'),checkPrice.value = '')
    else 
        flag.search(testNum) != -1 && flag > 1 && flag < 99999 ? console.log('正常') : alert('输入不规范或超出范围')
}
function checkBox(check) {
    console.log(checkPrice.value);
    if (check.checked == true)
        checkPrice.value == '' ? console.log('选取正常') : (check.checked = false, alert('已填价格，无法选中'))
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    while (ev.target.hasChildNodes()) //当div下存在子节点时，删除替换
    {
        console.log(ev.target);
        if (ev.target.firstChild.id.toString().indexOf('dpi') != -1)
            document.getElementById('dpi').appendChild(ev.target.firstChild)
        else
            document.getElementById('size').appendChild(ev.target.firstChild)
    }
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}