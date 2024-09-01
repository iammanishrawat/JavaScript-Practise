const resolveButton = document.querySelector("#resolved-button")
const rejectButton = document.querySelector("#reject-button")

const promiseOne = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('I am resolved fulfilled')
    // }, 5000)

    resolveButton.addEventListener('click', () => {
        resolve('I am resolved fulfilled')
        // console.log('Hiiiiii'); // in resolve it will work but still we do it in .then method
    })

    rejectButton.addEventListener('click', () => {
        reject('I am rejected')
        // console.log('opppsss rejected'); // if i do this without .catch method, ot will still throw error
    })
})

promiseOne.then(() => {
    console.log('Hiiiiii resolved'); 
}) .catch(() => {
    console.log('oops rejected');
})