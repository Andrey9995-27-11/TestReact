const MEDIA = {
  All: {
    value: '',
    name: 'All',
  },
  movie: {
    value: 'movie',
    name: 'movie',
    entity: {
      movieArtist: 'movieArtist',
      movie: 'movie',
    },
  },
  podcast: {
    value: 'podcast',
    name: 'podcast',
    entity: {
      podcastAuthor: 'podcastAuthor',
      podcast: 'podcast',
    },
  },
  music: {
    value: 'music',
    name: 'music',
    entity: {
      musicArtist: 'musicArtist',
      musicTrack: 'musicTrack',
      album: 'album',
      musicVideo: 'musicVideo',
      mix: 'mix',
      song: 'song',
    },
  },
  musicVideo: {
    value: 'musicVideo',
    name: 'musicVideo',
    entity: {
      musicArtist: 'musicArtist',
      musicVideo: 'musicVideo',
    },
  },
  audiobook: {
    value: 'audiobook',
    name: 'audiobook',
    entity: {
      audiobookAuthor: 'audiobookAuthor',
      audiobook: 'audiobook',
    },
  },
  shortFilm: {
    value: 'shortFilm',
    name: 'shortFilm',
    entity: {
      shortFilmArtist: 'shortFilmArtist',
      shortFilm: 'shortFilm',
    },
  },
  tvShow: {
    value: 'tvShow',
    name: 'tvShow',
    entity: {
      tvEpisode: 'tvEpisode',
      tvSeason: 'tvSeason',
    },
  },
  software: {
    value: 'software',
    name: 'software',
    entity: {
      software: 'software',
      iPadSoftware: 'iPadSoftware',
      macSoftware: 'macSoftware',
    },
  },
  ebook: {
    value: 'ebook',
    name: 'ebook',
    entity: {
      ebook: 'ebook',
    },
  },
}

// const FIELDS = {
//     NAME : "Название",
//     PRICE : "Цена",
//     artistName: "Исполнитель",
//     kind: "feature-movie",
//     longDescription: "Описание",
//     trackViewUrl: "",
//     previewUrl: "https://video-ssl.itunes.apple.com/itunes-assets/Video117/v4/53/76/15/53761576-4e02-3da5-7386-e44ebaa1973e/mzvf_215146007277984823.640x354.h264lc.U.p.m4v",
//     primaryGenreName: "Action & Adventure",
//     trackTimeMillis: "Продолжительность",
//     wrapperType: "Тип"
// }

const BASKET_ADD = 'BASKET_ADD'
const BASKET_REMOVE = 'BASKET_REMOVE'
const BASKET_ADD_MULTI = 'BASKET_ADD_MULTI'
const BASKET_REMOVE_MULTI = 'BASKET_REMOVE_MULTI'
const SEARCH = 'SEARCH'
const DETAIL = 'DETAIL'
const TO_REMOVE = 'TO_REMOVE'
const LAZY = 'LAZY'
const THEME_TOGGLE = 'THEME_TOGGLE'
const THEME = 'THEME'
const TOGGLE_IS_SEARCHING = 'TOGGLE_IS_SEARCHING'

export {
  MEDIA,
  BASKET_ADD,
  BASKET_REMOVE,
  BASKET_ADD_MULTI,
  BASKET_REMOVE_MULTI,
  SEARCH,
  DETAIL,
  TO_REMOVE,
  LAZY,
  THEME_TOGGLE,
  THEME,
  TOGGLE_IS_SEARCHING,
}
