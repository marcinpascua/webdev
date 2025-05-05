document.querySelectorAll('.image-container img').forEach(image=>{
    image.onclick = () =>{
        document.querySelector('.popup1').style.display='block';
        document.querySelector('.popup1 img').src= image.getAttribute('src');
    }
});

document.querySelector('.popup1 span').onclick = () =>{
    document.querySelector('.popup1').style.display='none';
}

document.querySelectorAll('.image-container2 img').forEach(image=>{
    image.onclick = () =>{
        document.querySelector('.popup1').style.display='block';
        document.querySelector('.popup1 img').src= image.getAttribute('src');
    }
});

document.querySelector('.popup1 span').onclick = () =>{
    document.querySelector('.popup1').style.display='none';
}
