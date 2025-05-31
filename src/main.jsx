import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Error from './components/Error/Error.jsx';

function AppWithResponsiveMessage() {
  return (
    <div>
      {/* نمایش محتوای اصلی برای صفحه‌های بزرگتر از 992px */}
      <div className="hidden lg:block">
        <StrictMode>
          <App />
        </StrictMode>
      </div>

      {/* نمایش پیام برای صفحه‌های کوچکتر از 992px */}
      <div className='lg:hidden'>
      <Error/>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<AppWithResponsiveMessage />);
