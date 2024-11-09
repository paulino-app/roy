import { Hono } from 'hono';

const app = new Hono();

/**
 *
 *
 *
 * GET
 * POST
 * PUT
 * DELETE
 *
 *
 * HEADER
 * BODY
 *
 */

app.get('/', (c) => {
  return c.text('La API de Roy');
});

app.post('/empleados', async (context) => {
  const body = await context.req.json();
  console.log(body);

  //
  return context.json({}, 200);
});

app.get('/empleados', (context) => {
  const employees = [
    {
      nombre: 'Roy',
      edad: 20
    },
    {
      nombre: 'Lina',
      edad: 23
    },
    {
      nombre: 'Pao',
      edad: 24
    }
  ];

  return context.json(employees);
});

export default app;
