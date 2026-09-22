import { Redirect, Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Works from "@/pages/works";
import WorkDetail from "@/pages/work-detail";
import About from "@/pages/about";
import Reel from "@/pages/reel";
import Print from "@/pages/print";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/works/:id" component={WorkDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact">
        <Redirect to="/about" />
      </Route>
      <Route path="/reel" component={Reel} />
      <Route path="/print" component={Print} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
