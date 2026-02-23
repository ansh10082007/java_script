const result = document.getElementById('result')

window.addEventListener('keydown',(e)=>{
    result.innerHTML = `
    <div class='color'>
    <table border>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
})
