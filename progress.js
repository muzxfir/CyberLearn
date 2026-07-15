function completeLesson(){

let progress = Number(localStorage.getItem("progress")) || 0;

progress = progress + 25;

if(progress > 100){
    progress = 100;
}

localStorage.setItem("progress", progress);

alert("Lesson Completed ✅ Progress: " + progress + "%");

location.reload();

}
