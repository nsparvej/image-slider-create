var imgBody = document.querySelector('body');

imgBody.style.backgroundColor = 'black'
imgBody.style.height = '100vh'
imgBody.style.width = '100%'
imgBody.style.display = 'flex'
imgBody.style.justifyContent = 'center'
imgBody.style.alignItems = 'center'

var imgDiv = document.createElement('div');

imgDiv.style.height = '700px'
imgDiv.style.width = '500px'


imgDiv.classList.add('myDiv');
imgBody.appendChild(imgDiv);


var showImage = document.createElement('img');
imgDiv.appendChild(showImage);

showImage.style.height = '500px'
showImage.style.width = '500px'


var index = 0;

var nextButton = document.createElement('button');
imgDiv.appendChild(nextButton);
nextButton.innerHTML = 'Next'
nextButton.addEventListener('click', function () {

    index++
    showImage.src = imgSrc[index];

    if (index >= imgSrc.length) {
        showImage.src = imgSrc[0]

    }
})


nextButton.style.fontSize = '18px'
nextButton.style.padding = '5px 10px'
nextButton.style.backgroundColor = 'aqua'
nextButton.style.marginRight = '365px'


var previousButton = document.createElement('button');
imgDiv.appendChild(previousButton);
previousButton.innerHTML = 'prev'

// var index = 4;
previousButton.addEventListener('click', function () {
    


    console.log(index);
    if(index > 0){

        
        index = index - 1;
        showImage.src = imgSrc[index];
        console.log([index])
    }
    else{
        index=imgSrc.length-1
    }

})



previousButton.style.fontSize = '18px'
previousButton.style.padding = '5px 10px'
previousButton.style.backgroundColor = 'aqua'

showImage.src = 'https://media.istockphoto.com/id/1887444772/photo/three-diverse-professional-women-in-business-attire-smiling-and-posing-in-an-office.jpg?s=1024x1024&w=is&k=20&c=DbWPa69Mom9o2Chb36HDQSiJmLU13iSTndwf0H1gDIA=';

var imgSrc = ['https://media.istockphoto.com/id/1887444772/photo/three-diverse-professional-women-in-business-attire-smiling-and-posing-in-an-office.jpg?s=1024x1024&w=is&k=20&c=DbWPa69Mom9o2Chb36HDQSiJmLU13iSTndwf0H1gDIA=', 'https://media.istockphoto.com/id/1933752815/photo/modern-interior-of-living-room-with-leather-armchair-on-wood-flooring-and-dark-blue-wall.jpg?s=1024x1024&w=is&k=20&c=zJyB6GTOGorMV4Uo3HhYdpmKUblV-jzCW0Ib5E3zuZQ=', 'https://media.istockphoto.com/id/1366924614/photo/living-room-interior-compositi-on-wall-background-interior-mockup-3d-render.jpg?s=1024x1024&w=is&k=20&c=8EHYoZfel2LFQsoOFoMjVzZxSlg22KYph2K63iAmaNI=', 'https://media.istockphoto.com/id/1716534402/photo/room-with-empty-blue-wall-panelling-with-two-armchairs.jpg?s=1024x1024&w=is&k=20&c=clwfdixfmY2To0f-suW5ZgWRBUVz5uQq0i4n7AEYTpI=', 'https://media.istockphoto.com/id/1050207550/photo/modern-classic-interior-with-armchairs-lamp-table-wall-panels-and-wooden-floor.jpg?s=1024x1024&w=is&k=20&c=OgH3JP9bH3RexwDuSSdwodZfFZBghJ3lBuymQnGVhKI='];
console.log(imgBody);



