import { Route, Routes } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutPageLink from './components/AboutPageLink';
import { FeedbackProvider } from './context/feedbackContext';

function App() {

  return (
    <>
      <FeedbackProvider>
        <Header name="Feedback" />
        <div className="container">
          <Routes>
            <Route path='/' element={<>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutPageLink />
            </>} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
