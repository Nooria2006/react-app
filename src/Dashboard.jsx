import "./dashboard.css";

function Dashboard() {
  const categories = [
    { name: "📘 Fiction", percentage: 35 },
    { name: "📗 Science", percentage: 20 },
    { name: "📕 History", percentage: 15 },
    { name: "📙 Psychology", percentage: 18 },
    { name: "📓 Technology", percentage: 12 },
  ];

  const popularBooks = [
    { name: "📕 The Kite Runner", percentage: 95 },
    { name: "📘 Atomic Habits", percentage: 88 },
    { name: "📗 The Alchemist", percentage: 82 },
    { name: "📙 Psychology of Money", percentage: 76 },
    { name: "📓 Pride and Prejudice", percentage: 70 },
  ];

  const usage = [
    { name: "📖 Books Read", percentage: 45 },
    { name: "🔖 Books Borrowed", percentage: 25 },
    { name: "❤️ Favorites", percentage: 15 },
    { name: "📚 Saved Books", percentage: 15 },
  ];

  const recentBooks = [
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      cover: "📕",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "📘",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "📗",
    },
    {
      title: "Ikigai",
      author: "Héctor García",
      cover: "📙",
    },
  ];

  return (
    <main className="main">

      {/* Header */}
      <header className="dashboard-header">

        <div className="header-left">

          <button className="menu-button">
            ☰
          </button>

          <div>
            <small>
              🏠 / Dashboard
            </small>

            <h3>Dashboard</h3>
          </div>

        </div>

        <div className="header-right">

          <div className="search">
            🔍

            <input
              type="text"
              placeholder="Search books..."
            />
          </div>

          <span className="account">
            👤 My Account
          </span>

          <span className="notification">
            🔔
          </span>

        </div>

      </header>


      {/* Main Content */}
      <section className="content">

        <h1>Welcome To My Library! 📚</h1>


        {/* Find Book */}
        <div className="find-section">

          <h2>Find a Book 🔍</h2>

          <p>
            Search for your favorite book.
          </p>

          <div className="find-box">

            <input
              type="text"
              placeholder="Enter book name..."
            />

            <button>
              🔍 Search
            </button>

          </div>

        </div>


        {/* Dashboard Cards */}
        <div className="cards">


          {/* Books by Category */}
          <div className="card">

            <h3>Books by Category</h3>

            <div className="chart-row">

              <div className="donut donut1">
                <div></div>
              </div>

              <div className="list">

                {categories.map((category) => (
                  <p key={category.name}>
                    {category.name}
                    <span>
                      {category.percentage}%
                    </span>
                  </p>
                ))}

              </div>

            </div>

            <button>
              MORE DETAILS
            </button>

          </div>


          {/* Popular Books */}
          <div className="card">

            <h3>Popular Books</h3>

            <div className="book-list">

              {popularBooks.map((book) => (
                <p key={book.name}>
                  {book.name}

                  <span>
                    {book.percentage}%
                  </span>
                </p>
              ))}

            </div>

            <button>
              VIEW ALL BOOKS
            </button>

          </div>


          {/* Library Usage */}
          <div className="card">

            <h3>Library Usage</h3>

            <div className="chart-row">

              <div className="donut donut2">
                <div></div>
              </div>

              <div className="list">

                {usage.map((item) => (
                  <p key={item.name}>
                    {item.name}

                    <span>
                      {item.percentage}%
                    </span>
                  </p>
                ))}

              </div>

            </div>

            <button>
              MORE DETAILS
            </button>

          </div>


          {/* Reading Statistics */}
          <div className="card reading">

            <h3>Reading Statistics</h3>

            <h2>
              72%

              <span>
                +8%
              </span>
            </h2>

            <p className="subtitle">
              Your reading progress this month
            </p>


            <div className="line-chart">

              <svg viewBox="0 0 500 180">

                <polyline
                  points="
                    0,145
                    50,125
                    100,135
                    150,90
                    200,110
                    250,70
                    300,95
                    350,50
                    400,75
                    450,45
                    500,20
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />

              </svg>

            </div>

          </div>

        </div>


        {/* Recently Added Books */}
        <div className="books-section">

          <h2>
            Recently Added Books
          </h2>

          <div className="books">

            {recentBooks.map((book) => (
              <div
                className="book"
                key={book.title}
              >

                <div className="cover">
                  {book.cover}
                </div>

                <h3>
                  {book.title}
                </h3>

                <p>
                  {book.author}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="footer">

        <p>
          © 2026 My Library. All Rights Reserved.
        </p>

        <div className="footer-links">

          <a href="#">
            Privacy
          </a>

          <a href="#">
            Terms
          </a>

          <a href="#">
            Contact
          </a>

        </div>

      </footer>

    </main>
  );
}

export default Dashboard;