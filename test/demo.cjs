const nekos = require( '../index.cjs').default;

console.log('--- 1. Default (Random Cat) ---');
nekos();

console.log('\n--- 2. Specific ID (Cat #first_cat) ---');
nekos({ id: 'first_cat' });

console.log('\n--- 3. Specific ID with Gradient Colors ---');
nekos({ id: 'first_cat', colors: ['cyan', 'pink'] });

console.log('\n--- 4. Single Random Color ---');
nekos({ colors: 'RANDOM' });

console.log('\n--- 5. Rainbow Cat! ---');
nekos({ colors: 'RAINBOW' });

console.log('\n--- 6. Mixed Gradient with Random Color ---');
nekos({ colors: ['#FFFFFF', 'RANDOM'] });

console.log('\n--- 7. Non-existent ID (Fallback to Random) ---');
nekos({ id: 'non_existent_cat' });
