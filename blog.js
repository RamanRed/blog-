
const  container = document.getElementById("Add-blog");
container.addEventListener("submit",  (e)=>{
    e.preventDefault();

    var author = document.getElementById("Author").value;
    var Idea = document.getElementById("Idea").value;
    var Link = document.getElementById("Link").value;
    var Description = document.getElementById("Description").value;
    const he2 = document.createElement("h2"); 
    const p2 = document.createElement("p"); 
    const img2 = document.createElement("img"); 
    const descrip = document.createElement("p");
    he2.innerHTML = author; 
    p2.innerHTML = Idea; 
    
    descrip.innerHTML = Description;
    const btn1 = document.createElement("button"); 
    const btn2 = document.createElement("button"); 
    btn1.innerHTML = "*";
    btn2.innerHTML = "Edit";
    const detail = document.createElement("details");
    const summary = document.createElement("summary");
    const innnercontainer = document.createElement("div");

    const input = document.getElementById("fileUpload");
    if (input.length == 0){
        img2.src = Link;    
    } else {
        img2.src = input.value
    }
    innnercontainer.appendChild(he2);
    summary.appendChild(p2);
    detail.appendChild(summary);
    innnercontainer.appendChild(img2);
    detail.appendChild(descrip);
    detail.appendChild(btn1);
    detail.appendChild(btn2);
    innnercontainer.appendChild(detail);
    document.getElementById("blog").appendChild(innnercontainer);
    
});
