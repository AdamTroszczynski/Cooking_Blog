import { createApp } from '@/app';
import dotenv from 'dotenv';
import { BASE_URL } from '@/const/commonConst';

dotenv.config();

const app = createApp();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${BASE_URL}:${port}`);
});
