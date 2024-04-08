// Define an array of Taylor Swift songs
const songs = [
    { title: "Tim McGraw", album: "Debut" },
    { title: "Picture To Burn", album: "Debut" },
    { title: "Teardrops On My Guitar", album: "Debut" },
    { title: "A Place in this World", album: "Debut" },
    { title: "Cold As You", album: "Debut" },
    { title: "The Outside", album: "Debut" },
    { title: "Tied Together with a Smile", album: "Debut" },
    { title: "Stay Beautiful", album: "Debut" },
    { title: "Should've Said No", album: "Debut" },
    { title: "Mary's Song", album: "Debut" },
    { title: "Our Song", album: "Debut" },
    { title: "I'm Only Me When I'm With You", album: "Debut" },
    { title: "Invisble", album: "Debut" },
    { title: "A Perfectly Good Heart", album: "Debut" },
    
    { title: "Fearless", album: "Fearless" },
    { title: "Fifteen", album: "Fearless" },
    { title: "Love Story", album: "Fearless" },
    { title: "Hey Stephen", album: "Fearless" },
    { title: "White Horse", album: "Fearless" },
    { title: "You Belong With Me", album: "Fearless" },
    { title: "Breathe", album: "Fearless" },
    { title: "Tell Me Why", album: "Fearless" },
    { title: "You're Not Sorry", album: "Fearless" },
    { title: "The Way I Loved You", album: "Fearless" },
    { title: "Forever & Always", album: "Fearless" },
    { title: "The Best Day", album: "Fearless" },
    { title: "Change", album: "Fearless" },
    { title: "Jump Then Fall", album: "Fearless" },
    { title: "Untouchable", album: "Fearless" },
    { title: "Come In With The Rain", album: "Fearless" },
    { title: "Superstar", album: "Fearless" },
    { title: "The Other Side Of The Door", album: "Fearless" },
    { title: "Today Was A Fairytale", album: "Fearless" },
    { title: "You All Over Me", album: "Fearless" },
    { title: "Mr. Perfectly Fine", album: "Fearless" },
    { title: "We Were Happy", album: "Fearless" },
    { title: "That's When", album: "Fearless" },
    { title: "Don't You", album: "Fearless" },
    { title: "Bye Bye Baby", album: "Fearless" },

    { title: "Mine", album: "Speak Now" },
    { title: "Sparks Fly", album: "Speak Now" },
    { title: "Back to December", album: "Speak Now" },
    { title: "Speak Now", album: "Speak Now" },
    { title: "Dear John", album: "Speak Now" },
    { title: "Mean", album: "Speak Now" },
    { title: "The Story of Us", album: "Speak Now" },
    { title: "Never Grow Up", album: "Speak Now" },
    { title: "Enchanted", album: "Speak Now" },
    { title: "Better Than Revenge", album: "Speak Now" },
    { title: "Innocent", album: "Speak Now" },
    { title: "Haunted", album: "Speak Now" },
    { title: "Last Kiss", album: "Speak Now" },
    { title: "Long Live", album: "Speak Now" },
    { title: "Ours", album: "Speak Now" }, 
    { title: "Superman", album: "Speak Now" }, 
    { title: "Electric Touch", album: "Speak Now" },
    { title: "When Emma Falls in Love", album: "Speak Now" },
    { title: "I Can See You", album: "Speak Now" },
    { title: "Castles Crumbling (feat. Hayley Williams)", album: "Speak Now" },

    { title: "Foolish One", album: "Speak Now" },
    { title: "Timeless", album: "Speak Now" },
    { title: "State of Grace", album: "Red" },
    { title: "Red", album: "Red" },
    { title: "Treacherous", album: "Red" },
    { title: "I Knew You Were Trouble", album: "Red" },
    { title: "All Too Well", album: "Red" },
    { title: "22", album: "Red" },
    { title: "I Almost Do", album: "Red" },
    { title: "We Are Never Ever Getting Back Together", album: "Red" },
    { title: "Stay Stay Stay", album: "Red" },
    { title: "The Last Time (feat. Gary Lightbody of Snow Patrol)", album: "Red" },
    { title: "Holy Ground", album: "Red" },
    { title: "Sad Beautiful Tragic", album: "Red" },
    { title: "The Lucky One", album: "Red" },
    { title: "Everything Has Changed (feat. Ed Sheeran)", album: "Red" },
    { title: "Starlight", album: "Red" },
    { title: "Begin Again", album: "Red" },
    { title: "The Moment I Knew", album: "Red" },
    { title: "Come Back... Be Here", album: "Red" }, 
    { title: "Girl at Home", album: "Red" },
    { title: "State of Grace (Acoustic Version)", album: "Red" },
    { title: "Better Man", album: "Red" },
    {title: "Nothing New (feat. Phoebe Bridgers)", album: "Red"},
    { title: "Babe", album: "Red" },
    { title: "Message in a Bottle", album: "Red" }, 
    { title: "I Bet You Think About Me (feat. Chris Stapleton)", album: "Red" },
    { title: "Forever Winter", album: "Red" },
    { title: "Run (feat. Ed Sheeran)", album: "Red" },
    { title: "The Very First Night", album: "Red" },
    { title: "All Too Well (10 Minute Version)", album: "Red" },

    { title: "Welcome To New York", album: "1989" },
    { title: "Blank Space", album: "1989" },
    { title: "Style", album: "1989" },
    { title: "Out of the Woods", album: "1989" },
    { title: "All You Had To Do Was Stay", album: "1989" },
    { title: "Shake It Off", album: "1989" },
    { title: "I Wish You Would", album: "1989" },
    { title: "Bad Blood", album: "1989" },
    { title: "Wildest Dreams", album: "1989" },
    { title: "How You Get the Girl", album: "1989" },
    { title: "This Love", album: "1989" },
    { title: "I Know Places", album: "1989" },
    { title: "Clean", album: "1989" },
    { title: "Wonderland", album: "1989" },
    { title: "You Are In Love", album: "1989" },
    { title: "New Romantics", album: "1989" },
    { title: "Is It Over Now?", album: "1989" },
    { title: "Now That We Don't Talk", album: "1989" }, 
    { title: "Say Don't Go", album: "1989" },  
    { title: "Suburban Legends", album: "1989" },  
    { title: "Slut!", album: "1989" }, 

    { title: "...Ready For It?", album: "Reputation" },
    { title: "End Game (feat. Ed Sheeran & Future)", album: "Reputation" },
    { title: "I Did Something Bad", album: "Reputation" },
    { title: "Don't Blame Me", album: "Reputation" },
    { title: "Delicate", album: "Reputation" },
    { title: "Look What You Made Me Do", album: "Reputation" },
    { title: "So It Goes...", album: "Reputation" },
    { title: "Gorgeous", album: "Reputation" },
    { title: "Getaway Car", album: "Reputation" },
    { title: "King of My Heart", album: "Reputation" },
    { title: "Dancing With Our Hands Tied", album: "Reputation" },
    { title: "Dress", album: "Reputation" },
    { title: "This Is Why We Can't Have Nice Things", album: "Reputation" },
    { title: "Call It What You Want", album: "Reputation" },
    { title: "New Year's Day", album: "Reputation" },

    { title: "I Forgot That You Existed", album: "Lover" },
    { title: "Cruel Summer", album: "Lover" },
    { title: "Lover", album: "Lover" },
    { title: "The Man", album: "Lover" },
    { title: "The Archer", album: "Lover" },
    { title: "I Think He Knows", album: "Lover" },
    { title: "Miss Americana & The Heartbreak Prince", album: "Lover" },
    { title: "Paper Rings", album: "Lover" },
    { title: "Cornelia Street", album: "Lover" },
    { title: "Death By A Thousand Cuts", album: "Lover" },
    { title: "London Boy", album: "Lover" },
    { title: "Soon You'll Get Better (feat. The Chicks)", album: "Lover" },
    { title: "You Need To Calm Down", album: "Lover" },
    { title: "False God", album: "Lover" },
    { title: "Afterglow", album: "Lover" },
    { title: "ME!", album: "Lover" },
    { title: "Daylight", album: "Lover" },
    { title: "It's Nice To Have A Friend", album: "Lover" },
    
    
    
    { title: "the 1", album: "folklore" },
    { title: "cardigan", album: "folklore" },
    { title: "the last great american dynasty", album: "folklore" },
    { title: "exile (feat. Bon Iver)", album: "folklore" },
    { title: "my tears ricochet", album: "folklore" },
    { title: "mirrorball", album: "folklore" },
    { title: "seven", album: "folklore" },
    { title: "august", album: "folklore" },
    { title: "this is me trying", album: "folklore" },
    { title: "illicit affairs", album: "folklore" },
    { title: "invisible string", album: "folklore" },
    { title: "mad woman", album: "folklore" },
    { title: "epiphany", album: "folklore" },
    { title: "betty", album: "folklore" },
    { title: "peace", album: "folklore" },
    { title: "hoax", album: "folklore" },
    { title: "the lakes", album: "folklore" },

    { title: "willow", album: "evermore" },
    { title: "champagne problems", album: "evermore" },
    { title: "gold rush", album: "evermore" },
    { title: "'tis the damn season", album: "evermore" },
    { title: "tolerate it", album: "evermore" },
    { title: "no body, no crime (feat. HAIM)", album: "evermore" },
    { title: "happiness", album: "evermore" },
    { title: "dorothea", album: "evermore" },
    { title: "coney island (feat. The National)", album: "evermore" },
    { title: "ivy", album: "evermore" }, 
    { title: "cowboy like me", album: "evermore" }, 
    { title: "evermore (feat. Bon Iver)", album: "evermore" },
    { title: "long story short", album: "evermore" },
    { title: "closure", album: "evermore" },
    { title: "marjorie", album: "evermore" }, 
    { title: "right where you left me", album: "evermore" },
    { title: "it's time to go", album: "evermore" }, 

    { title: "Lavender Haze", album: "Midnights" },
    { title: "Maroon", album: "Midnights" },
    { title: "Anti-Hero", album: "Midnights" },
    { title: "Snow On The Beach", album: "Midnights" },
    { title: "You're On Your Own, Kid", album: "Midnights" },
    { title: "Midnight Rain", album: "Midnights" },
    { title: "Question...?", album: "Midnights" },
    { title: "Vigilante Shit", album: "Midnights" },
    { title: "Bejeweled", album: "Midnights" },
    { title: "Labyrinth", album: "Midnights" },
    { title: "Karma", album: "Midnights" },
    { title: "Sweet Nothing", album: "Midnights" },
    { title: "Mastermind", album: "Midnights" },
    { title: "The Great War", album: "Midnights" },
    { title: "Bigger Than The Whole Sky", album: "Midnights" },
    { title: "Paris", album: "Midnights" },
    { title: "High Infidelity", album: "Midnights" },
    { title: "Glitch", album: "Midnights" },
    { title: "Would've, Could've, Should've", album: "Midnights" },
    { title: "Dear Reader", album: "Midnights" },
    { title: "Hits Different", album: "Midnights" },
];










// Object to store album ratings
const albumRatings = {};

// Object to store the number of songs rated per album
const songsRatedPerAlbum = {};

// Counter to keep track of the number of rated songs
let ratedSongsCount = 0;

// Function to display songs on the webpage
function displaySongs() {
    const songList = document.getElementById('song-list');
    
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.innerHTML = `
            <div class="song">
                <h3>${song.title}</h3>
                <p>Album: ${song.album}</p>
                <div class="rating" data-album="${song.album}">
                    <span class="star" data-rating="1">&#9734;</span>
                    <span class="star" data-rating="2">&#9734;</span>
                    <span class="star" data-rating="3">&#9734;</span>
                    <span class="star" data-rating="4">&#9734;</span>
                    <span class="star" data-rating="5">&#9734;</span>
                </div>
            </div>
        `;
        songList.appendChild(songElement);
    });
}

// Function to handle rating selection
function handleRating() {
    const songsContainer = document.getElementById('song-list');
    songsContainer.addEventListener('click', function(event) {
        const star = event.target.closest('.star');
        if (star) {
            const rating = parseInt(star.dataset.rating);
            const album = star.parentElement.dataset.album;
            const songTitle = star.parentElement.parentElement.querySelector('h3').textContent;
            console.log(`Rated ${songTitle} (${album}) ${rating} stars`);
            // Clear previous selections
            const stars = star.parentElement.querySelectorAll(`.star`);
            stars.forEach(s => s.classList.remove('selected'));
            // Fill stars up to the selected rating
            for (let i = 1; i <= rating; i++) {
                star.parentElement.querySelector(`.star[data-rating="${i}"]`).classList.add('selected');
            }
            // Update album ratings
            if (!albumRatings[album]) {
                albumRatings[album] = 0;
                songsRatedPerAlbum[album] = 0;
            }
            albumRatings[album] += rating;
            songsRatedPerAlbum[album]++;
            console.log(albumRatings);
            
            // Increment rated songs count
            ratedSongsCount++;
            
            // Check if all songs have been rated
            if (ratedSongsCount === songs.length) {
                displayAlbumRankings();
            }
        }
    });
}

// Function to display album rankings
function displayAlbumRankings() {
    const rankingsContainer = document.getElementById('rankings');
    rankingsContainer.innerHTML = '<h2>Album Rankings</h2>';
    
    // Calculate average ratings per album
    const averageRatings = {};
    for (const album in albumRatings) {
        averageRatings[album] = albumRatings[album] / songsRatedPerAlbum[album];
    }
    
    // Sort albums by average rating
    const sortedAlbums = Object.keys(averageRatings).sort((a, b) => averageRatings[b] - averageRatings[a]);
    
    // Display rankings
    sortedAlbums.forEach((album, index) => {
        const rank = index + 1;
        const albumElement = document.createElement('div');
        albumElement.innerHTML = `<p>${rank}. ${album} - ${averageRatings[album].toFixed(2)} stars</p>`;
        rankingsContainer.appendChild(albumElement);
    });
}

// Call functions to display songs and handle rating
displaySongs();
handleRating();
