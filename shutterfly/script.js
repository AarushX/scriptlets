const intro = document.getElementsByClassName("palette-image-thumbnail");
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "image file name here";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
let list = [];
for (i = 0; i < intro.length; i++) {
    let url = intro[i].src.replace("&rendersize=fit200x200", "&rendersize=fit2000x2000");
    list.push(url);
    downloadImage(url);
}

// Once again, just paste this in console. Link should be in a shutterfly project
// https://www.shutterfly.com/pb/#/?projectGuid=xxxxxx