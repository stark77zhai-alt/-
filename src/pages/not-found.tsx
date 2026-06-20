import { Layout } from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-6 z-10 min-h-[60vh]">
        <h1 className="text-xl font-light tracking-[0.1em] mb-4">404</h1>
        <p className="text-sm font-extralight tracking-widest text-muted uppercase">Page Not Found</p>
      </div>
    </Layout>
  );
}
