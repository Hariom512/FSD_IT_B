const btn1 = document.getElementById("addpara");
btn1.addEventListener("click", () => {
    const para = document.createElement("p");
    para.innerHTML = "This is a new paragraph";
    para.style.color = "yellow";
    para.style.backgroundColor = "black";
    document.body.append(para);
});
