import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { loader as landingLoader } from "./pages/Landing";
import { action as newsletterAction } from "./pages/NewsLetter";

const STALE_TIME = 1000 * 60 * 5;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
        // children: [
        //   {
        //     path: 'somebody',
        //     element: <h2>About somebody</h2>,
        //   },
        //   {
        //     index: true,
        //     element: <h2>About company</h2>,
        //   },
        // ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
