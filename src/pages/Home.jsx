import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import user from '../assets/S-Profile-icon.png';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    renderCell: (params) => (
      <div className='flex flex-wrap'>
        <img
          src={params.row.avatar}
          alt="Avatar"
          className='w-[50px] h-[50px] rounded-full mt-3'
        />
        <div className='ml-2'>
          <p>{params.row.name}</p>
          <p className='text-gray-500'>{params.row.Email}</p>
        </div>

      </div>
    ),
  },
  { field: 'role', headerName: 'Role', width: 200 },
  { field: 'lastActive', headerName: 'Last Active', width: 200 },
  { field: 'access', headerName: 'Access', width: 100, renderCell: (params) => <Switch {...label} defaultChecked /> },
];




const paginationModel = { page: 0, pageSize: 5 };
const Home = () => {

  const [page, setPage] = React.useState(1);
  const [userData, setUserData] = React.useState([]);

  const getData = () => {
    let data = [];
    axios.get('https://reqres.in/api/users?page=' + page)
      .then((res) => {
        console.log(res.data)
        if (res.data.data.length > 0) {
          res.data.data.map((item) => {
            data.push({
              id: item.id,
              name: item.first_name + " " + item.last_name,
              Email: item.email,
              avatar: item.avatar,
              role: "marketing manager",
              lastActive: '10min',
              access: true
            })
          })

        }
        setUserData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData()
  }, [page]);

  return (
    <>



      <div className='fixed top-0 z-50 w-full'>
        <Navbar />
      </div>

      <Sidebar />
      <div class="p-4 sm:ml-64 mt-14">

        <div className='flex gap-5 items-center pt-5'>
          <img src={user} alt="user" srcset="" height={40} width={40} />
          <h2 className='font-semibold text-2xl'>Users</h2>
        </div>
        <p className='text-sm text-gray py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem labore eligendi atque corrupti possimus, expedita vero aut inventore. Id, provident. Esse magni rerum, repellat quibusdam explicabo sint nisi reprehenderit!</p>
        <DataGrid
          rows={userData}
          columns={columns}
          rowHeight={80} 
          paginationModel={paginationModel}
          onPaginationModelChange={(newModel) => setPage(newModel.page + 1)}
          totalRows={userData.length}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </div>


    </>
  )
}


export default Home