import StickyNav from '../components/StickyNav';
import VideoAnimation from '../components/VideoAnimation';
import UserProfile from '../components/UserProfile';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <StickyNav />
      <div className="flex flex-col border-2 mx-96 w-100 h-screen mx-[28%]">
        <VideoAnimation />
        <UserProfile />
        <Navbar />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
