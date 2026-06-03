import 'dotenv/config';
import transporter from '../config/email';

async function run() {
  try {
    const ok = await transporter.verify();
    console.log('SMTP connection ok:', ok);
  } catch (err) {
    console.error('SMTP verify failed:', err);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
