export const updateTitle = (title) => {
    document.getElementById(idString).textContent = "Title: " + title;
};

const updateAuthors = (authors, idStringAuthor) => {
    if (authors) {
        document.getElementById(idStringAuthor).textContent =
            "Authors: " + authors;
    } else {
        document.getElementById(idStringAuthor).textContent =
            "Somehow, there were no authors: ";
    }
};

export const updateImage = (image, imageString) => {
    if (image) {
        if (image.smallThumbnail) {
            document.getElementById(imageString).src = image.smallThumbnail;
        }
    } else {
        document.getElementById(imageString).src = "./no-image.png";
    }
};

export const updateDesc = (desc, idStringDescription) => {
    if (desc) {
        let catDesc = desc.slice(0, 111) + "...";
        document.getElementById(idStringDescription).textContent =
            "Description: " + catDesc; //results[i].description;
    } else {
        document.getElementById(idStringDescription).textContent =
            "No description available"; //results[i].description;
    }
};

export const updateDOM = (i, bookInfo) => {
    let idString = "";
    let idStringAuthor = "";
    let idStringDescription = "";
    let imageString = "image";

    switch (i) {
        case 0: {
            (idString = "result0"), (imageString = "image0");
            break;
        }
        case 1: {
            (idString = "result1"), (imageString = "image1");
            break;
        }
        case 2: {
            (idString = "result2"), (imageString = "image2");
            break;
        }
        case 3: {
            (idString = "result3"), (imageString = "image3");
            break;
        }
        case 4: {
            (idString = "result4"), (imageString = "image4");
            break;
        }
        case 5: {
            (idString = "result5"), (imageString = "image5");
            break;
        }
        case 6: {
            (idString = "result6"), (imageString = "image6");
            break;
        }
        case 7: {
            (idString = "result7"), (imageString = "image7");
            break;
        }
        case 8: {
            (idString = "result8"), (imageString = "image8");
            break;
        }
        case 9: {
            (idString = "result9"), (imageString = "image9");
            break;
        }
    }
    idStringAuthor = idString + "__author";
    idStringDescription = idString + "__description";

    document.getElementById(idString).textContent = "Title: " + bookInfo.title;

    // Authors
    updateAuthors(bookInfo.authors, idStringAuthor);

    // Description
    updateDesc(bookInfo.description, idStringDescription);

    // image
    updateImage(bookInfo.imageLinks, imageString);
};


export default updateAuthors;
