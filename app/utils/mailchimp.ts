// src/utils/mailchimp.ts

// import { PrismaClient } from '@prisma/client';
// import Mailchimp from 'mailchimp-api-v3';

// const prisma = new PrismaClient();
// const mailchimp = new Mailchimp('7eead599c7b8c33ca679d4d66f80f61d-us22');

// async function exportEmailsToMailchimp() {
//   // Mailchimp integration code try {
//     // Retrieve users with valid email addresses
//     const users = await prisma.user.findMany({ where: { email: { not: null } } });

//     // Format user data for Mailchimp
//     const emailList = users.map((user) => ({ email_address: user.email }));

//     // Call Mailchimp API to add subscribers
//     await mailchimp.lists.addListMembers('d3622899c8', {
//       members: emailList,
//       update_existing: true, // Update existing subscribers if they're already in the list
//     });

//     console.log('Emails exported to Mailchimp successfully.');
//   } catch (error) {
//     console.error('Error exporting emails to Mailchimp:', error);
//     throw error; // Rethrow the error to be handled elsewhere if needed
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// export { exportEmailsToMailchimp };
