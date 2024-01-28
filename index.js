let btn=document.querySelector(".helo");
let parent=document.querySelector(".parent");
btn.addEventListener("click",(e)=>{
    let current_target=e.currentTarget;
    // console.log( current_target)
    let input=document.querySelector(".input");
    let content=input.value;
    // console.log(input.value);
    let newlist=document.createElement("li");
    newlist.classList.add("list-group-item");
    newlist.classList.add("list-btn");
    newlist.innerHTML=` <h4>${content}</h4>  
    <div class="twobtn">   
       <button class="btn btn-success"  onclick="edit(this)"> edit</button>
       <button class="btn remove btn-danger" onclick="func(this)"> Remove</button>
    </div> `;
  
    parent.append(newlist);
    if(parent.children.length!=0)
    {
      newmessage.remove()
    }
  

})
// let currentremove=document.querySelector(".remove")
//  currentremove.addEventListener("click",(e)=>{
//      e.currentTarget.remove()

// })

let newmessage=document.createElement("p")

function func(curelemrnt){
    let n=curelemrnt.parentElement.parentElement;
    n.remove()
    if(parent.children.length==0)
    {
      
        newmessage.textContent="nothing here! plz put sumething";
        newmessage.style.color="white";
        parent.append(newmessage);

    }
  
  }
 
function edit(curelemrnt)
{
 
  if(curelemrnt.textContent == "ok"){
    curelemrnt.textContent="edit"
    curelemrnt.style.backgroundColor="green"
    let twobtn=curelemrnt.parentElement;
    console.log(twobtn);
    let head4=twobtn.previousElementSibling;
       let newheading=document.createElement("h3");
      // newinput.type="input";
      newheading.textContent=head4.value;
      //  console.log(newinput);
      //  let headvalue=head3.textContent;
      head4.remove();
      // newheading.value=headvalue;
      // newinput.style.width="100px";
       let listbtn=twobtn.parentElement;
       
      listbtn.prepend(newheading);


  }
  else{
    curelemrnt.textContent="ok"
    curelemrnt.style.backgroundColor="yellow"
    curelemrnt.style.color="black"
     let twobtn=curelemrnt.parentElement;
    console.log(twobtn);
    let head3=twobtn.previousElementSibling;
       let newinput=document.createElement("input");
      newinput.type="input";
      newinput.className="form-control input";
       console.log(newinput);
       let headvalue=head3.textContent;
      head3.remove();
      newinput.value=headvalue;
      newinput.style.width="100px";
       let listbtn=twobtn.parentElement;
      listbtn.prepend(newinput);

  }


}