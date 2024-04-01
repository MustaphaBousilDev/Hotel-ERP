import React from 'react'
import { CardDefault as Card} from '../../components/shared/Cards/Card'
import { gql, useLazyQuery, useMutation } from "@apollo/client";

const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($input: CreateEmployeeInput!) {
    createEmployee(createEmployeeInput: $input) {
      _id
      firstName
      lastName
      gender
      dateOfBirth
      dateOfHired
      contactNumber
      email
      address
      salary
      superVisorID
      image
      departement {
        _id
      }
      position {
        _id
      }
      timeWork {
        _id
      }
      isActivate
    }
  }
`;



export const Employee = () => {
  const [createEmployee] = useMutation(CREATE_EMPLOYEE);
  const handeCreateEmployee = async () =>{
    console.log('success clicked')
    try {
        const { data } = await createEmployee({
          variables: {
            input: {
              firstName: "empFirstName2",
              lastName: "empLastNam2e",
              gender: "FEMME",
              dateOfBirth: "06/04/2000",
              dateOfHired: "06/05/2023",
              contactNumber: "+212.365.987",
              email: "empl@gmail.com",
              address: "address empl one",
              salary: 100,
              superVisorID: "none",
              image: "image 1",
              departement: { id: 1 },
              position: { id: 1 },
              timeWork: { id: 1 },
              isActivate: true,
            }
          }
        });
        console.log('Employee created:', data.createEmployee);
      } catch (error) {
        console.error('Error creating employee:', error);
      }
  }
  return (
    <div className=' flex md:gap-4 flex-wrap m-5'>
        <Card className=' flex flex-col justify-start  bg-gray-100 p-4 border-2 border-white  w-full mx-6 sm:mx-0 sm:w-1/2 md:mx-0 md:w-64 lg:w-80 rounded-2xl'>
            <div className=' flex flex-col gap-2 bg-red-500' onClick={handeCreateEmployee}>
                <h3 className=' text-sm font-semibold'>Mr. Mugiwara Luffy</h3>
                <span className=' text-xs'>mugiwara@email.com</span>
            </div>
            <ul className=' flex gap-2 text-sm'>
                <li>Departement: </li>
                <li className=' font-semibold'>Developement</li>
            </ul>
            <div className=' mt-2  rounded-lg overflow-hidden w-full'>
                <img
                    className=' w-full h-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z114O1qTOSvMW09ow3cCWBjxRZD9vhEiTA&s'
                    alt='mugiwara employee'
                />
            </div>
        </Card>
        <Card className=' flex flex-col justify-start  bg-gray-100 p-4 border-2 border-white  w-full mx-6 sm:mx-0 sm:w-1/2 md:mx-0 md:w-64 lg:w-80 rounded-2xl'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-sm font-semibold'>Mr. Mugiwara Luffy</h3>
                <span className=' text-xs'>mugiwara@email.com</span>
            </div>
            <ul className=' flex gap-2 text-sm'>
                <li>Departement: </li>
                <li className=' font-semibold'>Developement</li>
            </ul>
            <div className=' mt-2  rounded-lg overflow-hidden w-full'>
                <img
                    className=' w-full h-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z114O1qTOSvMW09ow3cCWBjxRZD9vhEiTA&s'
                    alt='mugiwara employee'
                />
            </div>
        </Card>
        <Card className=' flex flex-col justify-start  bg-gray-100 p-4 border-2 border-white  w-full mx-6 sm:mx-0 sm:w-1/2 md:mx-0 md:w-64 lg:w-80 rounded-2xl'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-sm font-semibold'>Mr. Mugiwara Luffy</h3>
                <span className=' text-xs'>mugiwara@email.com</span>
            </div>
            <ul className=' flex gap-2 text-sm'>
                <li>Departement: </li>
                <li className=' font-semibold'>Developement</li>
            </ul>
            <div className=' mt-2  rounded-lg overflow-hidden w-full'>
                <img
                    className=' w-full h-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z114O1qTOSvMW09ow3cCWBjxRZD9vhEiTA&s'
                    alt='mugiwara employee'
                />
            </div>
        </Card>
        <Card className=' flex flex-col justify-start  bg-gray-100 p-4 border-2 border-white  w-full mx-6 sm:mx-0 sm:w-1/2 md:mx-0 md:w-64 lg:w-80 rounded-2xl'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-sm font-semibold'>Mr. Mugiwara Luffy</h3>
                <span className=' text-xs'>mugiwara@email.com</span>
            </div>
            <ul className=' flex gap-2 text-sm'>
                <li>Departement: </li>
                <li className=' font-semibold'>Developement</li>
            </ul>
            <div className=' mt-2  rounded-lg overflow-hidden w-full'>
                <img
                    className=' w-full h-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z114O1qTOSvMW09ow3cCWBjxRZD9vhEiTA&s'
                    alt='mugiwara employee'
                />
            </div>
        </Card>
        <Card className=' flex flex-col justify-start  bg-gray-100 p-4 border-2 border-white  w-full mx-6 sm:mx-0 sm:w-1/2 md:mx-0 md:w-64 lg:w-80 rounded-2xl'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-sm font-semibold'>Mr. Mugiwara Luffy</h3>
                <span className=' text-xs'>mugiwara@email.com</span>
            </div>
            <ul className=' flex gap-2 text-sm'>
                <li>Departement: </li>
                <li className=' font-semibold'>Developement</li>
            </ul>
            <div className=' mt-2  rounded-lg overflow-hidden w-full'>
                <img
                    className=' w-full h-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z114O1qTOSvMW09ow3cCWBjxRZD9vhEiTA&s'
                    alt='mugiwara employee'
                />
            </div>
        </Card>
        <Card className=' flex flex-col justify-start  bg-gray-100 p-4 border-2 border-white  w-full mx-6 sm:mx-0 sm:w-1/2 md:mx-0 md:w-64 lg:w-80 rounded-2xl'>
            <div className=' flex flex-col gap-2'>
                <h3 className=' text-sm font-semibold'>Mr. Mugiwara Luffy</h3>
                <span className=' text-xs'>mugiwara@email.com</span>
            </div>
            <ul className=' flex gap-2 text-sm'>
                <li>Departement: </li>
                <li className=' font-semibold'>Developement</li>
            </ul>
            <div className=' mt-2  rounded-lg overflow-hidden w-full'>
                <img
                    className=' w-full h-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z114O1qTOSvMW09ow3cCWBjxRZD9vhEiTA&s'
                    alt='mugiwara employee'
                />
            </div>
        </Card>
    </div>
  )
}