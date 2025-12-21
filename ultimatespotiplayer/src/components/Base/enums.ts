import {ISpotifyImageType} from "@/enums";

export interface IBaseCardProps {
  title: string
  artists: string[]
  image: ISpotifyImageType
}
