const initialState = {
    listPage : {},
    detailPage : {},
    basketPage : {
        results : []
    },
};

const media = {
    movie :	{
        entity : {
            movieArtist : 'movieArtist',
            movie : 'movie',
        }
    },
    podcast	: {
        entity : {
            podcastAuthor : 'podcastAuthor', 
            podcast : 'podcast',
        }
    },
    music : {
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
        entity : {
            musicArtist : 'musicArtist', 
            musicVideo : 'musicVideo'
        }
    },
    audiobook : {
        entity : {
            audiobookAuthor : 'audiobookAuthor', 
            audiobook : 'audiobook'
        }
    },
    shortFilm :	{
        entity : {
            shortFilmArtist : 'shortFilmArtist', 
            shortFilm : 'shortFilm'
        }
    },
    tvShow	: {
        entity : {
            tvEpisode : 'tvEpisode', 
            tvSeason : 'tvSeason'
        }
    },
    software : {
        entity : {
            software : 'software', 
            iPadSoftware : 'iPadSoftware', 
            macSoftware : 'macSoftware'
        }
    },
    ebook : {
        entity : {
            ebook : 'ebook'
        }
    }
};

const BASKET_ADD = 'BASKET_ADD';
const BASKET_REMOVE = 'BASKET_REMOVE';
const SEARCH = 'SEARCH';

export { media , initialState , BASKET_ADD, BASKET_REMOVE, SEARCH} ;