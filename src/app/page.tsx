import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-teal-700 font-semibold">Welcome to Appz Builder!</h1>
      <Button className="mt-4" variant="default">
        Get Started
      </Button>
    </div>
  );
};

export default HomePage;
