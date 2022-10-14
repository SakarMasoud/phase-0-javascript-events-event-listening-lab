function addingEventListener() {
    const bt1 = document.getElementById('button');
    bt1.addEventListener('click', clickAlert);
}
function clickAlert() {
    alert('I was clicked!');
}