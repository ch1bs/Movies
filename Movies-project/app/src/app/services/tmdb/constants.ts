import { ISelectOption } from 'src/app/Interfaces/selectOptions';
import {ITVSerie} from '../../Interfaces/tvSerie';
import {IMovie} from '../../Interfaces/movie';

export const generateYearsOptions = (): ISelectOption[] => {
  const yearsOptions: ISelectOption[] = [{ label: 'All', value: '' }];
  for (let i: number = new Date().getFullYear(); i >= 1900; i--) {
    yearsOptions.push({ label: i.toString(), value: i });
  }
  return yearsOptions;
};

// export const TMDB_SORTING_OPTIONS: ISelectOption[] = [
//   {
//     label: 'Popularity Descending',
//     value: 'popularity.desc',
//   },
//   {
//     label: 'Popularity Ascending',
//     value: 'popularity.asc',
//   },
// ];
//
// export const TMDB_GENRE_OPTIONS: ISelectOption[] = [
//   {
//     label: 'All',
//     value: '',
//   },
//   {
//     label: 'Action',
//     value: '28',
//   },
//   {
//     label: 'Adventure',
//     value: '12',
//   },
//   {
//     label: 'Animation',
//     value: '16',
//   },
// ];
//
// export const TMDB_YEARS_OPTIONS: ISelectOption[] = generateYearsOptions();

export const isMovie = (media: ITVSerie | IMovie): media is IMovie => {
  return (media as IMovie).title !== undefined;
};
