const linkForm = document.getElementById('link-form');
const dataBucket = document.getElementById('data-bucket');

// Check if the link is valid
function checkLink(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

// Get the domain of the link
function getDomain(url) {
    const urlObject = new URL(url);
    return urlObject.hostname;
}

// Get platform info
function getPlatformInfo(url) {
    const domain = getDomain(url);

    let platformName = '';
    let platformIcon = '';

    switch(domain) {
        case 'www.udemy.com':
            platformName = 'Udemy';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Udemy_Logo_2018.png'; // Udemy logo URL
            break;
        case 'www.coursera.org':
            platformName = 'Coursera';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Coursera_logo.svg'; // Coursera logo URL
            break;
        case 'www.edx.org':
            platformName = 'edX';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/5/58/EdX_logo.svg'; // edX logo URL
            break;
        case 'www.linkedin.com':
            platformName = 'LinkedIn';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/LinkedIn_Logo_2013.svg'; // LinkedIn logo URL
            break;
        case 'github.com':
            platformName = 'GitHub';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'; // GitHub logo URL
            break;
        case 'leetcode.com':
            platformName = 'LeetCode';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/0/06/LeetCode_logo_2021.png'; // LeetCode logo URL
            break;
        case 'codeforces.com':
            platformName = 'Codeforces';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Codeforces_logo.svg/1024px-Codeforces_logo.svg.png'; // Codeforces logo URL
            break;
        case 'spoj.com':
            platformName = 'SPOJ';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/3/3d/SPOJ_logo.svg'; // SPOJ logo URL
            break;
        case 'hackerrank.com':
            platformName = 'HackerRank';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/6/68/HackerRank_logo.png'; // HackerRank logo URL
            break;
        case 'hackerearth.com':
            platformName = 'HackerEarth';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/HackerEarth_logo.svg'; // HackerEarth logo URL
            break;
        case 'www.geeksforgeeks.org':
            platformName = 'GeeksforGeeks';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/7/73/GeeksforGeeks_logo.png'; // GeeksforGeeks logo URL
            break;
        case 'twitter.com':
            platformName = 'Twitter';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg'; // Twitter logo URL
            break;
        case 'www.instagram.com':
            platformName = 'Instagram';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'; // Instagram logo URL
            break;
        case 'www.facebook.com':
            platformName = 'Facebook';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'; // Facebook logo URL
            break;
        case 'www.youtube.com':
            platformName = 'YouTube';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png'; // YouTube logo URL
            break;
        case 'www.pinterest.com':
            platformName = 'Pinterest';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pinterest_logo_2017.svg'; // Pinterest logo URL
            break;
        case 'www.snapchat.com':
            platformName = 'Snapchat';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/2/22/Snapchat_logo_2021.png'; // Snapchat logo URL
            break;
        case 'www.tiktok.com':
            platformName = 'TikTok';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo_2021.svg'; // TikTok logo URL
            break;
        case 'web.whatsapp.com':
            platformName = 'WhatsApp';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/6/60/WhatsApp.svg'; // WhatsApp logo URL
            break;
        case 'www.reddit.com':
            platformName = 'Reddit';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/87/Reddit_logo_and_wordmark.svg'; // Reddit logo URL
            break;
        case 'www.medium.com':
            platformName = 'Medium';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Medium_logo.svg'; // Medium logo URL
            break;
        case 'www.quora.com':
            platformName = 'Quora';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/87/Quora_Logo_2013.svg'; // Quora logo URL
            break;
        case 'www.spotify.com':
            platformName = 'Spotify';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Spotify_icon.svg'; // Spotify logo URL
            break;
        case 'www.tumblr.com':
            platformName = 'Tumblr';
            platformIcon = 'https://upload.wikimedia.org/wikipedia/commons/7/75/Tumblr_logo_2018.svg'; // Tumblr logo URL
            break;
        default:
            platformName = 'Unknown Platform';
            platformIcon = 'https://via.placeholder.com/150'; // Placeholder image for unknown platform
    }

    return {
        id: Date.now(),
        name: platformName,
        icon: platformIcon,
        url
    };
}


function saveToLocalStorage(data) {
    const existingData = JSON.parse(localStorage.getItem('websites')) || [];
    existingData.push(data);
    localStorage.setItem('websites', JSON.stringify(existingData));
}

function loadFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('websites')) || [];
    storedData.forEach(website => {
        displayWebsite(website);
    });
}


function removeFromLocalStorage(id) {
    let storedData = JSON.parse(localStorage.getItem('websites')) || [];
    storedData = storedData.filter(item => item.id !== id);
    localStorage.setItem('websites', JSON.stringify(storedData));
}



function displayWebsite(website) {
    const newListItem = document.createElement('li');
    newListItem.setAttribute('data-id', website.id);
    newListItem.innerHTML = `
        <img src="${website.icon}">
        <span><a href="${website.url}" target="_blank">${website.name}</a></span>
        <button class="remove-btn">Remove</button>
    `;

   
    newListItem.querySelector('.remove-btn').addEventListener('click', function () {
        removeFromLocalStorage(website.id);
        newListItem.remove(); 
    });

    dataBucket.appendChild(newListItem);
}


linkForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const inputLink = document.getElementById('name');
    const link = inputLink.value.trim();
    if (checkLink(link)) {
        const platformInfo = getPlatformInfo(link);
        displayWebsite(platformInfo); 
        saveToLocalStorage(platformInfo); 
        inputLink.value = ''; 
    } else {
        alert('Enter a valid link');
    }
});


document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
