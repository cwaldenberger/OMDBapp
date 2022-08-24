
// //assignment vars
// let movieName
// let movieRating

// //result div var
// let resultDiv = document.getElementById('result')

// //display vars
// let movieNameDisplay = document.getElementById('title')
// let movieRatingDisplay = document.getElementById('rating')



const searchBtn = document.getElementById('search')
const movieSearch = document.getElementById('movie-search')
searchBtn.addEventListener('click', searchMovie)


function logMovieSearch(){
    console.log(movieSearch.value)
}



function searchMovie(){
    return fetch(`https://www.omdbapi.com/?t=${movieSearch.value}&apikey=79987cd7`)
            .then(res=> res.json())
            .then( data =>{
                console.log(data)
                renderMovieInfo(data)
                clearInput()
            })
}


function renderMovieInfo(data){
    const resultsDiv = document.getElementById('result')
    
    if (data.Error){
        clearInput()
        console.log( 'there was an error')
        const errorNoticeDiv = document.createElement('div')
        errorNoticeDiv.className = 'error-notice-Div'
        errorNoticeDiv.id = 'hideMeAfter5Seconds'
        const errorNotice = document.createElement('h2')
        const errorNoticeText = 'Movie not found'
        errorNotice.innerText = errorNoticeText
        // errorNoticeDiv.innerHTML = errorNotice
        errorNoticeDiv.appendChild(errorNotice)
        resultsDiv.prepend(errorNoticeDiv)
    } else {

       
        const resultsContainerDiv = document.createElement('div')
        resultsContainerDiv.className = 'results-container'
        resultsDiv.prepend(resultsContainerDiv)
        
        const imgDiv = document.createElement('div')
        imgDiv.className = "result-img"
        resultsContainerDiv.appendChild(imgDiv)

        const infoDiv = document.createElement('div')
        infoDiv.className = 'result-info'
        resultsContainerDiv.appendChild(infoDiv)

        const resultTitleDiv = document.createElement('div')
        resultTitleDiv.className = "result-title"
        infoDiv.appendChild(resultTitleDiv)
        
        const title = data.Title
        const titleElement = document.createElement('h3')
        titleElement.innerHTML = title 
        resultTitleDiv.appendChild(titleElement)

        const resultRatingDiv = document.createElement('div')
        resultRatingDiv.className = 'result-rating'
        resultTitleDiv.appendChild(resultRatingDiv)
        
        const poster = data.Poster
        const posterElement = document.createElement('img')
        posterElement.src = poster
        imgDiv.appendChild(posterElement)
        
        const ratingIcon = document.createElement('img')
        ratingIcon.src="https://github.com/cwaldenberger/OMDBapp/blob/main/images/Icon-star.png"
        resultRatingDiv.appendChild(ratingIcon) 

        const rating = data.imdbRating
        const ratingElement = document.createElement('h4')
        ratingElement.innerHTML = rating
        resultRatingDiv.appendChild(ratingElement)
        
        const resultDetailDiv = document.createElement('div')
        resultDetailDiv.className = 'result-detail'
        infoDiv.appendChild(resultDetailDiv)

        const movieLength =  data.Runtime
        const movieLengthElement = document.createElement('h4')
        movieLengthElement.className = "length"
        movieLengthElement.innerHTML = movieLength
        resultDetailDiv.appendChild(movieLengthElement)

        const movieGenre = data.Genre
        const movieGenreElement = document.createElement('h4')
        movieGenreElement.className = 'genre'
        movieGenreElement.innerHTML = movieGenre
        resultDetailDiv.appendChild(movieGenreElement)

        const watchlistAddDiv = document.createElement('div')
        watchlistAddDiv.className = 'watchlist-add'
        resultDetailDiv.appendChild(watchlistAddDiv)

        const watchlistIcon = document.createElement('img')
        watchlistIcon.src="https://github.com/cwaldenberger/OMDBapp/blob/main/images/Icon-add-watchlist.png"
        resultDetailDiv.appendChild(watchlistIcon) 
        
        const watchlistTxt = 'Watchlist'
        const watchlistElement = document.createElement('h4')
        watchlistElement.className = 'add-to-watchlist-icon'
        watchlistElement.innerHTML = watchlistTxt
        resultDetailDiv.appendChild(watchlistElement)

        const synopsisDiv = document.createElement('div')
        synopsisDiv.className = 'result-synopsis'
        infoDiv.appendChild(synopsisDiv)

        const movieSynopsis = data.Plot
        const synopsisElement = document.createElement('h4')
        synopsisElement.className='synopsis'
        synopsisElement.innerHTML = movieSynopsis
        synopsisDiv.appendChild(synopsisElement)
    }

}

function clearInput(){
    movieSearch.value = ""
}


