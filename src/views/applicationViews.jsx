import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/home";
import { Albums } from "../components/albums/album";
import { EditAlbum } from "../components/albums/editAlbum";
import { ImageGallery } from "../components/images/imageGallery";
import { NewImage } from "../components/images/newImage";
import { UpdateImage } from "../components/images/updateImage";
// import { EditCalendar } from "../components/calendar/editCalendar";
// import { NewCalendar } from "../components/calendar/newCalendar";
import { NewAlbum } from "../components/albums/newAlbum";
// import { Calendar } from "../components/calendar/calendar";
import { MyNavBar } from "../components/nav/nav";
import { NewPost } from "../components/posts/newPost";
import { EditPost } from "../components/posts/editPost";
// import { Posts } from "../components/posts/posts";
import { CalendarApp } from "../components/calendarApp/calendarApp";
import { Post } from "../components/posts/Post";
import { Timeline } from "../components/posts/Timeline";
import { UserTimeline } from "../components/posts/userTimeline";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localMusicUser = localStorage.getItem("music_user");
    const musicUserObject = JSON.parse(localMusicUser);

    setCurrentUser(musicUserObject);
  }, []);

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
        <Route path="/" element={<Timeline currentUser={currentUser} />} />
        <Route path="albums">
          <Route index element={<Albums currentUser={currentUser} />} />
          <Route
            path=":albumId/editAlbum"
            element={<EditAlbum currentUser={currentUser} />}
          />
          <Route
            path="newAlbum"
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
        </Route>
        <Route path="calendarApp">
          <Route index element={<CalendarApp currentUser={currentUser} />} />
          </Route>
        <Route path="post">
          <Route index element={<UserTimeline currentUser={currentUser} />} />
          <Route element={<Post currentUser={currentUser} />} />
            <Route
          path=":postId/editPost"
          element={<EditPost currentUser={currentUser} />}
          />
          <Route
        path="newPost"
        element={<NewPost currentUser={currentUser} />}
          />
          </Route>
        {/* <Route path="calendar">
            <Route index element={<Calendar currentUser={currentUser} />} />
            <Route
              path=":calendarId/editCalendar"
              element={<EditCalendar currentUser={currentUser} />}
            />
            <Route
              path="newCalendar"
              element={<NewCalendar currentUser={currentUser} />}
            />
          </Route> */}

          {/* <Route path="posts">
        <Route index element={<Posts currentUser={currentUser} />} />
        <Route
          path=":postId/editPost"
          element={<EditPost currentUser={currentUser} />}
        />
         <Route
        path="newPost"
        element={<NewPost currentUser={currentUser} />}
      />
      </Route> */}
      
      </Route>
    </Routes>
  );
};
