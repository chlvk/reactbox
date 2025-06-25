import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "react-router-dom";

const URL = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async () => {
  const result = await fetch(URL);
  if (!result.ok) {
    throw new Error("Failed to fetch posts((");
  }
  return result.json();
};

function Layout() {
  const navigation = useNavigation(); // navigation.state === "idle" || "loading" || "submitting"]
  return (
    <div>
      {navigation.state === "loading" && <p>😱Loading...😱</p>}
      <Outlet />
    </div>
  );
}

// Component for the Home page
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        Go to the <Link to="/posts">Posts</Link> page to view the list of posts.
      </p>
    </div>
  );
}

function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Component for the Posts page
function Posts() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />, // Home page
      },
      {
        path: "/posts",
        element: <Posts />, // Posts page
        loader: fetchData,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "*",
        element: <h1>404: Page Not Found</h1>, // Component for non-existent routes
      },
    ],
  },
]);

// Main application component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
