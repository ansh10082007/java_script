let tasks = JSON.parse(localStorage.getItem("tasks")) || [] ;

function saveTasks() {
    console.log("saving",tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTasks(){

    const list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = task.done;

        //text
        const span = document.createElement("span");
        span.textContent = task.text;

        if(task.done){
            span.style.textDecoration = "line-through";
        }

        //delete button
        const del = document.createElement("button");
        del.textContent = "delete";

        //checkbox change
        check.addEventListener("change",function(){
            tasks[index].done = check.checked;

            saveTasks();
            renderTasks();
        });

        //delete logic
        del.addEventListener('click',function(){
            tasks.splice(index,1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(del);

        list.appendChild(li);

    })
}

//add button
const button = document.getElementById("add");

button.addEventListener("click",function(){
    const input = document.getElementById("input").value;

    if(input === ""){
        return;
    }

    tasks.push({
        text:input,
        done:false
    });

    saveTasks();
    renderTasks();

    document.getElementById("input").value = "";
})

//load when page starts
renderTasks();