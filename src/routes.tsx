import type { RouteRecord } from 'vite-react-ssg'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import WorkIndex from './pages/WorkIndex'
import WorkDetail from './pages/WorkDetail'
import AIShowcase from './pages/AI'
import Process from './pages/Process'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import { listBlogSlugs, listWorkSlugs } from './lib/content'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <WorkIndex /> },
      {
        path: 'work/:slug',
        element: <WorkDetail />,
        getStaticPaths: () => listWorkSlugs(),
      },
      { path: 'ai', element: <AIShowcase /> },
      { path: 'process', element: <Process /> },
      { path: 'blog', element: <BlogIndex /> },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        getStaticPaths: () => listBlogSlugs(),
      },
      { path: 'resume', element: <Resume /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
