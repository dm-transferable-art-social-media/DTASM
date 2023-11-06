import { BskyAgent } from '@atproto/api';

async function connectToBlueSkyServer() {
  try {
      const agent = new BskyAgent({ service: 'https://bsky.social' });

      // Login to the Blue Sky server
      await agent.login({
          identifier: 'blueskyusernmae',
          password:'blueskypassword',
      }).then(() => {
          console.log('Login successful');
      }).catch(error => {
          console.error('Login failed:', error);
      });

      // Post a message
      await agent.post({
          text: "Hello world"
      }).then(() => {
          console.log('Post successful');
      }).catch(error => {
          console.error('Post failed:', error);
      });
  } catch (error) {
      console.error('Error connecting to Blue Sky server:', error);
  }
}

   
export { connectToBlueSkyServer };
