function buildPost(json){
    const postContainer = document.createElement('div');
    postContainer.className = 'postcontainer';
    const postHeading = document.createElement('div');

    postHeading.className = 'post heading';

    const pfpImage = document.createElement('img');
    pfpImage.className = 'pfp';
    pfpImage.src = json.user_picture;
    pfpImage.onerror = function() {
        // If the image fails to load, set the source to the default image
        pfpImage.src = "res/images/user.png";
      };
    pfpImage.alt = 'pfp';
    
    const usernamePostCreator = document.createElement('h4');
    usernamePostCreator.className = 'username';
    usernamePostCreator.textContent = json.username;

    const dateParagraph = document.createElement('p');
    dateParagraph.className = 'date';
    // Convert the create_time to a more readable format if necessary
    const createDate = new Date(json.create_time);
    dateParagraph.textContent = createDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    postHeading.appendChild(pfpImage);
    postHeading.appendChild(usernamePostCreator);
    postHeading.appendChild(dateParagraph);

    const postContent = document.createElement('div');
    postContent.className = 'post content';

    const contentParagraph = document.createElement('p');
    contentParagraph.textContent = json.content;

    postContent.appendChild(contentParagraph);

    if (json.image_url) {
        const contentImage = document.createElement('img');
        contentImage.src = json.image_url;
        contentImage.alt = 'Post image';
        postContent.appendChild(contentImage);
    }

    const postFooter = document.createElement('div');
    postFooter.className = 'post footer';

    const thumbIcon = document.createElement('i');
    thumbIcon.className = 'em em---1';
    thumbIcon.setAttribute('aria-role', 'presentation');
    thumbIcon.setAttribute('aria-label', 'THUMBS UP SIGN');
    postFooter.appendChild(thumbIcon);

    postContainer.appendChild(postHeading);
    postContainer.appendChild(postContent);
    postContainer.appendChild(postFooter);
    return postContainer
}

window.onload = function() {
    //fetch("https://api.myjson.online/v1/records/4107c36e-fcea-483b-8344-0b33c49cd4e7")
    fetch("res/json/posts.json")
        .then(response => response.json())
        .then(json => {
            const reversedJson = json.reverse();
            console.log(reversedJson)
            for (let post of reversedJson) {//json.data for online json
                console.log(post)
                const postElement = buildPost(post)
                const centerColumn = document.querySelector('.column.center')
                centerColumn.appendChild(postElement)
            }
        })
        .catch(error => console.log('error', error));
}

