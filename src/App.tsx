import React from 'react';
import Header from './components/Header/Header';
import {Outlet, Route, Routes} from 'react-router-dom';
import {HomePage, AdminPage, DetailPage, NotFoundPage, RegisterPage, UserPage} from './Pages';
import {CommonLayout, WithSideBarLayout} from './layouts';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="row p-2 px-2">
          <Routes>
            <Route
              element={
                <WithSideBarLayout>
                  <Outlet />
                </WithSideBarLayout>
              }
            >
              <Route path="/admin-page/" element={<AdminPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/users/:id" element={<UserPage />} />
            </Route>
            <Route
              element={
                <CommonLayout>
                  <Outlet />
                </CommonLayout>
              }
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
