import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLoader from "@/components/layout/PageLoader";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Academics = lazy(() => import("@/pages/Academics"));
const Admissions = lazy(() => import("@/pages/Admissions"));
const Facilities = lazy(() => import("@/pages/Facilities"));
const Faculty = lazy(() => import("@/pages/Faculty"));
const StudentLife = lazy(() => import("@/pages/StudentLife"));
const News = lazy(() => import("@/pages/News"));
const NewsArticle = lazy(() => import("@/pages/NewsArticle"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background font-sans text-foreground antialiased">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
