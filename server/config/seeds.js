const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Shorts' },
    { name: 'Hoodies' },
    { name: 'Joggers' },
    { name: 'Sweats' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Rex',
      description:
        'Loyal and freindly with a really long tongue',
      price:  '129',
      image: 'https://youths-rewards.s3.us-west-1.amazonaws.com/20170802_114247_Original.jpg',
      quantity: '12',
      category: categories[0]._id
    },
    {
      name: 'Koda',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      price: '300',
      image: 'https://youths-rewards.s3.us-west-1.amazonaws.com/IMG_3132.jpeg',
      quantity: '21',
      category: categories[0]._id

    },
    {
      name: 'Oliver',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      quantity: '12',
      image: 'https://youths-rewards.s3.us-west-1.amazonaws.com/20180930_184511_Original.jpg',
      price: '20'
    },
    {
      name: 'Zeus',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'https://youths-rewards.s3.us-west-1.amazonaws.com/1F044785-FA82-4F4F-AF5D-BC9EE37FAFED_4_5005_c.jpeg',
      quantity: '50',
      price: '280'
      
    }
    // ,
    // {
    //   name: 'Set of Wooden Spoons',
    //   category: categories[1]._id,
    //   description:
    //     'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
    //   image: 'wooden-spoons.jpg'
    // },
    // {
    //   name: 'Camera',
    //   category: categories[2]._id,
    //   description:
    //     'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
    //   image: 'camera.jpg'
    // },
    // {
    //   name: 'Tablet',
    //   category: categories[2]._id,
    //   description:
    //     'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
    //   image: 'tablet.jpg'
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   category: categories[3]._id,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg'
    // },
    // {
    //   name: 'Spinning Top',
    //   category: categories[4]._id,
    //   description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
    //   image: 'spinning-top.jpg'
    // },
    // {
    //   name: 'Set of Plastic Horses',
    //   category: categories[4]._id,
    //   description:
    //     'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
    //   image: 'plastic-horses.jpg'
    // },
    // {
    //   name: 'Teddy Bear',
    //   category: categories[4]._id,
    //   description:
    //     'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
    //   image: 'teddy-bear.jpg'
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[4]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',

    // }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Rene',
    lastName: 'Rodriguez',
    email: 'rodriguez@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
