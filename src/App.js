import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import { DefaultLayout } from './layouts/';
import Controls from './layouts/components/Controls';
import { privateRoutes } from './routes';
import { useEffect, useState } from 'react';

function App() {

    // Hàm xử lý sự kiện chuột phải
  const handleContextMenu = (event) => {
    event.preventDefault(); // Ngăn chặn menu ngữ cảnh mặc định
  };

  // Áp dụng sự kiện cho toàn bộ thẻ body
  useEffect(() => {
    document.body.addEventListener('contextmenu', handleContextMenu);
    
    // Dọn dẹp sự kiện khi component unmount
    return () => {
      document.body.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Comp = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <div>
                                        <Wrapper>
                                            <Layout>
                                                <Comp />
                                            </Layout>
                                            <div className="control_music">
                                                <Controls />
                                            </div>
                                        </Wrapper>
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
