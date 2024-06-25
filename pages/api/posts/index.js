export default async function handler(req, res) {
    if (req.method === 'GET') {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      res.status(200).json(posts);
    } else if (req.method === 'POST') {
      const { title, body } = req.body;
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const post = await response.json();
      res.status(201).json(post);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  