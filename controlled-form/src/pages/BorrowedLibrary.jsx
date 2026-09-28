import React from 'react';

function BorrowedLibrary() {
  // Sample data for borrowed books matching the dashboard theme
  const borrowedBooks = [
    { id: 1, title: "Les Misérables", author: "Victor Hugo", borrowDate: "2026-09-10", dueDate: "2026-10-10", status: "Active" },
    { id: 2, title: "The Old Man and the Sea", author: "Ernest Hemingway", borrowDate: "2026-08-15", dueDate: "2026-09-15", status: "Overdue" }
  ];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '10px' }}>
      <h2 style={{ color: '#2b6cb0', marginBottom: '20px' }}>My Borrowed Books</h2>
      <p style={{ color: '#718096', marginBottom: '25px' }}>Track your active book borrowings and return deadlines.</p>

      {/* Borrowed Books Table / List Layout */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', padding: '20px', border: '1px solid #edf2f7' }}>
        {borrowedBooks.map(book => (
          <div key={book.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px 0', 
            borderBottom: book.id === borrowedBooks.length ? 'none' : '1px solid #edf2f7' 
          }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#2d3748', fontSize: '16px' }}>{book.title}</h4>
              <p style={{ margin: 0, color: '#718096', fontSize: '13px' }}>Author: {book.author}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '40px', fontSize: '14px', color: '#4a5568' }}>
              <div><b>Borrowed:</b> {book.borrowDate}</div>
              <div><b>Due Date:</b> {book.dueDate}</div>
            </div>

            <div>
              <span style={{ 
                backgroundColor: book.status === 'Active' ? '#c6f6d5' : '#fed7d7', 
                color: book.status === 'Active' ? '#22543d' : '#742a2a', 
                padding: '5px 12px', 
                borderRadius: '15px', 
                fontSize: '12px', 
                fontWeight: 'bold' 
              }}>
                {book.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BorrowedLibrary;