import "./sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo">

        <img
          src="/book_img.png"
          alt="Library Logo"
          className="logo-img"
        />

        <h3>My Library</h3>

      </div>


      {/* Navigation */}
      <nav>

        <a href="#" className="active">
          🏠
          <span>Dashboard</span>
        </a>

        <a href="#">
          🔍
          <span>Find Book</span>
        </a>

        <a href="#">
          🏢
          <span>Find Library</span>
        </a>

        <a href="#">
          📚
          <span>All Books</span>
        </a>

        <a href="#">
          🗂️
          <span>Categories</span>
        </a>

        <a href="#">
          👥
          <span>Members</span>
        </a>

        <a href="#">
          📖
          <span>Borrowed Books</span>
        </a>

        <a href="#">
          🕐
          <span>Due Books</span>
        </a>

        <a href="#">
          ❤️
          <span>Favorite Books</span>
        </a>

        <a href="#">
          👤
          <span>My Account</span>
        </a>

        <a href="#">
          ⚙️
          <span>Settings</span>
        </a>

      </nav>


      {/* Help */}
      <div className="help">

        <b>?</b>

        <span>
          Need Help?
        </span>

      </div>

    </aside>
  );
}

export default Sidebar;