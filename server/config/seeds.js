const db =  require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Wallets' },
        { name: 'Bags' },
        { name: 'Belts' },
        { name: 'Accessories' }
    ]);

    console.log('Categories Seeded!');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Basic Wallet',
            description:
                'Our best seller! A simple cardholder wallet that is slim and compact yet very versitile. Holds up to 6 cards very comfortably.',
            image: '',
            category: categories[0]._id,
            price: 39.99
        },
        {
            name: 'Classic Billfold',
            description:
                'A classic wallet. More for the cash carrier, or always prepared individual. Holds 6 cards and cash inside. All natural veg-tan leather.',
            image: '',
            category: categories[0]._id,
            price: 49.99
        },
        {
            name: 'Tote Bag',
            description:
                'This can be the last tote bag you buy! All handmade leather tote bag in the perfect size for everyday use!',
            image: '',
            category: categories[1]._id,
            price: 44.99
        },
        {
            name: 'Baguette Bag',
            description:
                'Small baguette bag for the daily essentials. Leather shoulder strap provided for easy carrying.',
            image: '',
            category: categories[1]._id,
            price: 59.99
        },
        {
            name: 'Everyday Belt',
            description:
                'Your classic leather belt that you will never want to go without. 1 3/4" is the perfect size for everyday use no matter the occasion!',
            image: '',
            category: categories[2]._id,
            price: 49.99
        },
        {
            name: 'Wristlet Pouch',
            description:
                'Small zip-up pouch that carries your cards and loose change. Wristlet provides security and ease of carry!',
            image: '',
            category: categories[3]._id,
            price: 29.99
        },
        {
            name: 'Basic Wallet',
            description:
                'Our best seller! A simple cardholder wallet that is slim and compact yet very versitile. Holds up to 6 cards very comfortably.',
            image: '',
            category: categories[3]._id,
            price: 39.99
        },
        {
            name: 'Custom Watch Straps',
            description:
                'Tired of your boring old watch straps? We make made to order watch straps for nearly any watch! Add this to your cart and checkout. Then with the sam email used for your account, shoot us a message on the contact page with your idea! A team member will reach back out to straighten out the details with you!',
            image: '',
            category: categories[3]._id,
            price: 39.99
        }
    ]);

    console.log('Products have been seeded!');

    await User.deleteMany();

    await User.create({
        firstName: 'Cris',
        lastName: 'Graciano',
        email: 'cristobalgraciano98@gmail.com',
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

    console.log('Users have been seeded!');

    process.exit();
});