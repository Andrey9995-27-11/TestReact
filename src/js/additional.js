const initialState = {
    listPage : {},
    detailPage : {},
    basketPage : {
        results : [],
        items : [],
        summ : 0,
        toremove : [],
    },
    // search : 
};

const media = {
    All : { 
        value: '', name : 'All',
    },
    movie :	{
        value: 'movie', name : 'movie',
        entity : {
            movieArtist : 'movieArtist',
            movie : 'movie',
        },
    },
    podcast	: {
        value: 'podcast', name : 'podcast',
        entity : {
            podcastAuthor : 'podcastAuthor', 
            podcast : 'podcast',
        }
    },
    music : {
        value: 'music', name : 'music',
        entity : {
            musicArtist : 'musicArtist', 
            musicTrack : 'musicTrack', 
            album : 'album', 
            musicVideo : 'musicVideo', 
            mix : 'mix', 
            song : 'song'
        }
    },
    musicVideo : {
        value: 'musicVideo', name : 'musicVideo',
        entity : {
            musicArtist : 'musicArtist', 
            musicVideo : 'musicVideo'
        }
    },
    audiobook : {
        value: 'audiobook', name : 'audiobook',
        entity : {
            audiobookAuthor : 'audiobookAuthor', 
            audiobook : 'audiobook'
        }
    },
    shortFilm :	{
        value: 'shortFilm', name : 'shortFilm',
        entity : {
            shortFilmArtist : 'shortFilmArtist', 
            shortFilm : 'shortFilm'
        }
    },
    tvShow	: {
        value: 'tvShow', name : 'tvShow',
        entity : {
            tvEpisode : 'tvEpisode', 
            tvSeason : 'tvSeason'
        }
    },
    software : {
        value: 'software', name : 'software',
        entity : {
            software : 'software', 
            iPadSoftware : 'iPadSoftware', 
            macSoftware : 'macSoftware'
        }
    },
    ebook : {
        value: 'ebook', name : 'ebook',
        entity : {
            ebook : 'ebook'
        }
    }
};

const BASKET_ADD = 'BASKET_ADD';
const BASKET_REMOVE = 'BASKET_REMOVE';
const SEARCH = 'SEARCH';
const TO_REMOVE = 'TO_REMOVE';

export { initialState as default , media , BASKET_ADD, BASKET_REMOVE , SEARCH , TO_REMOVE } ;