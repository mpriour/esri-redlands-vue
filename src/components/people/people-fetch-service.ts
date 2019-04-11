import { stringify } from 'querystringify';

import { PersonCriteria, criteriaToPerson } from './PersonCriteria';
import { Person } from './Person';
import { Dao } from '../common/types';

const baseUrl = 'http://localhost:8000/people';

const errorHandler = (error: Error) => {
  console.error('Dao Error: ', error);
  return Promise.reject({ message: 'Something went wrong' });
};

const search = (criteria?: PersonCriteria): Promise<Person[]> => {
  const person = criteria && criteriaToPerson(criteria, true);
  const url = criteria ? `${baseUrl}?${stringify(person as object)}` : baseUrl;
  return fetch(url)
    .then(response => response.json())
    .catch(errorHandler);
};

const getById = (id: string): Promise<Person> => {
  return fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .catch(errorHandler);
};

const dao: Dao<Person, PersonCriteria> = {
  search,
  getById,
};

export default dao;
