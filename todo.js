let todoList=[
     {
      item:'Buy milk',
      dueDate:'2024/05/20'
     },
     {
      item:'Buy in market milk',
      dueDate:'2024/05/20'
     }
];
displyItems();
function addTodo(){
      let inputElement=document.querySelector('#todo-input');
      let dateElement=document.querySelector('#todo-date');
      let todoItem=inputElement.value;
      let dateItem=dateElement.value;
      todoList.push({item:todoItem,dueDate:dateItem});
      inputElement.value='';
      dateElement.value='';
      displyItems();
}
function displyItems(){
      let containerItem=document.querySelector('.container-text');
       
       let newHtml='';
      for(let i=0;i<todoList.length;i++){
            let item=todoList[i].item;
            let dueDate=todoList[i].dueDate;
            newHtml+=`
            
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="todo-del" onclick="todoList.splice(${i},1); displyItems(); ">Delete</button>
            

            `;
      }
      containerItem.innerHTML=newHtml;

}