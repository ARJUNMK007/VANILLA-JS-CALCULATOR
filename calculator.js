function buttonclick(value){
    document.getElementById("screen").value=document.getElementById("screen").value+value;
}
function btnclear()
{
    document.getElementById("screen").value=""
}
function sumof()
{
    var text=document.getElementById("screen").value
    var rs=eval(text)
    document.getElementById("screen").value=rs

}