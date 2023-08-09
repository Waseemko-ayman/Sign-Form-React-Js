import React, { useEffect, useState } from "react";
import "./style.css";
import Title from "../../Components/Title";
import Table from "../../Components/Table";
import { USERS_COLUMNS } from "../../Constants/usersDataTable";
import axios from "axios";
import { AUTH_API_URL } from "../../config/api";

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    (
      async () => {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${AUTH_API_URL}`)
          setUsers(data)
        } catch (error) {
          console.log(error.message)
          setError(error.message)
        } finally {
          setIsLoading(false)
        }
      }
    )();
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`${AUTH_API_URL}${id}`)
      setUsers(users.filter((store) => store.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="user__list">
      <Title textTitle="Users List" />
      <div className="tabel__info">
        <Table
          columns={USERS_COLUMNS(handleDelete)}
          data={users}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default UsersListPage;