const button = document.getElementById('add');

button.addEventListener('click',function(e){
    e.preventDefault();
    const input = document.getElementById('input').value;
    
    const li = document.createElement('li');

    const check = document.createElement('input');
    check.type = "checkbox";

    const span = document.createElement('span');
    span.textContent = `${input}`;


    //create del button
    const del = document.createElement('button');
    del.textContent = 'delete';

    del.addEventListener('click',function(){
        li.remove();
    })

    li.appendChild(check)
    li.appendChild(span)
    li.appendChild(del);

    document.getElementById('list').appendChild(li);
})

