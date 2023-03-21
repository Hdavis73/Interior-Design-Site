// const reviewBlocks = Array.from(document.querySelectorAll('.review-block'));
// console.log(reviewBlocks)
// reviewBlocks.forEach(block => {
//     let reviewText = block.querySelector('.review-inner')
//     console.log(reviewText)
//     // reviewText.addEventListener('mouseenter', () => {
//     //     reviewText.classList.add('hovering')
//     // })

//     // reviewText.addEventListener('mouseleave', () => {
//     //     reviewText.classList.remove('hovering')
//     // })
// })

let cards = Array.from(document.querySelectorAll('.review-card'));

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
})

