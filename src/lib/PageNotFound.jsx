import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-bold text-primary/30 font-mono">404</h1>
        <div className="w-16 h-px bg-primary/20 mx-auto" />
        <p className="text-muted-foreground">This page was lost in the desert sands.</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}