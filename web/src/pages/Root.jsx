import { Link, Outlet, useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        {isLoggedIn && ( <Link to='/' style={{ marginRight: '1rem' }}>
          Почетна
        </Link>)}
        {!isLoggedIn && (<Link to='/login' style={{ marginRight: '1rem' }}>
          Најава
        </Link>)}
        {!isLoggedIn && (<Link to='/signin' style={{ marginRight: '1rem' }}>
          Регистрирај се
        </Link>)}
        {isLoggedIn && (
        <button style={{ marginRight: '1rem' }} onClick={handleLogout}>
            Одјава
        </button>)}
          {isLoggedIn && (
        <Link to='/pochva' style={{ marginRight: '1rem'}}>
              Почви
        </Link>
          )}
        {isLoggedIn && (
          <Link to='/pocva-chat' style={{marginRight: '1rem'}}>
            Разговор со AI
          </Link>
        )}
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;