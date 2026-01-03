export const generateRows = (count = 5000) => {
    const rows = [];
    for(let i = 1; i <= count; i++) {
      rows.push({ id: i, name: `User ${i}`, email: `user${i}@mail.com` });
    }
    return rows;
  }