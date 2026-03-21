let tasks = JSON.parse(localStorage.getItem("tasks")) || [] ;

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTasks(){

    const res = document.getElementById('result');
    res.innerHTML = "";

    tasks.forEach((task,index)=>{
        const note = document.createElement('div');

        const span = document.createElement('span')
        span.className = "noteText";
        span.textContent = task.text;

        const del = document.createElement('button')
        del.textContent = "delete";

        del.addEventListener('click',function(){
            tasks.splice(index,1);
            saveTasks();
            renderTasks();
        })

        const edit = document.createElement('button');
        edit.textContent = 'edit';
        
        edit.addEventListener('click',function(){
            const textarea = document.createElement('textarea')
            textarea.value = task.text;
            
            const savebtn = document.createElement("button");
            savebtn.textContent = "save";

            note.innerHTML = "";
            note.appendChild(textarea);
            note.appendChild(savebtn);

            savebtn.addEventListener('click',function(){
                task.text = textarea.value;
                saveTasks();
                renderTasks();
            })
        })

        note.appendChild(span);
        note.appendChild(edit)
        note.appendChild(del);

        res.appendChild(note);
        
    })


}

const button = document.getElementById("btn");

button.addEventListener('click',function(){
    const input = document.getElementById('input').value;

    if(input === ""){
        return;
    }

    tasks.push({
        text : input
    });

    saveTasks();
    renderTasks();
   
    document.getElementById("input").value = "";
})

renderTasks();