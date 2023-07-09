const API_KEY = 'AIzaSyD7vy7NGIan6qvfPxUjP6NMMsz9UQ3Z8Fk';

export const environment = {
  production: false,
  strapiUrl: 'http://localhost:1337',
  strapiUrlApi: 'http://localhost:1337/api',
  loginFirebase: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  signupFirebase: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
};
