interface ISpotifyExplicitContent {
  filter_enabled: boolean,
  filter_locked: boolean
}

interface ISpotifyExternalUrls {
  spotify: string
}

interface ISpotifyFollowers {
  href: string,
  total: number
}

export interface ISpotifyImage {
  height: number,
  url: string,
  width: number
}

interface ISpotifyExternalIds {
  upc: string
}

interface ISpotifyCopyright {
  text: string,
  type: string
}

export interface ISpotifyArtist {
  external_urls: ISpotifyExternalUrls,
  href: string,
  id: string,
  name: string,
  type: string,
  uri: string
}

export interface ISpotifyTrackData {
  href: string,
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number,
  items: ISpotifyTrack[]
}

export interface ISpotifyTrack {
  artists: ISpotifyArtist[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_urls: ISpotifyExternalUrls,
  href: string,
  id: string,
  name: string,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string,
  is_local: boolean
}

export interface IUserAlbum {
  added_at: string,
  album: ISpotifyAlbum
}

export interface ISpotifyAlbum {
  album_type: string,
  total_tracks: number,
  available_markets: string[],
  external_urls: ISpotifyExternalUrls,
  href: string,
  id: string,
  images: ISpotifyImage[],
  name: string,
  release_date: string,
  release_date_precision: string,
  type: string,
  uri: string,
  artists: ISpotifyArtist[],
  tracks: ISpotifyTrackData,
  copyrights: ISpotifyCopyright[],
  external_ids: ISpotifyExternalIds,
  genres: [],
  label: string,
  popularity: number
}


export interface ISpotifyPlaylist {
  collaborative: boolean,
  description: string,
  external_urls: ISpotifyExternalUrls,
  href: string,
  id: string,
  images: ISpotifyImage[],
  name: string,
  owner: ISpotifyUser,
  primary_color: null,
  public: boolean,
  snapshot_id: string,
  tracks: {
    href: string,
    total: number,
    items: ISpotifyTrack[],
    limit: number,
    next: string,
    previous: string
  },
  type: string,
  uri: string
}

export interface ISpotifyUser {
  country: string,
  display_name: string,
  email: string,
  explicit_content: ISpotifyExplicitContent,
  external_urls: ISpotifyExternalUrls,
  followers: ISpotifyFollowers,
  href: string,
  id: string,
  images: ISpotifyImage[],
  product: string,
  type: string,
  uri: string
}
