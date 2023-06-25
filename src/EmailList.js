import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmailList({data, setData}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let users = await axios.get(
      "https://nutz-email-backend.vercel.app/emails"
    );

    console.log(users.data);
    setUsers(users.data);
    setLoading(false);
    // onHeaderClick(users.id)
    
  };
  console.log(users);


const inbox=(user)=>{
    setData(user)
    console.log(user)
}
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Email-List</h1>
        <a
          href="/emaillist"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Refresh{" "}
        </a>
      </div>

      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>From</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>ID</th>
                    <th>From</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.from}</td>
                        <td>{user.date}</td>
                        <td>{user.subject}</td>

                        <td>
                          <Link
                            to={`/inboxview`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                           <button onClick={()=> inbox(user)}>view</button>
                          </Link>
                      
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailList;
