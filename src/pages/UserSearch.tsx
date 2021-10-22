import React, { useState } from 'react';
import UserList from './UserList';
import { users } from './mock/MockData';

const UserSearch: React.FC = () => {
  const [userList, setUserList] = useState<
    { id: string; name: string; age: number; designation: string }[] | undefined
  >(users);
  const [textSearch, setTextSearch] = useState<string>('');

  const handleOnclick = () => {
    // const findUsers =
    //   userList?.length > 0 &&
    //   userList?.filter((userFilter) => userFilter?.name === textSearch);
    //  userList?.length cna be undefind
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((userFilter) => userFilter?.name === textSearch)
        : undefined;
    console.log('findUsers', findUsers);

    // "findUsers" can be object of array | undefind
    setUserList(findUsers);
  };
  return (
    <div>
      <div className="title">
        <h1>User Search</h1>
      </div>
      <div className="input__wrapper">
        <input
          value={textSearch}
          onChange={(e) => {
            setTextSearch(e.target.value);
            //after delete the name on input field reset
            setUserList(users);
          }}
          type="text"
          className="search__input"
          placeholder="Search user.."
        />
        <button
          className="search__button"
          disabled={!textSearch}
          onClick={handleOnclick}
        >
          Search
        </button>
      </div>

      <div className="body__users">
        {userList && userList?.length == 0 && (
          <div className="notfound__user">No user found!</div>
        )}

        {userList &&
          userList?.length > 0 &&
          userList?.map((allUser) => (
            <UserList
              id={allUser.id}
              name={allUser.name}
              age={allUser.age}
              designation={allUser.designation}
              key={allUser.id}
            />
          ))}
      </div>
    </div>
  );
};

export default UserSearch;
