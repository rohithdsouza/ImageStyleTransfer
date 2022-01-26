const image_input = document.querySelector("#image_imput");
var uploaded_image = "";

imageUpload.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#imagePreview").style.backgroundImage = `url(${uploaded_image})`;
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
    
    });
    reader.readAsDataURL(this.files[0]);
})

function buttonClicked(){
    elBtn = document.querySelector('.btn')
    elBtn.classList.toggle('click')
    
  }
