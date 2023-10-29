import './errorPage.css'

function errorPage() {
  return (
    <div class="error-message">
      <p style={{color:'#8D8D8D'}} class="title-1">404</p>
      <p class="title-2">The page you were looking for does not exist.</p>
      <button>
        Back to home
        <i class="ri-arrow-right-line"></i>
      </button>
    </div>
  );
}

export default errorPage;
