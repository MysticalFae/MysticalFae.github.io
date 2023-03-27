
function saveDataToFile()
{
    var title = document.getElementById("title").value;
			
    var blobForTitle = new Blob([title], { type: "text/plain;charset=utf-8" });
    saveAs(blobForTitle, "bookLog.txt");
    console.log("worked?")
}