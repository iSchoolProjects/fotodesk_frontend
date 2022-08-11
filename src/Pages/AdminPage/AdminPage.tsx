import React from 'react';
import UsersList from '../../components/UsersList/UsersList';

export default function AdminPage() {
  return (
    <div className="admin">
      <div className="row">
        <div className="col-12 ">
          <div className="d-flex">
            <div className="input_group">
              <input type="text" aria-label="First name" className="form-control" placeholder="Name" />
            </div>
            <div className="input_group">
              <input type="text" aria-label="First name" className="form-control" placeholder="Email" />
            </div>

            <button className="upload" type="submit">
              Upload
            </button>
            <button className="add" type="submit">
              +Add
            </button>
          </div>

          {new Array(3).fill(0).map((_: any) => (
            <UsersList />
          ))}
        </div>
      </div>
    </div>
  );
}
