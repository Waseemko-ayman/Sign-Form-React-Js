import React, { useDeferredValue, useEffect, useState } from "react";
import "./style.css";
import Title from "../../Components/Title";
import Table from "../../Components/Table";
import { USERS_COLUMNS } from "../../Constants/usersDataTable";
// import axios from "axios";
import { AUTH_API_URL } from "../../config/api";
import { useAuthContext } from "../../Context/AuthContext";
import useAPI from "../../Hook/useAPI";

const UsersListPage = () => {
  const { isLoading, token } = useAuthContext();
  const [search, setSearch] = useState('');
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(10);
  const deferredQuery = useDeferredValue(search);
  
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const pageQuery = `&page=${num}`;
  const searchQuery = search ? `&q=${deferredQuery}` : '';
  const sizeQuery = `?size=${size}`;

  const { getUsers, users, deleteUser } = useAPI(
    AUTH_API_URL + "users" + sizeQuery + searchQuery + pageQuery,
    config
  );

  const prevSubmit = () => {
    setNum((prev) => (num > 1 ? prev - 1 : num));
  };
  const nextSubmit = () => {
    setNum((prev) => (num <= users.pages ? prev + 1 : num));
  };
  const handleDelete = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredQuery, size, num]);

  return (
    <div className="user__list">
      <Title textTitle="Users List" />
      <div className="tabel__info">
        <div className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Search"
          />
          <select onChange={(e) => setSize(e.target.value)} name='size'>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
        <Table
          columns={USERS_COLUMNS(handleDelete)}
          data={users?.users}
          isLoading={isLoading}
        />
        <div className="pages__numbers">
          <button onClick={prevSubmit} disabled={users.page === 1 ? true : false}>
            prev
          </button>
          <button>{users.page}</button>
          <button
            onClick={nextSubmit}
            disabled={users.page === users.pages ? true : false}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersListPage;
