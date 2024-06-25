export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await response.json();
      res.status(200).json(post);
    } else if (req.method === 'PUT') {
      const { title, body } = req.body;
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const updatedPost = await response.json();
      res.status(200).json(updatedPost);
    } else if (req.method === 'DELETE') {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      res.status(204).end();
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  