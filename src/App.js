import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage.jsx";
import LandingPage from "./Pages/LandingPage";

const dummyUserDataList = [
  {
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      website: "johndoe.com",
      profilepicture: "https://randomuser.me/api/portraits/men/1.jpg",
      company: {
          name: "Doe Industries",
          catchPhrase: "Innovate and Elevate",
          bs: "synergize scalable solutions"
      },
      address: {
          street: "123 Main St",
          suite: "Apt. 4B",
          city: "Metropolis",
          zipcode: "12345",
          geo: {
              lat: "37.7749",
              lng: "-122.4194"
          }
      }
  },
  {
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      phone: "234-567-8901",
      website: "janesmith.com",
      profilepicture: "https://randomuser.me/api/portraits/women/2.jpg",
      company: {
          name: "Smith Solutions",
          catchPhrase: "Empower Your Future",
          bs: "deliver robust platforms"
      },
      address: {
          street: "456 Elm St",
          suite: "Suite 12",
          city: "Gotham",
          zipcode: "54321",
          geo: {
              lat: "40.7128",
              lng: "-74.0060"
          }
      }
  },
  {
      name: "Alice Johnson",
      username: "alicej",
      email: "alice.johnson@example.com",
      phone: "345-678-9012",
      website: "alicejohnson.com",
      profilepicture: "https://randomuser.me/api/portraits/women/3.jpg",
      company: {
          name: "Johnson Tech",
          catchPhrase: "Technology for Tomorrow",
          bs: "integrate seamless experiences"
      },
      address: {
          street: "789 Oak St",
          suite: "Floor 3",
          city: "Star City",
          zipcode: "67890",
          geo: {
              lat: "34.0522",
              lng: "-118.2437"
          }
      }
  },
  {
      name: "Bob Brown",
      username: "bobbrown",
      email: "bob.brown@example.com",
      phone: "456-789-0123",
      website: "bobbrown.com",
      profilepicture: "https://randomuser.me/api/portraits/men/4.jpg",
      company: {
          name: "Brown Enterprises",
          catchPhrase: "Building the Future",
          bs: "maximize business value"
      },
      address: {
          street: "321 Pine St",
          suite: "Unit 5",
          city: "Central City",
          zipcode: "98765",
          geo: {
              lat: "41.8781",
              lng: "-87.6298"
          }
      }
  },
  {
      name: "Charlie Davis",
      username: "charlied",
      email: "charlie.davis@example.com",
      phone: "567-890-1234",
      website: "charliedavis.com",
      profilepicture: "https://randomuser.me/api/portraits/men/5.jpg",
      company: {
          name: "Davis Dynamics",
          catchPhrase: "Dynamic Solutions",
          bs: "streamline digital workflows"
      },
      address: {
          street: "654 Cedar St",
          suite: "Suite 8",
          city: "Coast City",
          zipcode: "24680",
          geo: {
              lat: "29.7604",
              lng: "-95.3698"
          }
      }
  },
  {
      name: "Diana Evans",
      username: "dianae",
      email: "diana.evans@example.com",
      phone: "678-901-2345",
      website: "dianaevans.com",
      profilepicture: "https://randomuser.me/api/portraits/women/6.jpg",
      company: {
          name: "Evans Innovations",
          catchPhrase: "Innovate to Elevate",
          bs: "empower creative minds"
      },
      address: {
          street: "987 Maple St",
          suite: "Apt. 2A",
          city: "Blüdhaven",
          zipcode: "13579",
          geo: {
              lat: "25.7617",
              lng: "-80.1918"
          }
      }
  },
  {
      name: "Ethan Foster",
      username: "ethanf",
      email: "ethan.foster@example.com",
      phone: "789-012-3456",
      website: "ethanfoster.com",
      profilepicture: "https://randomuser.me/api/portraits/men/7.jpg",
      company: {
          name: "Foster Labs",
          catchPhrase: "Fostering Innovation",
          bs: "redefine user engagement"
      },
      address: {
          street: "159 Spruce St",
          suite: "Unit 10",
          city: "Smallville",
          zipcode: "86420",
          geo: {
              lat: "39.7392",
              lng: "-104.9903"
          }
      }
  },
  {
      name: "Fiona Green",
      username: "fionag",
      email: "fiona.green@example.com",
      phone: "890-123-4567",
      website: "fionagreen.com",
      profilepicture: "https://randomuser.me/api/portraits/women/8.jpg",
      company: {
          name: "Green Ventures",
          catchPhrase: "Go Green, Go Far",
          bs: "drive sustainable growth"
      },
      address: {
          street: "753 Birch St",
          suite: "Suite 15",
          city: "National City",
          zipcode: "97531",
          geo: {
              lat: "32.7157",
              lng: "-117.1611"
          }
      }
  },
  {
      name: "George Harris",
      username: "georgeh",
      email: "george.harris@example.com",
      phone: "901-234-5678",
      website: "georgeharris.com",
      profilepicture: "https://randomuser.me/api/portraits/men/9.jpg",
      company: {
          name: "Harris Holdings",
          catchPhrase: "Holding the Future",
          bs: "optimize global markets"
      },
      address: {
          street: "852 Willow St",
          suite: "Apt. 7C",
          city: "Fawcett City",
          zipcode: "35791",
          geo: {
              lat: "47.6062",
              lng: "-122.3321"
          }
      }
  },
  {
      name: "Hannah Irving",
      username: "hannahi",
      email: "hannah.irving@example.com",
      phone: "012-345-6789",
      website: "hannahirving.com",
      profilepicture: "https://randomuser.me/api/portraits/women/10.jpg",
      company: {
          name: "Irving Insights",
          catchPhrase: "Insightful Solutions",
          bs: "transform business intelligence"
      },
      address: {
          street: "951 Aspen St",
          suite: "Suite 20",
          city: "Gateway City",
          zipcode: "46802",
          geo: {
              lat: "33.4484",
              lng: "-112.0740"
          }
      }
  }
];  

export default function App() {
  const [userData,setUserData] = useState();
  const [usersData,setUsersData] = useState([]);

  //to fetch the users data
  const getUsersData = () => {
      fetch("https://panorbit.in/api/users.json").then((response) => response.json()).then((data) => 
      setUsersData(data.users)
      ).catch((error) => {
        setUsersData(dummyUserDataList);
      });
  }

  //to get users data on render
  useEffect(()=>{
      getUsersData();
  },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage usersData={usersData} setUsersData={setUsersData} setUserData={setUserData} />} />
      <Route path="/home" element={<HomePage usersData={usersData} userData={userData} setUserData={setUserData} />} />
    </Routes>
    </>
  );
}

