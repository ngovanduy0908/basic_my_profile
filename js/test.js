const testActives = document.querySelectorAll('.test-active')
const actived = document.querySelector('.test-active.active')

testActives.forEach((testActive, index) => {
    testActive.onclick = function(){
       
        document.querySelector('.test-active.active').classList.remove('active')
        
        this.classList.add('active')

    }
})