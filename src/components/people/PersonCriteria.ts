import { Person } from './Person';

export interface PersonCriteria {
  name?: string;
  city?: string;
  state?: string;

  [key: string]: string | undefined;
}

export const criteriaToPerson = (
  criteria: PersonCriteria,
  partial = false
): Partial<Person> => {
  let person: Partial<Person> = {};
  const props: { [index: string]: string } = {
    firstName: 'firstName',
    lastName: 'lastName',
    'address.city': 'address.city',
    'address.state': 'address.state',
  };

  if (partial) {
    Object.entries(props).forEach(([k, v]) => (props[k] = `${v}_like`));
  }

  Object.entries(criteria).forEach(([k, v]) => {
    if (v === '') return;
    switch (k) {
      case 'name':
        if (typeof v === 'string') {
          let names = v.split(' ');
          if (names.length === 1) {
            person[props.firstName] = names[0];
          } else {
            person[props.firstName] = names.slice(0, -1).join(' ');
            person[props.lastName] = names[names.length - 1];
          }
          break;
        }
      case 'city':
      case 'state':
        person[props[`address.${k}`]] = v;
        break;
      default:
        break;
    }
  });
  return person;
};
