import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { MyNavBar } from "../components/nav/nav";
import { Home } from "../components/home/home";
import { Albums } from "../components/albums/album";
import { EditAlbum } from "../components/albums/editAlbum";
import { ImageGallery } from "../components/images/imageGallery";
import { NewImage } from "../components/images/newImage";
import { UpdateImage } from "../components/images/updateImage";
import { EditCalendar } from "../components/calendar/editCalendar";
import { NewCalendar } from "../components/calendar/newCalendar";
import { NewAlbum } from "../components/albums/newAlbum";








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
      <Route path="albums">
        <Route index element={<Albums currentUser={currentUser} />} />
        <Route
          path=":albumId/editAlbum"
          element={<EditAlbum currentUser={currentUser} />}
        />
        <Route
          path=":albumId/newAlbum"
          element={<NewAlbum currentUser={currentUser} />}
        />
      </Route>
      <Route path="images">
          <Route index element={<ImageGallery currentUser={currentUser} />} />
          <Route
            path="newImage"
            element={<NewImage currentUser={currentUser} />}
          />
           <Route
          path="editImages/:imageId"
          element={<UpdateImage currentUser={currentUser} />}
        /> 
        <Route path="calendar">
        <Route index element={<Calendar currentUser={currentUser} />} />
        <Route
          path=":calendarId/editCalendar"
          element={<EditCalendar currentUser={currentUser} />}
        />
        <Route
          path=":calendarId/newCalendar"
          element={<NewCalendar currentUser={currentUser} />}
        />
      </Route>


      </Route> 
      </Route>
  </Routes>
);
};

