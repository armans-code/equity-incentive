import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Education from './pages/Education';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Team from './pages/Team';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/resources"
                    element={
                        <Layout>
                            <Resources />
                        </Layout>
                    }
                />
                <Route
                    path="/education"
                    element={
                        <Layout>
                            <Education />
                        </Layout>
                    }
                />
                <Route
                    path="/team"
                    element={
                        <Layout>
                            <Team />
                        </Layout>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
