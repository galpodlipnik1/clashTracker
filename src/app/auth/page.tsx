import AuthForm from './components/AuthForm';
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: isMobile
          ? undefined
          : 'url(/images/coc_wallpaper.jpg)',
      }}
      className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 bg-cover bg-center bg-no-repeat"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
