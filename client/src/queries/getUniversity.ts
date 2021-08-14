import axios from 'axios';
import { Data } from '../views/LandingPage';

type UniversityNameTypes = {
  name?: string;
  country?: string;
};

const getUniversity = (params: UniversityNameTypes) => {
  return axios
    .get<Data[]>('http://universities.hipolabs.com/search', { params })
    .then((res) => res.data);
};

export default getUniversity;
