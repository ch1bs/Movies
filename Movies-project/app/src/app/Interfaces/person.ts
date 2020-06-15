import { ITVSerie } from './tvSerie';
import { IMovie } from './movie';

export interface IPerson {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: Array<ITVSerie | IMovie>;
  name: string;
  popularity: number;
}

export interface IPersonDetails extends IPerson {
    biography: string;
    place_of_birth: string | null;
    birthday: string | null;
    deathday: string | null;
    known_for_department: string;
    gender: number;
    also_known_as: string[];
}

export interface IPersonCredit {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  vote_count: number;
  video: boolean;
  media_type: string;
  poster_path: string | null;
  backdrop_path: string | null;
  title: string;
  popularity: number;
  genre_ids: number[];
  vote_average: number;
  adult: boolean;
  release_date: string;
  credit_id: string;
}
