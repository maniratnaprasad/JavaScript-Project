const input = document.querySelector(".row input");
const listContainer = document.querySelector("#list-container");


function addTask(){
    if(input.value=="")
        alert("enter any task");
    else{
        let li = document.createElement('li');
        li.innerHTML=input.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML='\u00d7'
        li.appendChild(span);
        
    }
    input.value="";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName =='LI')
        e.target.classList.toggle("Clicked");
});

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName == 'SPAN')
        e.target.parentElement.remove();
})