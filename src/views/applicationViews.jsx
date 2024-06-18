import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { MyNavBar } from "../components/nav/nav";
import { Home } from "../components/home/home";
import { Albums } from "../components/albums/album";
import { EditAlbum } from "../components/albums/editAlbum";







export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localShellUser = localStorage.getItem("music_user")
    const shellUserObject = JSON.parse(localShellUser)

    setCurrentUser(shellUserObject)
  }, [])

  return (
    <Routes>
    <Route
      path="/"
      element={
        <>
          <MyNavBar />
          <Outlet />
        </>
      }
    >
    <Route path="/" element={<Home currentUser={currentUser} />} />
      <Route path="/albums">
        <Route index element={<Albums currentUser={currentUser} />} />
        <Route
          path=":albumId/editAlbum"
          element={<EditAlbum currentUser={currentUser} />}
        />
      </Route>
     
    </Route>
  </Routes>
);
};

//finish appviews, return routes/outlets, navbar