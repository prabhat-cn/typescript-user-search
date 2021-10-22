import React from 'react';

interface Props {
  id: string;
  name: string;
  age: number;
  designation: string;
}

const UserList: React.FC<Props> = ({ id, name, age, designation }: Props) => {
  return (
    <div className="body__item">
      <h3>Name:&nbsp;&nbsp;{name}</h3>
      <p>Age:&nbsp;&nbsp;{age}</p>
      <p>Age:&nbsp;&nbsp;{designation}</p>
    </div>
  );
};

export default UserList;
